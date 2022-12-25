/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import java.time.LocalDateTime
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.exchange_item.MultipleExchangeItem
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.operation.Operation
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_point.ExchangeHelpPointInput
import home.helper.core.dto.help_point.ExchangeHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway

internal class ExchangeHelpPointInteractorTest {
    private val operationGateway: OperationGateway = mock()
    private val helpPointSaveGateway: SaveDefaultGateway<ExchangeHelpPointOutput> = mock()
    private val saveMessageGateway: SaveMessageGateway = mock()

    private val target = ExchangeHelpPointInteractor(
        operationGateway = operationGateway,
        exchangeHelpPointSaveGateway = helpPointSaveGateway,
        saveMessageGateway = saveMessageGateway,
    )

    @BeforeEach
    internal fun setUp() {
        `when`(operationGateway.load())
            .thenReturn(Operation(1, LocalDateTime.of(2022, 12, 23, 0, 0, 0)))
        `when`(helpPointSaveGateway.save(ExchangeHelpPointOutput(
            exchangeItems = listOf(
                MultipleExchangeItem("Id1", "name1", 100, 2),
                MultipleExchangeItem("Id2", "name2", 200, 3),
            ),
            userId = UserId("userId"),
            consumedDateTime = LocalDateTime.of(2022, 12, 23, 0, 0, 0)
        )))
            .thenReturn(SaveOutput(1, SaveUseCaseEnum.EXCHANGE_HELP_POINT))
        `when`(saveMessageGateway.getMessage(SaveOutput(1, SaveUseCaseEnum.EXCHANGE_HELP_POINT)))
            .thenReturn(HomeHelperMessage("登録しました。"))
    }

    @Test
    fun register() {
        val source = ExchangeHelpPointInput(
            exchangeItems = listOf(
                MultipleExchangeItem("Id1", "name1", 100, 2),
                MultipleExchangeItem("Id2", "name2", 200, 3),
            ),
            userId = UserId("userId"),
        )

        var actual = target.register(source)

        var expected = RegisterOutput(
            HomeHelperMessage("登録しました。"),
        )

        assertThat(actual, `is`(expected))
    }
}