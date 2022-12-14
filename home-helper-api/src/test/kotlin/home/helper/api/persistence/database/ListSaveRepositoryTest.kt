/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`

internal class ListSaveRepositoryTest {
    private val gateway1: SaveDefaultGateway<TestTarget> = mock()
    private val gateway2: SaveDefaultGateway<TestTarget> = mock()
    private val gateway3: SaveDefaultGateway<TestTarget> = mock()

    private val target = TestListSaveRepository(
        gateway1, gateway2, gateway3
    )

    @BeforeEach
    internal fun setUp() {
        `when`(gateway1.save(any())).thenReturn(SaveOutput(result = 1, useCase = SaveUseCaseEnum.REGISTER_HELP_POINT))
        `when`(gateway2.save(any())).thenReturn(SaveOutput(result = 2, useCase = SaveUseCaseEnum.REGISTER_HELP_POINT))
        `when`(gateway3.save(any())).thenReturn(SaveOutput(result = 3, useCase = SaveUseCaseEnum.REGISTER_HELP_POINT))
    }

    @Test
    fun save() {
        val actual = target.save(TestTarget(1, "名前"))
        val expected = SaveOutput(
            result = 2,
            useCase = SaveUseCaseEnum.REGISTER_HELP_POINT
        )

        assertThat(actual, `is`(expected))
    }

    private data class TestTarget(
        val id: Int,
        val name: String,
    )

    private class TestListSaveRepository(
        gateway1: SaveDefaultGateway<TestTarget>,
        gateway2: SaveDefaultGateway<TestTarget>,
        gateway3: SaveDefaultGateway<TestTarget>,
    ) : ListSaveRepository<TestTarget>(
        gateway1,
        gateway2,
        gateway3
    ) {
        override fun getIndex(): Int {
            return 1
        }
    }
}