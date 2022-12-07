/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.api.gateway.id.IdGateway
import home.helper.api.provider.random.id.RandomCharacter

/**
 * ランダムなIDを発行する Repository です。
 * スレッドセーフではありません。
 * @param T IdType
 */
abstract class RandomIdRepository<T>(
    private val idType: IdType,
) : IdGateway<T> {
    var id: String = ""

    override fun increment() {
        this.id = RandomCharacter.get(idType.length)
    }

    override fun getId(): T {
        return generateId(this.id)
    }

    abstract fun generateId(id: String): T
}