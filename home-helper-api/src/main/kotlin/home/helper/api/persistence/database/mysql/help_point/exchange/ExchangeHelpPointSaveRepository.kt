/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.exchange

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ListSaveRepository
import home.helper.api.persistence.database.mysql.id.HelpPointExchangedAchievementId
import home.helper.core.dto.help_point.ExchangeHelpPointOutput
import home.helper.core.dto.save.SaveOutput

@Repository
class ExchangeHelpPointSaveRepository(
    private val idGateway: IdGateway<HelpPointExchangedAchievementId>,
    private val helpPointExchangedAchievementInsertRepository: HelpPointExchangedAchievementInsertRepository
) : ListSaveRepository<ExchangeHelpPointOutput>(helpPointExchangedAchievementInsertRepository) {

    override fun save(target: ExchangeHelpPointOutput): SaveOutput {
        idGateway.increment()
        return super.save(target)
    }
}