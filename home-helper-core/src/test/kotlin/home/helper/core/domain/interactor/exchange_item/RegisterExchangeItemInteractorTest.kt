/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.exchange_item

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.exchange_item.RegisterExchangeItemInput
import home.helper.core.dto.exchange_item.RegisterExchangeItemOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway

class RegisterExchangeItemInteractorTest {
    private val registerExchangeItemSaveGateway: SaveDefaultGateway<RegisterExchangeItemOutput> = mock()
    private val saveMessageGateway: SaveMessageGateway = mock()

    private var target: RegisterExchangeItemInteractor? = null

    @BeforeEach
    fun setUp() {
        `when`(
            registerExchangeItemSaveGateway.save(
                RegisterExchangeItemOutput(
                    exchangeItemName = "交換品",
                    exchangePoint = ExchangePoint.valueOf(120),
                    memo = "メモ",
                )
            )
        ).thenReturn(
            SaveOutput(
                result = 1,
                useCase = SaveUseCaseEnum.REGISTER_EXCHANGE_ITEM,
            )
        )

        `when`(
            saveMessageGateway.getMessage(
                SaveOutput(
                    result = 1,
                    useCase = SaveUseCaseEnum.REGISTER_EXCHANGE_ITEM,
                )
            )
        ).thenReturn(HomeHelperMessage("登録しました。"))

        target = RegisterExchangeItemInteractor(
            registerExchangeItemSaveGateway = registerExchangeItemSaveGateway,
            saveMessageGateway = saveMessageGateway,
        )
    }

    @Test
    fun register() {
        val actual = target?.register(
            RegisterExchangeItemInput(
                exchangeItemName = "交換品",
                exchangePoint = ExchangePoint.valueOf(120),
                memo = "メモ",
            )
        )
        var expected = RegisterOutput(
            messageList = listOf(HomeHelperMessage(message = "登録しました。")),
        )

        assertThat(actual, `is`(expected))
    }
}