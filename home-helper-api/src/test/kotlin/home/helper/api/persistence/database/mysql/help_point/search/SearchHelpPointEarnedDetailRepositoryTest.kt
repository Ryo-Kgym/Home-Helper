/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

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
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailMapper
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedDetail

@MybatisTest
@MapperScan(basePackages = ["home.helper.api.persistence.database.mysql.**"])
@ActiveProfiles("ci")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class,
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
internal class SearchHelpPointEarnedDetailRepositoryTest(
    @Autowired
    private val dbHelpPointEarnedDetailMapper: DbHelpPointEarnedDetailMapper,
) {
    private var target: SearchHelpPointEarnedDetailRepository? = null

    @BeforeEach
    fun setUp() {
        target = SearchHelpPointEarnedDetailRepository(
            dbHelpPointEarnedDetailMapper = dbHelpPointEarnedDetailMapper,
        )
    }

    @Test
    @DatabaseSetup(value = ["/DbUnit/SearchHelpPointEarnedDetailRepository/findBy/setup/"])
    fun findBy() {
        val actual = target?.findBy(HelpPointEarnedAchievementId.valueOf("1"))
        val expected = listOf(
            HelpPointEarnedDetail(
                earnedAchievementId = HelpPointEarnedAchievementId.valueOf("1"),
                helpItemId = HelpItemId.valueOf("1"),
                helpItemCount = 1,
                helpItemTotalPoint = HelpPoint(100),
            ),
            HelpPointEarnedDetail(
                earnedAchievementId = HelpPointEarnedAchievementId.valueOf("1"),
                helpItemId = HelpItemId.valueOf("2"),
                helpItemCount = 2,
                helpItemTotalPoint = HelpPoint(200),
            ),
        )

        assertThat(actual, `is`(expected))
    }
}