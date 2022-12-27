/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.operation

import home.helper.core.domain.model.ValueObjectId

/**
 * 操作者IDを保持するクラスです。
 */
@ValueObjectId
data class OperatorId(
    val id: Int
)
