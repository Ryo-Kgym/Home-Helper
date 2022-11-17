/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point

import home.helper.core.domain.model.help_item.HelpItem
import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test

internal class HelpPointTest {

    @Test
    @DisplayName("可変長引数")
    fun sum() {
        val actual = HelpPoint.sum(
            HelpPoint(100), HelpPoint(300),
            HelpPoint(500), HelpPoint(200),
        )
        val expected = HelpPoint(1100)

        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }

    @Test
    @DisplayName("配列が引数")
    fun sumList() {
        val actual = HelpPoint.sum(
            listOf(
                HelpPoint(100), HelpPoint(300),
                HelpPoint(500), HelpPoint(200),
            )
        )
        val expected = HelpPoint(1100)

        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }

    @Test
    @DisplayName("お手伝い項目が引数")
    fun sumItemList() {
        val actual = HelpPoint.sumItem(
            listOf(
                HelpItem(1, "アイテム1", 100),
                HelpItem(2, "アイテム2", 300),
                HelpItem(3, "アイテム3", 500),
                HelpItem(4, "アイテム4", 200),
            )
        )
        val expected = HelpPoint(1100)

        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }

    @Test
    @DisplayName("お手伝いポイント同士の加算")
    fun add() {
        val actual = HelpPoint(123)
            .add(HelpPoint(456))
        val expected = HelpPoint(579)

        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }
}