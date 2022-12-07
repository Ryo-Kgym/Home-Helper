/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_point

import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.use_case.help_point.RegisterHelpPointUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_point.RegisterHelpPointInput
import home.helper.core.dto.help_point.RegisterHelpPointOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway

class RegisterHelpPointInteractor(
    private val operationGateway: OperationGateway,
    private val helpPointSaveGateway: SaveDefaultGateway<RegisterHelpPointOutput>,
    private val saveMessageGateway: SaveMessageGateway,
) : RegisterHelpPointUseCase {

    override fun register(input: RegisterHelpPointInput): RegisterOutput {
        val totalHelpPoint = HelpPoint.sumOfProducts(input.multipleHelpItems)

        val saveOutput = helpPointSaveGateway.save(
            RegisterHelpPointOutput(
                helpItemList = input.multipleHelpItems,
                totalHelpPoint = totalHelpPoint,
                userId = input.userId,
                earnedDateTime = operationGateway.load().datetime,
            )
        )

        val message = saveMessageGateway.getMessage(saveOutput)

        return RegisterOutput(message)
    }

}