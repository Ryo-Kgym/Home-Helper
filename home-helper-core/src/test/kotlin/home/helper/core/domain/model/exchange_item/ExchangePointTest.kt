/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class ExchangePointTest {

    @Test
    internal fun calcTotalPointVararg() {
        val actual = ExchangePoint.calcTotalPoint(
            MultipleExchangeItem("Id1", "name1", 100, 2),
            MultipleExchangeItem("Id2", "name2", 200, 3),
        )
        val expected = ExchangePoint.valueOf(800)

        assertThat(actual, `is`(expected))
    }

    @Test
    internal fun calcTotalPoint() {
        val actual = ExchangePoint.calcTotalPoint(
            listOf(
                MultipleExchangeItem("Id1", "name1", 100, 2),
                MultipleExchangeItem("Id2", "name2", 200, 3),
            )
        )
        val expected = ExchangePoint.valueOf(800)

        assertThat(actual, `is`(expected))
    }

    @Test
    fun times() {
        val source = ExchangePoint(100)
        val actual = source.times(3)
        val expected = ExchangePoint(300)

        assertThat(actual, `is`(expected))
    }
}