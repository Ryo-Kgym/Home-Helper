/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.exchange

import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.dto.help_point.ExchangeHelpPointOutput

@Repository
class ExchangeHelpPointSaveRepository(
    helpPointExchangedAchievementInsertRepository: HelpPointExchangedAchievementInsertRepository,
    consumeUserPointRepository: ConsumeHelpPointUpdateRepository,
) : ListSaveRepository<ExchangeHelpPointOutput>(
    helpPointExchangedAchievementInsertRepository,
    consumeUserPointRepository,
)