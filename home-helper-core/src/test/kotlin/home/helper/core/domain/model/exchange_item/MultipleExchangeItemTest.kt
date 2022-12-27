/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class MultipleExchangeItemTest {

    @Test
    fun calcSubtotalPoint() {
        val source = MultipleExchangeItem(
            id = "id1",
            name = "name1",
            point = 123,
            count = 3
        )
        val actual = source.calcSubtotalPoint()
        val expected = ExchangePoint.valueOf(369)

        assertThat(actual, `is`(expected))
    }
}