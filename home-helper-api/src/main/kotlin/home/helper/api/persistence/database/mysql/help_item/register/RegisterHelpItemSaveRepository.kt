/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.register

import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.dto.help_item.RegisterHelpItemOutput
import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.dto.save.SaveOutput

@Repository
class RegisterHelpItemSaveRepository(
    private val helpItemIdGateway: IdGateway<HelpItemId>,
    helpItemInsertRepository: HelpItemInsertRepository,
) : ListSaveRepository<RegisterHelpItemOutput>(
    helpItemInsertRepository,
) {
    override fun save(target: RegisterHelpItemOutput): SaveOutput {
        helpItemIdGateway.increment()
        return super.save(target)
    }
}