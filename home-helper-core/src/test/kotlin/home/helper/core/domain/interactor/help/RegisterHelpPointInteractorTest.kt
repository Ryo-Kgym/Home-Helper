/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.operation.Operation
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpPointInput
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.RegisterMessageGateway
import home.helper.core.gateway.operation.OperationGateway
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import java.time.LocalDate

internal class RegisterHelpPointInteractorTest {

    private val saveGateway: SaveDefaultGateway<RegisterHelpPointOutput> = mock()
    private val operationGateway: OperationGateway = mock()
    private val registerMessageGateway: RegisterMessageGateway = mock()

    private val target = RegisterHelpPointInteractor(
        helpPointSaveGateway = saveGateway,
        operationGateway = operationGateway,
        registerMessageGateway = registerMessageGateway,
    )

    @Test
    fun register() {
        val actual = target.register(
            RegisterHelpPointInput(
                helpItemList = listOf(
                    HelpItem(1, "項目1", 100),
                    HelpItem(2, "項目2", 200),
                    HelpItem(3, "項目3", 300),
                ),
                userId = UserId(1),
            )
        )
        val expected = RegisterOutput(
            HomeHelperMessage("お手伝いポイントを3件登録したよ!")
        )
        assertThat(actual, `is`(expected))
    }

    @BeforeEach
    internal fun setUp() {
        `when`(
            saveGateway.save(
                RegisterHelpPointOutput(
                    helpItemList = listOf(
                        HelpItem(1, "項目1", 100),
                        HelpItem(2, "項目2", 200),
                        HelpItem(3, "項目3", 300),
                    ),
                    totalHelpPoint = HelpPoint(600),
                    userId = UserId(1),
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

        `when`(operationGateway.load())
            .thenReturn(Operation(1, LocalDate.of(2022, 11, 12)))

        `when`(
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