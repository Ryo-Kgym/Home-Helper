/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@RequiredArgsConstructor
public class PlatformTransactionManagerConfig {
    private final DataSource primaryDataSource;

    @Bean
    public PlatformTransactionManager primaryTxManager() {
        return new DataSourceTransactionManager(primaryDataSource);
    }
}
