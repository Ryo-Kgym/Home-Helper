/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.SelectMigrationUserMapper;
import home.helper.batch.support.ItemReaderFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
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
    private final JobRepository jobRepository;
    private final ItemReaderFactory itemReaderFactory;

    @Bean
    public Job userJob(Step userStep) {
        return new JobBuilder("userJob", jobRepository)
                .start(userStep)
                .incrementer(new RunIdIncrementer())
                .build();
    }

    @Bean
    public Step userStep(
            ItemReader<DbMigrationUser> reader,
            ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
            ItemWriter<DbMigrationUser> writer,
            PlatformTransactionManager txManager
    ) {
        return new StepBuilder("userStep", jobRepository)
                .<DbMigrationUser, DbMigrationUser>chunk(100, txManager)
                .reader(reader)
                .processor(processor)
                .writer(writer)
                .allowStartIfComplete(true)
                .build();
    }

    @Bean
    public ItemReader<DbMigrationUser> reader() {
        return itemReaderFactory.itemReader(SelectMigrationUserMapper.class, "selectMigrationUser");
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

