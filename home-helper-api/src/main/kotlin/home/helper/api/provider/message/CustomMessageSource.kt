/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.message

import org.springframework.context.MessageSource
import org.springframework.stereotype.Component
import java.util.*

/**
 * MessageSource をカスタマイズしたクラスです。
 */
@Component
class CustomMessageSource(
    private val messageSource: MessageSource,
) {

    fun getMessage(key: String, params: Array<Any>?): String {
        return messageSource.getMessage(key, params, Locale.JAPAN)
    }
}