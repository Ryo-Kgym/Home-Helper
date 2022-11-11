/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.use_case.help.RegisterHelpPointUseCase
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpPointInput
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.gateway.SaveDefaultGateway

class RegisterHelpPointInteractor(
    private val helpPointSaveGateway: SaveDefaultGateway<RegisterHelpPointOutput>
) : RegisterHelpPointUseCase {

    override fun register(input: RegisterHelpPointInput): RegisterOutput {
        val totalHelpPoint = HelpPoint.sumItem(input.helpItemList)

        val saveOutput = helpPointSaveGateway.save(
            RegisterHelpPointOutput(
                helpItemList = input.helpItemList,
                totalHelpPoint = totalHelpPoint,
            )
        )

        return RegisterOutput()
    }

}