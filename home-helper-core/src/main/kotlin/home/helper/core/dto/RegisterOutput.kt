/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto

import home.helper.core.domain.model.message.HomeMessage

data class RegisterOutput(
    val messageList: List<HomeMessage>,
) {
    constructor(vararg homeMessage: HomeMessage)
            : this(homeMessage.toList())

}
