/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import home.helper.core.domain.use_case.help_point.ConsumeHelpPointUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_point.ConsumeHelpPointInput
import home.helper.core.dto.help_point.ConsumeHelpPointOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway

class ConsumeHelpPointInteractor(
    private val operationGateway: OperationGateway,
    private val helpPointConsumeGateway: SaveDefaultGateway<ConsumeHelpPointOutput>,
    private val saveMessageGateway: SaveMessageGateway,
) : ConsumeHelpPointUseCase {

    override fun register(input: ConsumeHelpPointInput): RegisterOutput {

        val saveOutput = helpPointConsumeGateway.save(
            ConsumeHelpPointOutput(
                exchangeItems = input.exchangeItems,
                userId = input.userId,
                consumedDateTime = operationGateway.load().datetime,
            )
        )

        val message = saveMessageGateway.getMessage(saveOutput)

        return RegisterOutput(message)
    }
}