/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository
import org.springframework.stereotype.Repository

@Repository
class HelpPointEarnedAchievementIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<HelpPointEarnedAchievementId> {

    override fun increment() {
        idHolderCustomRepository.incrementId(IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID)
    }

    override fun getId(): HelpPointEarnedAchievementId {
        val id = idHolderCustomRepository.getCurrentId(IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID)
        return HelpPointEarnedAchievementId(
            id = id.toString(),
        )
    }
}