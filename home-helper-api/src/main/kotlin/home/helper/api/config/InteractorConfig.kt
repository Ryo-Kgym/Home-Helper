/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import home.helper.api.persistence.database.mysql.help_item.register.RegisterHelpItemSaveRepository
import home.helper.api.persistence.database.mysql.help_point.exchange.ExchangeHelpPointSaveRepository
import home.helper.api.persistence.database.mysql.help_point.register.RegisterHelpPointRepository
import home.helper.core.domain.interactor.help_item.RegisterHelpItemInteractor
import home.helper.core.domain.interactor.help_point.ExchangeHelpPointInteractor
import home.helper.core.domain.interactor.help_point.RegisterHelpPointInteractor
import home.helper.core.domain.use_case.help_item.RegisterHelpItemUseCase
import home.helper.core.domain.use_case.help_point.ExchangeHelpPointUseCase
import home.helper.core.domain.use_case.help_point.RegisterHelpPointUseCase
import home.helper.core.gateway.message.SaveMessageGateway
import home.helper.core.gateway.operation.OperationGateway

/**
 * UseCase を定義する Configuration です。
 */
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

    @Bean
    fun registerHelpPointUseCase(
        operationGateway: OperationGateway,
        helpPointSaveGateway: RegisterHelpPointRepository,
        saveMessageGateway: SaveMessageGateway,
    ): RegisterHelpPointUseCase {
        return RegisterHelpPointInteractor(
            operationGateway = operationGateway,
            helpPointSaveGateway = helpPointSaveGateway,
            saveMessageGateway = saveMessageGateway,
        )
    }

    @Bean
    fun exchangeHelpPointUseCase(
        operationGateway: OperationGateway,
        exchangeHelpPointSaveGateway: ExchangeHelpPointSaveRepository,
        saveMessageGateway: SaveMessageGateway,
    ): ExchangeHelpPointUseCase {
        return ExchangeHelpPointInteractor(
            operationGateway = operationGateway,
            exchangeHelpPointSaveGateway = exchangeHelpPointSaveGateway,
            saveMessageGateway = saveMessageGateway,
        )
    }
}