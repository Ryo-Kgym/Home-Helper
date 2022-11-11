/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database

import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway

open class ListSaveRepository<T>(
    private val delegateList: List<SaveDefaultGateway<T>>
) : SaveDefaultGateway<T> {

    constructor(vararg delegates: SaveDefaultGateway<T>) :
            this(delegates.toList())

    override fun save(target: T): SaveOutput {
        return delegateList.map { it.save(target) }[getIndex()]
    }

    open fun getIndex(): Int {
        return 0
    }
}