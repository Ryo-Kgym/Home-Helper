/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.api.gateway.id.IdGateway
import home.helper.api.provider.random.id.RandomCharacter

/**
 * ランダムなIDを発行する Repository です。
 * @param T IdType
 */
abstract class RandomIdRepository<T>(
    private val idType: IdType,
) : IdGateway<T> {

    override fun increment() {
        // noop
    }

    override fun getId(): T {
        val id = RandomCharacter.get(idType.length)
        return generateId(id)
    }

    abstract fun generateId(id: String): T
}