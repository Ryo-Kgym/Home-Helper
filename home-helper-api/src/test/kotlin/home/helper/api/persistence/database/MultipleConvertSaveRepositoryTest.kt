/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

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
        assertThat(actual, `is`(SaveOutput(3)))
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