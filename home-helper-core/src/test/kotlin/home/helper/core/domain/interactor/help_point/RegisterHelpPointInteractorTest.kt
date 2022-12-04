/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import java.time.LocalDateTime
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help_item.MultipleHelpItem
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
                multipleHelpItems = listOf(
                    MultipleHelpItem(id = "1", name = "項目1", point = 100, count = 1),
                    MultipleHelpItem(id = "2", name = "項目2", point = 200, count = 2),
                    MultipleHelpItem(id = "3", name = "項目3", point = 300, count = 3),
                ),
                userId = UserId("1"),
            )
        )
        val expected = RegisterOutput(
            HomeHelperMessage("お手伝いポイントを3件登録したよ!")
        )
        assertThat(actual, `is`(expected))
    }

    @BeforeEach
    internal fun setUp() {
        Mockito.`when`(
            saveGateway.save(
                RegisterHelpPointOutput(
                    helpItemList = listOf(
                        MultipleHelpItem(id = "1", name = "項目1", point = 100, count = 1),
                        MultipleHelpItem(id = "2", name = "項目2", point = 200, count = 2),
                        MultipleHelpItem(id = "3", name = "項目3", point = 300, count = 3),
                    ),
                    totalHelpPoint = HelpPoint(100 * 1 + 200 * 2 + 300 * 3),
                    userId = UserId("1"),
                    earnedDateTime = LocalDateTime.of(2022, 11, 12, 12, 23, 34),
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
            .thenReturn(Operation(1, LocalDateTime.of(2022, 11, 12, 12, 23, 34)))

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