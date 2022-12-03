/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.operation.Operation
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_point.RegisterHelpPointInput
import home.helper.core.dto.help_point.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway
import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import java.time.LocalDate

internal class RegisterHelpPointInteractorTest {

    private val saveGateway: SaveDefaultGateway<RegisterHelpPointOutput> = mock()
    private val operationGateway: OperationGateway = mock()
    private val registerMessageGateway: SaveMessageGateway = mock()

    private val target = RegisterHelpPointInteractor(
        helpPointSaveGateway = saveGateway,
        operationGateway = operationGateway,
        saveMessageGateway = registerMessageGateway,
    )

    @Test
    fun register() {
        val actual = target.register(
            RegisterHelpPointInput(
                helpItemList = listOf(
                    HelpItem("1", "項目1", 100),
                    HelpItem("2", "項目2", 200),
                    HelpItem("3", "項目3", 300),
                ),
                userId = UserId("1"),
            )
        )
        val expected = RegisterOutput(
            HomeHelperMessage("お手伝いポイントを3件登録したよ!")
        )
        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }

    @BeforeEach
    internal fun setUp() {
        Mockito.`when`(
            saveGateway.save(
                RegisterHelpPointOutput(
                    helpItemList = listOf(
                        HelpItem("1", "項目1", 100),
                        HelpItem("2", "項目2", 200),
                        HelpItem("3", "項目3", 300),
                    ),
                    totalHelpPoint = HelpPoint(600),
                    userId = UserId("1"),
                    earnedDate = LocalDate.of(2022, 11, 12),
                )
            )
        )
            .thenReturn(
                SaveOutput(
                    result = 3,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
                )
            )

        Mockito.`when`(operationGateway.load())
            .thenReturn(Operation(1, LocalDate.of(2022, 11, 12)))

        Mockito.`when`(
            registerMessageGateway.getMessage(
                SaveOutput(
                    result = 3,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
                )
            )
        )
            .thenReturn(HomeHelperMessage("お手伝いポイントを3件登録したよ!"))

    }

}