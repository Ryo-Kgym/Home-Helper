/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.id.HelpItemIdRepository
import home.helper.api.persistence.database.mysql.id.IdType
import home.helper.api.persistence.database.mysql.id.RandomIdRepository
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository
import home.helper.core.domain.model.help_item.HelpItemId

/**
 * ID の生成に関する Configure です。
 * mockを使用する場合、シーケンシャルな値を使用します。
 */
@Configuration
class IdConfig {

    @Bean
    fun helpItemIdGateway(@Value("\${mock.id::false}") mockId: Boolean,
                          idHolderCustomRepository: IdHolderCustomRepository
    ): IdGateway<HelpItemId> {
        if (mockId) {
            return object : RandomIdRepository<HelpItemId>(IdType.HELP_ITEM_ID) {
                override fun generateId(id: String): HelpItemId {
                    return HelpItemId(id)
                }
            }
        }

        return HelpItemIdRepository(idHolderCustomRepository)
    }
}