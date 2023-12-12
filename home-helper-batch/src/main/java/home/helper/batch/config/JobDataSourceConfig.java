/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
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
public class JobDataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.job-datasource")
    public DataSourceProperties jobDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource jobDataSource(DataSourceProperties jobDataSourceProperties) {
        return jobDataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean
    public PlatformTransactionManager jobTxManager(DataSource jobDataSource) {
        return new DataSourceTransactionManager(jobDataSource);
    }

    @Bean
    public SqlSessionFactory jobSqlSessionFactory(DataSource jobDataSource)
        throws Exception {
        SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(jobDataSource);
        return sqlSessionFactory.getObject();
    }
}
