/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import java.time.LocalDateTime
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mybatis.spring.annotation.MapperScan
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener
import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import home.helper.api.persistence.database.CsvDataSetLoader
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementMapper
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.help_point.exchanged.HelpPointExchangedAchievement
import home.helper.core.domain.model.user.UserId

@MybatisTest
@MapperScan(basePackages = ["home.helper.api.persistence.database.mysql.**"])
@ActiveProfiles("ci")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class,
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
class SearchHelpPointExchangedAchievementRepositoryTest(
    @Autowired
    private val dbHelpPointExchangedAchievementMapper: DbHelpPointExchangedAchievementMapper,
) {

    private var target: SearchHelpPointExchangedAchievementRepository? = null

    @BeforeEach
    fun setUp() {
        target = SearchHelpPointExchangedAchievementRepository(
            dbHelpPointExchangedAchievementMapper,
        )
    }

    @Test
    @DatabaseSetup(value = ["/DbUnit/SearchHelpPointExchangedAchievementRepository/findBy/setup/"])
    fun findBy() {
        val actual = target?.findBy(UserId.valueOf("u1"))
        val expected = listOf(
            HelpPointExchangedAchievement(
                userId = UserId.valueOf("u1"),
                exchangeItemId = ExchangeItemId.valueOf("2"),
                exchangeCount = 3,
                exchangeTotalPoint = ExchangePoint.valueOf(1500),
                exchangedDatetime = LocalDateTime.of(2023, 1, 18, 12, 34, 58),
            ),
            HelpPointExchangedAchievement(
                userId = UserId.valueOf("u1"),
                exchangeItemId = ExchangeItemId.valueOf("1"),
                exchangeCount = 2,
                exchangeTotalPoint = ExchangePoint.valueOf(1000),
                exchangedDatetime = LocalDateTime.of(2023, 1, 18, 12, 34, 56),
            ),
        )
        assertThat(actual, `is`(expected))
    }
}