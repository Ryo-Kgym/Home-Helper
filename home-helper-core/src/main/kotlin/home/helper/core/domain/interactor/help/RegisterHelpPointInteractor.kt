/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import home.helper.core.dto.RegisterOutput
import home.helper.core.domain.use_case.help.RegisterHelpPointUseCase
import home.helper.core.dto.help.RegisterHelpPointInput
import home.helper.core.gateway.SaveDefaultGateway

class RegisterHelpPointInteractor(
    private val helpPointSaveGateway: SaveDefaultGateway<RegisterHelpPointInput>
) : RegisterHelpPointUseCase {

    override fun register(input: RegisterHelpPointInput): RegisterOutput {
        val saveOutput = helpPointSaveGateway.save(input)

        return RegisterOutput()
    }

}