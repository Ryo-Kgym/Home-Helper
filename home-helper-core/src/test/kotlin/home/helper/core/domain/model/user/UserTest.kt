/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.user

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class UserTest {

    @Test
    fun getNameWithSuffix() {
        val actual = User("1", "ユーザ", "さん")
            .getNameWithSuffix()
        val expected = "ユーザ さん"

        assertThat(actual, `is`(expected))
    }
}