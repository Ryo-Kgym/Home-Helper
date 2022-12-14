/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.save.SaveOutput
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

internal class MultipleConvertSaveRepositoryTest {
    private val target = object : MultipleConvertSaveRepository<TestTarget, TestEntity> {

        override fun convert(target: TestTarget): List<TestEntity> {
            return target.list.map { TestEntity(it.id, it.name) }
        }

        override fun internalSave(entity: TestEntity): Int {
            return 1
        }

        override fun getUseCase(): SaveUseCaseEnum {
            return SaveUseCaseEnum.REGISTER_HELP_POINT
        }
    }

    @Test
    internal fun save() {
        val actual = target.save(
            TestTarget(
                TestElement(1, "id1"),
                TestElement(2, "id2"),
                TestElement(3, "id3"),
            )
        )
        val expected = SaveOutput(
            result = 3,
            useCase = SaveUseCaseEnum.REGISTER_HELP_POINT
        )
        assertThat(actual, `is`(expected))
    }

    private data class TestElement(
        val id: Int,
        val name: String,
    )

    private data class TestTarget(
        val list: List<TestElement>
    ) {
        constructor(vararg arg: TestElement) : this(arg.toList())
    }

    private data class TestEntity(
        val idE: Int,
        val nameE: String,
    )

}