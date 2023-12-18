/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.config;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

/**
 * V1 本番用のデータソース設定クラス
 */
@Configuration
@MapperScan(basePackages = {"home.helper.batch.persistence.database.v1production.**"},
    sqlSessionFactoryRef = "v1ProductionSqlSessionFactory")
public class V1ProductionDataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.v1-production-datasource")
    public DataSourceProperties v1ProductionDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource v1ProductionDataSource(
        @Qualifier("v1ProductionDataSourceProperties") DataSourceProperties properties) {
        return properties.initializeDataSourceBuilder().build();
    }

    @Bean
    public PlatformTransactionManager v1ProductionTxManager(
        @Qualifier("v1ProductionDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean
    public SqlSessionFactoryBean v1ProductionSqlSessionFactory(
        @Qualifier("v1ProductionDataSource") DataSource dataSource)
        throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        return bean;
    }
}
