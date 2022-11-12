/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.message

import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.message.SaveMessageGateway
import org.springframework.stereotype.Component

/**
 * 保存用のメッセージを操作するクラスです。
 */
@Component
class SaveMessageProvider(
    private val messageSource: CustomMessageSource,
) : SaveMessageGateway, MessageKey<SaveOutput> {

    override fun getMessage(key: SaveOutput): HomeHelperMessage {
        return HomeHelperMessage(
            message = messageSource.getMessage(buildKey(key), arrayOf(key.result))
        )
    }

    override fun buildKey(source: SaveOutput): String {
        return "message.use.case." + source.useCase.name
            .replace("_", ".")
            .lowercase()
    }
}