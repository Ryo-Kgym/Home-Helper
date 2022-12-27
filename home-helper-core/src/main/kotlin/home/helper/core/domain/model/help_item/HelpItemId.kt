/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_item

import home.helper.core.domain.model.ValueObjectId

/**
 * お手伝い項目のIDを保持するクラスです。
 */
@ValueObjectId
data class HelpItemId(
    val id: String
)