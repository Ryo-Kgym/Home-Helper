/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_item

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import home.helper.core.domain.model.help_point.HelpPoint

internal class MultipleHelpItemTest {

    @Test
    internal fun calcSubtotalPoint() {
        val actual = MultipleHelpItem(id = "1", name = "項目", point = 123, count = 3)
            .calcSubtotalPoint()
        val expected = HelpPoint(123 * 3)

        assertThat(actual, `is`(expected))
    }
}