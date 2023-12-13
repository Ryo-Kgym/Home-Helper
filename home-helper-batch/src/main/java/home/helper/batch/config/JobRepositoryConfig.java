/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.config;

import javax.sql.DataSource;

import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.support.JobRepositoryFactoryBean;
import org.springframework.batch.item.database.support.DefaultDataFieldMaxValueIncrementerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

/**
 * JobRepository設定クラス
 */
@Configuration
public class JobRepositoryConfig {

    @Bean
    public JobRepository myJobRepository(PlatformTransactionManager jobTransactionManager,
                                         DataSource jobDataSource) throws Exception {
        var factory = new JobRepositoryFactoryBean();
        factory.setIsolationLevelForCreate("ISOLATION_READ_COMMITTED");
        factory.setTablePrefix("BATCH_");
        factory.setDataSource(jobDataSource);
        factory.setTransactionManager(jobTransactionManager);
        factory.setIncrementerFactory(new DefaultDataFieldMaxValueIncrementerFactory(jobDataSource));
        factory.setDatabaseType("POSTGRES");
        factory.afterPropertiesSet();
        return factory.getObject();
    }
}
