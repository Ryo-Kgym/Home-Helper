/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.exchange

import java.time.LocalDateTime
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help_point.ExchangeHelpPointOutput
import home.helper.core.dto.save.SaveOutput

internal class ExchangeHelpPointSaveRepositoryTest {
    private val helpPointExchangedAchievementInsertRepository: HelpPointExchangedAchievementInsertRepository = mock()
    private val consumeUserPointRepository: ConsumeHelpPointUpdateRepository = mock()

    private val target = ExchangeHelpPointSaveRepository(
        helpPointExchangedAchievementInsertRepository = helpPointExchangedAchievementInsertRepository,
        consumeUserPointRepository = consumeUserPointRepository,
    )

    private val output = ExchangeHelpPointOutput(
        exchangeItems = listOf(),
        userId = UserId.valueOf("12"),
        consumedDateTime = LocalDateTime.now(),
        totalPoint = ExchangePoint.valueOf(3000),
    )

    @BeforeEach
    internal fun setUp() {
        `when`(helpPointExchangedAchievementInsertRepository.save(output))
            .thenReturn(SaveOutput(1, SaveUseCaseEnum.EXCHANGE_HELP_POINT))
        `when`(consumeUserPointRepository.save(output))
            .thenReturn(SaveOutput(2, SaveUseCaseEnum.EXCHANGE_HELP_POINT))
    }

    @Test
    fun save() {
        val actual = target.save(output)

        val expected = SaveOutput(
            result = 1,
            useCase = SaveUseCaseEnum.EXCHANGE_HELP_POINT,
        )

        assertThat(actual, `is`(expected))
    }
}