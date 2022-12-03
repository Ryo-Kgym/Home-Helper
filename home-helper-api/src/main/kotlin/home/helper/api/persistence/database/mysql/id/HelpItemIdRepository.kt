/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository
import home.helper.core.domain.model.help_item.HelpItemId

@Repository
class HelpItemIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<HelpItemId> {

    override fun increment() {
        idHolderCustomRepository.incrementId(IdType.HELP_ITEM_ID)
    }

    override fun getId(): HelpItemId {
        val id = idHolderCustomRepository.getCurrentId(IdType.HELP_ITEM_ID)
        return HelpItemId(
            id = id.toString(),
        )
    }
}