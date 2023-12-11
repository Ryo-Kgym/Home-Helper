/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.SelectMigrationUserMapper;
import home.helper.batch.support.ItemReaderFactory;
import home.helper.batch.support.JobBuilderFactory;
import home.helper.batch.support.StepBuilderFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CreateMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    @Bean
    public Job userJob(Step userStep) {
        return jobBuilderFactory.create("userJob", userStep);
    }

    @Bean
    public Step userStep(
            ItemReader<DbMigrationUser> reader,
            ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
            ItemWriter<DbMigrationUser> writer
    ) {
        return stepBuilderFactory.
                <DbMigrationUser, DbMigrationUser>create("userStep")
                .reader(reader)
                .processor(processor)
                .writer(writer)
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

