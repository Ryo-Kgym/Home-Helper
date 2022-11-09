/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto

import home.helper.core.domain.model.message.HomeHelperMessage

data class RegisterOutput(
    val messageList: List<HomeHelperMessage>,
) {
    constructor(vararg homeHelperMessage: HomeHelperMessage)
            : this(homeHelperMessage.toList())

}
