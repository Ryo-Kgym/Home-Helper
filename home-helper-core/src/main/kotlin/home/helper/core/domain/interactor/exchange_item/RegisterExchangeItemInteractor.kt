/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.exchange_item

import home.helper.core.domain.use_case.exchange_item.RegisterExchangeItemUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.exchange_item.RegisterExchangeItemInput
import home.helper.core.dto.exchange_item.RegisterExchangeItemOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway

class RegisterExchangeItemInteractor(
    private val registerExchangeItemSaveGateway: SaveDefaultGateway<RegisterExchangeItemOutput>,
    private val saveMessageGateway: SaveMessageGateway,
) : RegisterExchangeItemUseCase {

    override fun register(input: RegisterExchangeItemInput): RegisterOutput {
        val target = RegisterExchangeItemOutput(
            exchangeItemName = input.exchangeItemName,
            exchangePoint = input.exchangePoint,
            memo = input.memo,
        )
        val saveOutput = registerExchangeItemSaveGateway.save(target)
        val message = saveMessageGateway.getMessage(saveOutput)

        return RegisterOutput(message)
    }
}