/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.random.id

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class RandomCharacterTest {

    @Test
    internal fun get() {
        val actual = RandomCharacter.get(32)

        println("ID: $actual was generated")
        assertThat(actual.length, `is`(32))
        assertNotNull(actual)
    }
}