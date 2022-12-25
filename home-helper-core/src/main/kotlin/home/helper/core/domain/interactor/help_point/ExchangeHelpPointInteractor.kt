/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import home.helper.core.domain.use_case.help_point.ExchangeHelpPointUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_point.ExchangeHelpPointInput
import home.helper.core.dto.help_point.ExchangeHelpPointOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway

class ExchangeHelpPointInteractor(
    private val operationGateway: OperationGateway,
    private val exchangeHelpPointSaveGateway: SaveDefaultGateway<ExchangeHelpPointOutput>,
    private val saveMessageGateway: SaveMessageGateway,
) : ExchangeHelpPointUseCase {

    override fun register(input: ExchangeHelpPointInput): RegisterOutput {

        val saveOutput = exchangeHelpPointSaveGateway.save(
            ExchangeHelpPointOutput(
                exchangeItems = input.exchangeItems,
                userId = input.userId,
                consumedDateTime = operationGateway.load().datetime,
            )
        )

        val message = saveMessageGateway.getMessage(saveOutput)

        return RegisterOutput(message)
    }
}