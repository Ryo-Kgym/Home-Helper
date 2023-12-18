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
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

/**
 * マイグレーション用のデータソース設定クラス
 */
@Configuration
@MapperScan(basePackages = {"home.helper.batch.persistence.database.v1.**"},
    sqlSessionFactoryRef = "v1SqlSessionFactory")
public class V1DataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.v1-datasource")
    public DataSourceProperties v1DataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource v1DataSource(
        @Qualifier("v1DataSourceProperties") DataSourceProperties v1DataSourceProperties) {
        return v1DataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean
    public PlatformTransactionManager v1TxManager(
        @Qualifier("v1DataSource") DataSource v1DataSource) {
        return new DataSourceTransactionManager(v1DataSource);
    }

    @Bean
    @Primary
    public SqlSessionFactoryBean v1SqlSessionFactory(
        @Qualifier("v1DataSource") DataSource v1DataSource)
        throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(v1DataSource);
        return bean;
    }
}
