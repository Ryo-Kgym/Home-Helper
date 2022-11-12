/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.table_customize

import com.github.springtestdbunit.TransactionDbUnitTestExecutionListener
import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.DbUnitConfiguration
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode
import home.helper.api.persistence.database.CsvDataSetLoader
import home.helper.api.persistence.database.mysql.id.IdType
import home.helper.api.persistence.database.mysql.table.DbIdHolderMapper
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

@MybatisTest
@MapperScan(basePackages = ["home.helper.api.persistence.database.mysql.**"])
@ActiveProfiles("ci")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners(
    DependencyInjectionTestExecutionListener::class,
    TransactionDbUnitTestExecutionListener::class,
)
@DbUnitConfiguration(dataSetLoader = CsvDataSetLoader::class)
internal class IdHolderCustomRepositoryTest(
    @Autowired
    private val idHolderMapper: DbIdHolderMapper,
    @Autowired
    private val idHolderCustomMapper: IdHolderCustomMapper,
) {
    private var target: IdHolderCustomRepository? = null

    @BeforeEach
    internal fun setUp() {
        target = IdHolderCustomRepository(idHolderMapper, idHolderCustomMapper)
    }

    @Test
    @DatabaseSetup(value = ["/DbUnit/IdHolderCustomRepository/incrementId/setup/"])
    @ExpectedDatabase(
        value = "/DbUnit/IdHolderCustomRepository/incrementId/expected/",
        assertionMode = DatabaseAssertionMode.NON_STRICT_UNORDERED
    )
    fun incrementId() {
        target?.incrementId(IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID)
    }

    @Test
    @DatabaseSetup(value = ["/DbUnit/IdHolderCustomRepository/incrementIdNoData/setup/"])
    @ExpectedDatabase(
        value = "/DbUnit/IdHolderCustomRepository/incrementIdNoData/expected/",
        assertionMode = DatabaseAssertionMode.NON_STRICT_UNORDERED
    )
    fun incrementIdNoData() {
        target?.incrementId(IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID)
    }

    @Test
    @DatabaseSetup(value = ["/DbUnit/IdHolderCustomRepository/getCurrentId/setup/"])
    fun getCurrentId() {
        val actual = target?.getCurrentId(IdType.HELP_POINT_EARNED_ACHIEVEMENT_ID)
        val expected = 3L

        assertThat(actual, `is`(expected))
    }
}