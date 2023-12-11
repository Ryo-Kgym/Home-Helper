/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import home.helper.batch.component.factory.*;
import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.SelectMigrationUserMapper;
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
public class ImportMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String JOB_PREFIX = "importMigration";
    private final String STEP_PREFIX_1 = "importMigrationUser";

    @Bean(name = JOB_PREFIX + "Job")
    public Job job(@Qualifier(STEP_PREFIX_1 + "Step") Step userStep,
                   @Qualifier(STEP_PREFIX_1 + "Step") Step userStep2,
                   @Qualifier(STEP_PREFIX_1 + "Step") Step userStep3) {
        return jobBuilderFactory.create("userJob")
            .start(userStep)
            .next(userStep2)
            .next(userStep3)
            .build();
    }

    @Bean(name = STEP_PREFIX_1 + "Step")
    public Step step1(
        @Qualifier(STEP_PREFIX_1 + "ItemReader") ItemReader<DbMigrationUser> reader,
        @Qualifier(STEP_PREFIX_1 + "ItemProcessor") ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
        @Qualifier(STEP_PREFIX_1 + "ItemWriter") ItemWriter<DbMigrationUser> writer
    ) {
        return stepBuilderFactory.
            <DbMigrationUser, DbMigrationUser>create(STEP_PREFIX_1 + "Step")
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX_1 + "ItemReader")
    public ItemReader<DbMigrationUser> reader() {
        return itemReaderFactory.itemReader(SelectMigrationUserMapper.class, "selectMigrationUser");
    }

    @Bean(name = STEP_PREFIX_1 + "ItemProcessor")
    public ItemProcessor<DbMigrationUser, DbMigrationUser> processor() {
        return new ItemProcessorBuilder<DbMigrationUser, DbMigrationUser>()
            .useCase(inputData -> inputData)
            .build();
    }

    @Bean(name = STEP_PREFIX_1 + "ItemWriter")
    public ItemWriter<DbMigrationUser> writer() {
        return new ItemWriterBuilder<DbMigrationUser>()
            .writer(System.out::println)
            .build();
    }
}

