/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal class ExchangePointTest {

    @Test
    fun times() {
        val source = ExchangePoint(100)
        val actual = source.times(3)
        val expected = ExchangePoint(300)

        assertThat(actual, `is`(expected))
    }
}