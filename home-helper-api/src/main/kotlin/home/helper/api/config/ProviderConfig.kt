/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.config

import java.time.LocalDateTime
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Scope
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component
import home.helper.core.domain.model.operation.Operation
import home.helper.core.gateway.operation.OperationGateway

/**
 * Provider を定義する Configuration です。
 */
@Order(10)
@Component
@Scope("prototype")
class ProviderConfig {

    @Bean
    fun operationGateway(@Value("\${mock.datetime:false}") mockDatetime: Boolean): OperationGateway {
        return if (mockDatetime) {
            object : OperationGateway {
                override fun load(): Operation {
                    return Operation(0, LocalDateTime.of(2022, 12, 4, 12, 34, 56))
                }
            }
        } else {
            object : OperationGateway {
                override fun load(): Operation {
                    return Operation(0, LocalDateTime.now())
                }
            }
        }
    }
}