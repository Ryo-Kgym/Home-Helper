/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.ConvertItemProcessorBuilder;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.migration.imports.ImportMigrationAccountInput;
import home.helper.batch.persistence.database.migration.imports.ImportMigrationAccountSaveRepository;
import home.helper.batch.persistence.database.migration.imports.SelectMigrationAccountMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationAccountStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationAccount";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationAccountInput> reader,
        @Qualifier(STEP_PREFIX + "ItemProcessor") ItemProcessor<ImportMigrationAccountInput, ImportMigrationAccountInput> processor,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationAccountInput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationAccountInput, ImportMigrationAccountInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationAccountInput> reader() {
        return itemReaderFactory.itemReader(SelectMigrationAccountMapper.class, "selectMigrationAccount");
    }

    @Bean(name = STEP_PREFIX + "ItemProcessor")
    public ItemProcessor<ImportMigrationAccountInput, ImportMigrationAccountInput> processor() {
        return new ConvertItemProcessorBuilder<ImportMigrationAccountInput, ImportMigrationAccountInput, ImportMigrationAccountInput>()
            .converter(input -> input)
            .useCase(inputData -> inputData)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationAccountInput> writer(
        ImportMigrationAccountSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationAccountInput>()
            .writer(saveGateway)
            .build();
    }
}
