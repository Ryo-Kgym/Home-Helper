/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import home.helper.batch.component.factory.ConvertItemProcessorBuilder;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;
import home.helper.batch.persistence.migration.household.DbMigrationUser;
import home.helper.batch.persistence.migration.household.ImportMigrationUserConverter;
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
        @Qualifier(STEP_PREFIX + "ItemProcessor") ItemProcessor<DbMigrationUser, ImportMigrationUserInput> processor,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationUserInput> writer
    ) {
        return stepBuilderFactory.
            <DbMigrationUser, ImportMigrationUserInput>create(STEP_PREFIX + "Step")
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
    public ItemProcessor<DbMigrationUser, ImportMigrationUserInput> processor() {
        return new ConvertItemProcessorBuilder<DbMigrationUser, ImportMigrationUserInput, ImportMigrationUserInput>()
            .converter(new ImportMigrationUserConverter())
            .useCase(inputData -> inputData)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationUserInput> writer() {
        return new ItemWriterBuilder<ImportMigrationUserInput>()
            .writer(System.out::println)
            .build();
    }
}
