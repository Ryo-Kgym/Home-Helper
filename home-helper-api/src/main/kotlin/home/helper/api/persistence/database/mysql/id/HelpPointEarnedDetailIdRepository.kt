/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository

@Repository
class HelpPointEarnedDetailIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<HelpPointEarnedDetailId> {
    private val idType = IdType.HELP_POINT_EARNED_DETAIL_ID

    override fun increment() {
        idHolderCustomRepository.incrementId(idType)
    }

    override fun getId(): HelpPointEarnedDetailId {
        val id = idHolderCustomRepository.getCurrentId(idType)
        return HelpPointEarnedDetailId(
            id = id.toString(),
        )
    }
}