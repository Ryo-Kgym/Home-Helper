/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api

import org.mybatis.spring.annotation.MapperScan
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@MapperScan(
    basePackages = [
        "home.helper.api.persistence.database.mysql.**"
    ],
    sqlSessionFactoryRef = "sqlSessionFactoryPrimary"
)
class HomeHelperApiApplication

fun main(args: Array<String>) {
    runApplication<HomeHelperApiApplication>(*args)
}
