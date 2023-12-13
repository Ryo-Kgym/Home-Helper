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
 * マイグレーション用のデータソース設定クラス
 */
@Configuration
@MapperScan(basePackages = {"home.helper.batch.persistence.migration.**"},
    sqlSessionFactoryRef = "migrationSqlSessionFactory")
public class MigrationDataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.migration-datasource")
    public DataSourceProperties migrationDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource migrationDataSource(
        @Qualifier("migrationDataSourceProperties") DataSourceProperties migrationDataSourceProperties) {
        return migrationDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean
    public PlatformTransactionManager migrationTxManager(
        @Qualifier("migrationDataSource") DataSource migrationDataSource) {
        return new DataSourceTransactionManager(migrationDataSource);
    }

    @Bean
    public SqlSessionFactoryBean migrationSqlSessionFactory(
        @Qualifier("migrationDataSource") DataSource migrationDataSource)
        throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(migrationDataSource);
        return bean;
    }
}
