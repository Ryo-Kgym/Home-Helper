/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository
import home.helper.core.domain.model.help_item.HelpItemId

class HelpItemIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<HelpItemId> {
    private val idType = IdType.HELP_ITEM_ID

    override fun increment() {
        idHolderCustomRepository.incrementId(idType)
    }

    override fun getId(): HelpItemId {
        val id = idHolderCustomRepository.getCurrentId(idType)
        return HelpItemId.valueOf(id)
    }
}