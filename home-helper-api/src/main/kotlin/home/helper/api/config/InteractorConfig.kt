/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.config

import home.helper.api.persistence.database.mysql.help_item.RegisterHelpItemSaveRepository
import home.helper.core.domain.interactor.help.RegisterHelpItemInteractor
import home.helper.core.domain.use_case.help.RegisterHelpItemUseCase
import home.helper.core.gateway.message.SaveMessageGateway
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order

@Order(100)
@Configuration
class InteractorConfig {

    @Bean
    fun registerHelpItemUseCase(
        registerHelpItemSaveGateway: RegisterHelpItemSaveRepository,
        saveMessageGateway: SaveMessageGateway
    ): RegisterHelpItemUseCase {
        return RegisterHelpItemInteractor(
            registerHelpItemSaveGateway = registerHelpItemSaveGateway,
            saveMessageGateway = saveMessageGateway,
        )
    }
}