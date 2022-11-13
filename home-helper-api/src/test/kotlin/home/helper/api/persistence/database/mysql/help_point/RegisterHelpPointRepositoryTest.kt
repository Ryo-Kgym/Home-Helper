/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.mock
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementId
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import java.time.LocalDate

internal class RegisterHelpPointRepositoryTest {
    private val helpPointEarnedAchievementIdGateway: IdGateway<HelpPointEarnedAchievementId> = mock()
    private val helpPointEarnedAchievementInsertRepository: HelpPointEarnedAchievementInsertRepository = mock()
    private val helpPointEarnedDetailInsertRepository: HelpPointEarnedDetailInsertRepository = mock()

    private val target = RegisterHelpPointRepository(
        helpPointEarnedAchievementIdGateway = helpPointEarnedAchievementIdGateway,
        helpPointEarnedAchievementInsertRepository = helpPointEarnedAchievementInsertRepository,
        helpPointEarnedDetailInsertRepository = helpPointEarnedDetailInsertRepository,
    )

    @BeforeEach
    internal fun setUp() {
        `when`(helpPointEarnedAchievementInsertRepository.save(any()))
            .thenReturn(
                SaveOutput(
                    result = 1,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
                )
            )
        `when`(helpPointEarnedDetailInsertRepository.save(any()))
            .thenReturn(
                SaveOutput(
                    result = 3,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
                )
            )
    }

    @Test
    fun save() {
        val source = RegisterHelpPointOutput(
            helpItemList = listOf(),
            totalHelpPoint = HelpPoint(100),
            userId = UserId(1),
            earnedDate = LocalDate.now(),
        )
        val actual = target.save(source)
        val expected = SaveOutput(
            result = 3,
            useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
        )

        assertThat(actual, `is`(expected))
    }
}