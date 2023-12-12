/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import home.helper.batch.component.factory.ItemProcessorBuilder;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.SelectMigrationUserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationUserStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationUser";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step1(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<DbMigrationUser> reader,
        @Qualifier(STEP_PREFIX + "ItemProcessor") ItemProcessor<DbMigrationUser, DbMigrationUser> processor,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<DbMigrationUser> writer
    ) {
        return stepBuilderFactory.
            <DbMigrationUser, DbMigrationUser>create(STEP_PREFIX + "Step")
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<DbMigrationUser> reader() {
        return itemReaderFactory.itemReader(SelectMigrationUserMapper.class, "selectMigrationUser");
    }

    @Bean(name = STEP_PREFIX + "ItemProcessor")
    public ItemProcessor<DbMigrationUser, DbMigrationUser> processor() {
        return new ItemProcessorBuilder<DbMigrationUser, DbMigrationUser>()
            .useCase(inputData -> inputData)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<DbMigrationUser> writer() {
        return new ItemWriterBuilder<DbMigrationUser>()
            .writer(System.out::println)
            .build();
    }
}
