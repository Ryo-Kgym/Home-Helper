/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway

interface MultipleConvertSaveRepository<T, E> : SaveDefaultGateway<T> {

    override fun save(target: T): SaveOutput {
        val result = convert(target).map { internalSave(it) }
            .sumOf { it }

        return SaveOutput(
            result = result,
            useCase = getUseCase(),
        )
    }

    fun convert(target: T): List<E>

    fun internalSave(entity: E): Int

    fun getUseCase(): SaveUseCaseEnum
}