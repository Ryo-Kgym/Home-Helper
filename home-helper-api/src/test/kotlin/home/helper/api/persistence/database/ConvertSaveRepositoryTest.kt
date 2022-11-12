/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.save.SaveOutput
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test

class ConvertSaveRepositoryTest {
    private val target = TestRepository()

    @Test
    fun save() {
        val actual = target.save(TestTarget(1, "名前"))

        assertThat(
            actual, `is`(
                SaveOutput(
                    result = 1,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_POINT
                )
            )
        )
    }

    private data class TestTarget(
        val id: Int,
        val name: String
    )

    private data class TestEntity(
        val id2: Int,
        val name2: String
    )

    private class TestRepository : ConvertSaveRepository<TestTarget, TestEntity> {

        override fun convert(target: TestTarget): TestEntity {
            return TestEntity(
                id2 = target.id,
                name2 = target.name
            )
        }

        override fun internalSave(entity: TestEntity): Int {
            return entity.id2
        }

        override fun getUseCase(): SaveUseCaseEnum {
            return SaveUseCaseEnum.REGISTER_HELP_POINT
        }

    }
}