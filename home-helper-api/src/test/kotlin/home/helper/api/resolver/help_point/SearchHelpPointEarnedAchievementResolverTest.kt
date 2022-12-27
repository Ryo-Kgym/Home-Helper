/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode
import com.graphql.spring.boot.test.GraphQLTestTemplate
import home.helper.api.persistence.database.CsvDataSetLoader
import home.helper.api.utils.JsonTestUtils
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestExecutionListeners
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("ci")
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
internal class SearchHelpPointEarnedAchievementResolverTest {
    @Autowired
    private val graphQLTestTemplate: GraphQLTestTemplate? = null

    companion object {
        private const val ROOT = "/GraphQLTest/SearchHelpPointEarnedAchievementResolver/"
    }

    @Test
    @DatabaseSetup(value = [ROOT + "setup/"])
    fun test01() {
    }

    @Test
    fun test02() {
        val actual = graphQLTestTemplate?.postForResource(ROOT + "request.query")!!
            .rawResponse.body
        val expected = JsonTestUtils.load(ROOT + "response.json").toString()

        assertThat(actual, `is`(expected))
    }

    @Test
    @ExpectedDatabase(
        value = ROOT + "expected/",
        assertionMode = DatabaseAssertionMode.NON_STRICT_UNORDERED
    )
    @Disabled
    fun test03() {
    }
}