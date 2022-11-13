/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import home.helper.core.domain.use_case.help.RegisterHelpItemUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpItemInput
import home.helper.core.dto.help.RegisterHelpItemOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway

class RegisterHelpItemInteractor(
    private val registerHelpItemSaveGateway: SaveDefaultGateway<RegisterHelpItemOutput>,
    private val saveMessageGateway: SaveMessageGateway,
) : RegisterHelpItemUseCase {

    override fun register(input: RegisterHelpItemInput): RegisterOutput {
        val target = RegisterHelpItemOutput(
            helpItemName = input.helpItemName,
            helpPoint = input.helpPoint,
            memo = input.memo,
        )
        val saveOutput = registerHelpItemSaveGateway.save(target)
        val message = saveMessageGateway.getMessage(saveOutput)

        return RegisterOutput(message)
    }
}