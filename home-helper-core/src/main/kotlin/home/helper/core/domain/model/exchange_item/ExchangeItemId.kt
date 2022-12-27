/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

import home.helper.core.domain.model.ValueObjectId

@ValueObjectId
data class ExchangeItemId(
    val id: String,
)
