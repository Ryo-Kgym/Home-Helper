/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.user.search

import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import home.helper.api.persistence.database.CsvDataSetLoader
import home.helper.core.domain.model.user.User
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.user.SearchUserCriteria
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
internal class SearchUserRepositoryTest(
        @Autowired
        private val searchUserMapper: SearchUserMapper,
) {
    private var target: SearchUserRepository? = null

    @BeforeEach
    internal fun setUp() {
        target = SearchUserRepository(
            searchUserMapper = searchUserMapper,
        )
    }

    companion object {
        private val USER1 = User("1", "ユーザ1", "さん")
        private val USER2 = User("2", "ユーザ2", "くん")

        @JvmStatic
        private fun searchProvider() = Stream.of(
            Arguments.of(
                "全件検索",
                SearchUserCriteria(),
                listOf(
                    USER1,
                    USER2,
                )
            ),
            Arguments.of(
                "ID",
                SearchUserCriteria(
                    userId = UserId("1"),
                ),
                listOf(
                    USER1,
                )
            ),
            Arguments.of(
                "該当なし",
                SearchUserCriteria(
                    userId = UserId("99"),
                ),
                listOf<User>()
            ),
        )

        @JvmStatic
        private fun findByProvider() = Stream.of(
            Arguments.of(
                "該当あり",
                UserId("1"),
                USER1,
            ),
            Arguments.of(
                "該当なし",
                UserId("99"),
                null,
            ),
        )
    }

    @DatabaseSetup(value = ["/DbUnit/SearchUserRepository/search/setup/"])
    @ParameterizedTest(name = "case {index}: {0}")
    @MethodSource("searchProvider")
    internal fun search(
            caseName: String,
            criteria: SearchUserCriteria,
            expected: List<User>,
    ) {
        val actual = target?.search(criteria)

        assertThat(actual, `is`(expected))
    }

    @DatabaseSetup(value = ["/DbUnit/SearchUserRepository/findBy/setup/"])
    @ParameterizedTest(name = "case {index}: {0}")
    @MethodSource("findByProvider")
    internal fun findBy(
            caseName: String,
            userId: UserId,
            expected: User?,
    ) {
        val actual = target?.findBy(userId)

        assertThat(actual, `is`(expected))
    }
}