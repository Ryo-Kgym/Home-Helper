/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class HelpPointTest {

    @Test
    fun sum() {
        val actual = HelpPoint.sum(
            HelpPoint(100), HelpPoint(300),
            HelpPoint(500), HelpPoint(200),
        )
        val expected = HelpPoint(1100)

        assertThat(actual, `is`(expected))
    }

    @Test
    fun add() {
        val actual = HelpPoint(123)
            .add(HelpPoint(456))
        val expected = HelpPoint(579)

        assertThat(actual, `is`(expected))
    }
}
