/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository

@Repository
class HelpPointEarnedAchievementIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<HelpPointEarnedAchievementId> {
    private val idType = IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID

    override fun increment() {
        idHolderCustomRepository.incrementId(idType)
    }

    override fun getId(): HelpPointEarnedAchievementId {
        val id = idHolderCustomRepository.getCurrentId(idType)
        return HelpPointEarnedAchievementId(
            id = id.toString(),
        )
    }
}