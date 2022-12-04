/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class RandomIdRepositoryTest {
    private val target = TestRandomIdRepository()

    @Test
    internal fun generateId() {
        target.increment()
        val actual = target.getId()

        assertThat(actual.length, `is`(32))
    }

    private class TestRandomIdRepository
        : RandomIdRepository<String>(IdType.HELP_ITEM_ID) {

        override fun generateId(id: String): String {
            return id
        }
    }
}