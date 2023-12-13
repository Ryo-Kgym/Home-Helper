/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.config;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@MapperScan(basePackages = {"home.helper.batch.persistence.**"},
    sqlSessionFactoryRef = "jobSqlSessionFactory")
public class MigrationDataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.migration-datasource")
    public DataSourceProperties jobDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource jobDataSource(
        @Qualifier("jobDataSourceProperties") DataSourceProperties jobDataSourceProperties) {
        return jobDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean
    public PlatformTransactionManager jobTxManager(@Qualifier("jobDataSource") DataSource jobDataSource) {
        return new DataSourceTransactionManager(jobDataSource);
    }

    @Bean
    public SqlSessionFactoryBean jobSqlSessionFactory(@Qualifier("jobDataSource") DataSource jobDataSource)
        throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(jobDataSource);
        return bean;
    }
}
