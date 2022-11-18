/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.search

import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import home.helper.api.persistence.database.CsvDataSetLoader
import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import org.mybatis.spring.annotation.MapperScan
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener
import java.util.stream.Stream

@MybatisTest
@MapperScan(basePackages = ["home.helper.api.persistence.database.mysql.**"])
@ActiveProfiles("ci")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class,
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
internal class SearchHelpItemMapperTest(
    @Autowired
    private val searchHelpItemMapper: SearchHelpItemMapper,
) {
    private var target: SearchHelpItemRepository? = null

    @BeforeEach
    internal fun setUp() {
        target = SearchHelpItemRepository(searchHelpItemMapper)
    }

    companion object {
        @JvmStatic
        private fun searchProvider() = Stream.of(
            Arguments.of(
                "検索条件なし",
                SearchHelpItemCriteria(),
                listOf(
                    ITEM1,
                    ITEM2,
                    ITEM3,
                )
            ),
            Arguments.of(
                "ID指定",
                SearchHelpItemCriteria(
                    helpItemId = HelpItemId(2),
                ),
                listOf(
                    ITEM2,
                )
            ),
        )

        @JvmStatic
        private fun findByProvider() = Stream.of(
            Arguments.of(
                "結果あり",
                HelpItemId(1),
                ITEM1,
            ),
            Arguments.of(
                "結果なし",
                HelpItemId(4),
                null
            ),
        )

        private val ITEM1 = HelpItem(
            helpItemId = HelpItemId(1),
            name = "項目1",
            helpPoint = HelpPoint(100),
            memo = "メモ1",
        )
        private val ITEM2 = HelpItem(
            helpItemId = HelpItemId(2),
            name = "項目2",
            helpPoint = HelpPoint(200),
            memo = "メモ2",
        )
        private val ITEM3 = HelpItem(
            helpItemId = HelpItemId(3),
            name = "項目3",
            helpPoint = HelpPoint(300),
            memo = null,
        )
    }

    @DatabaseSetup(value = ["/DbUnit/SearchHelpItemRepository/search/setup/"])
    @ParameterizedTest(name = "case {index}: {0}")
    @MethodSource("searchProvider")
    internal fun search(caseName: String,
                        criteria: SearchHelpItemCriteria,
                        expected: List<HelpItem>
    ) {
        val actual = target?.search(criteria)
        assertThat(actual, `is`(expected))
    }

    @DatabaseSetup(value = ["/DbUnit/SearchHelpItemRepository/search/setup/"])
    @ParameterizedTest(name = "case {index}: {0}")
    @MethodSource("findByProvider")
    internal fun findBy(caseName: String,
                        id: HelpItemId,
                        expected: HelpItem?
    ) {
        val actual = target?.findBy(id)
        assertThat(actual, `is`(expected))
    }
}