/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import home.helper.batch.persistence.migration.household.DbMigrationUser;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.batch.MyBatisCursorItemReader;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@RequiredArgsConstructor
public class CreateMigrationJobConfig {
    private final PlatformTransactionManager transactionManager;
    private final JobRepository jobRepository;
    private final SqlSessionFactory sqlSessionFactory;

    @Bean
    public Job userJob(Step userStep) {
        return new JobBuilder("userJob", jobRepository)
                .start(userStep)
                .build();
    }

    @Bean
    public Step userStep(
            ItemReader<DbMigrationUser> reader,
            ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
            ItemWriter<DbMigrationUser> writer
    ) {
        return new StepBuilder("userStep", jobRepository)
                .<DbMigrationUser, DbMigrationUser>chunk(100, transactionManager)
                .reader(reader)
                .processor(processor)
                .writer(writer)
                .build();
    }

    @Bean
    public ItemReader<DbMigrationUser> reader() {
        MyBatisCursorItemReader<DbMigrationUser> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId("home.helper.batch.persistence.migration.household.SelectMigrationUserMapper.selectMigrationUser");
        reader.setSqlSessionFactory(sqlSessionFactory);
        return reader;
    }

    @Bean
    public ItemProcessor<DbMigrationUser, DbMigrationUser> processor() {
        return user -> user;
    }

    @Bean
    public ItemWriter<DbMigrationUser> writer() {
        return users -> users.forEach(System.out::println);
    }
}

