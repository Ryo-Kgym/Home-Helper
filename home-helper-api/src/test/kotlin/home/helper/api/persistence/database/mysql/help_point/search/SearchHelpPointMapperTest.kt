/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import home.helper.api.persistence.database.CsvDataSetLoader
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import org.mybatis.spring.annotation.MapperScan
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener
import java.time.LocalDate

@MybatisTest
@MapperScan(basePackages = ["home.helper.api.persistence.database.mysql.**"])
@ActiveProfiles("ci")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class,
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
class SearchHelpPointMapperTest(
    @Autowired
    private val target: SearchHelpPointMapper
) {

    @Test
    @DatabaseSetup(value = ["/DbUnit/SearchHelpPointMapperTest/search/setup/"])
    internal fun search() {
        val actual = target.search(SearchHelpPointParam())
        val expected = listOf(
            SearchHelpPointResult(
                id = 1,
                userId = "1",
                earnedDate = LocalDate.of(2022, 11, 6),
                earnedPoint = 500,
                detailList = listOf(
                    item1,
                    item2,
                ),
            ),
            SearchHelpPointResult(
                id = 2,
                userId = "1",
                earnedDate = LocalDate.of(2022, 11, 13),
                earnedPoint = 300,
                detailList = listOf(
                    item2,
                ),
            ),
            SearchHelpPointResult(
                id = 3,
                userId = "1",
                earnedDate = LocalDate.of(2022, 11, 20),
                earnedPoint = 400,
                detailList = listOf(
                    item1,
                ),
            ),
            SearchHelpPointResult(
                id = 4,
                userId = "1",
                earnedDate = LocalDate.of(2022, 11, 27),
                earnedPoint = 100,
                detailList = listOf(
                    item1,
                ),
            ),
        )

        assertThat(actual, `is`(expected))
    }

    private val item1 = HelpItemResult(
        itemId = 1,
        itemName = "テスト項目1",
        helpPoint = 100,
        memo = "これはテストです。"
    )

    private val item2 = HelpItemResult(
        itemId = 2,
        itemName = "テスト項目2",
        helpPoint = 200,
        memo = "これもテストです。"
    )
}