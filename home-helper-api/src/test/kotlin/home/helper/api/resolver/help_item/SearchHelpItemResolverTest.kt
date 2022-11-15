/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import com.graphql.spring.boot.test.GraphQLTestTemplate
import home.helper.api.utils.JsonTestUtils
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
internal class SearchHelpItemResolverTest {
    @Autowired
    private val graphQLTestTemplate: GraphQLTestTemplate? = null

    companion object {
        private const val REQUEST_PATH = "/GraphQLTest/SearchHelpItemResolver/search_help_item.query"
        private const val RESPONSE_PATH = "/GraphQLTest/SearchHelpItemResolver/search_help_item.json"
    }

    @Test
    @Throws(Exception::class)
    fun searchHelpItem() {
        val actual = graphQLTestTemplate?.postForResource(REQUEST_PATH)!!
            .rawResponse.body
        val expected = JsonTestUtils.load(RESPONSE_PATH).toString()

        assertThat(actual, `is`(expected))

    }
}