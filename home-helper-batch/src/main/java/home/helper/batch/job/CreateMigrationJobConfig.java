/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.SelectMigrationUserMapper;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.JobBuilderFactory;
import home.helper.batch.component.factory.StepBuilderFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CreateMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String JOB_NAME_PREFIX = "createMigrationTarget";
    private final String STEP_NAME_PREFIX_1 = "createMigrationUser";

    @Bean(name = JOB_NAME_PREFIX + "Job")
    public Job job(@Qualifier(STEP_NAME_PREFIX_1 + "Step") Step userStep,
                   @Qualifier(STEP_NAME_PREFIX_1 + "Step") Step userStep2,
                   @Qualifier(STEP_NAME_PREFIX_1 + "Step") Step userStep3) {
        return jobBuilderFactory.create("userJob")
            .start(userStep)
            .next(userStep2)
            .next(userStep3)
            .build();
    }

    @Bean(name = STEP_NAME_PREFIX_1 + "Step")
    public Step step1(
        @Qualifier(STEP_NAME_PREFIX_1 + "ItemReader") ItemReader<DbMigrationUser> reader,
        @Qualifier(STEP_NAME_PREFIX_1 + "ItemProcessor") ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
        @Qualifier(STEP_NAME_PREFIX_1 + "ItemWriter") ItemWriter<DbMigrationUser> writer
    ) {
        return stepBuilderFactory.
            <DbMigrationUser, DbMigrationUser>create(STEP_NAME_PREFIX_1 + "Step")
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_NAME_PREFIX_1 + "ItemReader")
    public ItemReader<DbMigrationUser> reader() {
        return itemReaderFactory.itemReader(SelectMigrationUserMapper.class, "selectMigrationUser");
    }

    @Bean(name = STEP_NAME_PREFIX_1 + "ItemProcessor")
    public ItemProcessor<DbMigrationUser, DbMigrationUser> processor() {
        return user -> user;
    }

    @Bean(name = STEP_NAME_PREFIX_1 + "ItemWriter")
    public ItemWriter<DbMigrationUser> writer() {
        return users -> users.forEach(System.out::println);
    }
}

