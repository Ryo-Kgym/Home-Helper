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
import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;
import home.helper.batch.persistence.database.migration.imports.DbImportMigrationUser;
import home.helper.batch.persistence.database.migration.imports.ImportMigrationUserConverter;
import home.helper.batch.persistence.database.migration.imports.ImportMigrationUserSaveRepository;
import home.helper.batch.persistence.database.migration.imports.SelectMigrationUserMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationUserStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationUser";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<DbImportMigrationUser> reader,
        @Qualifier(STEP_PREFIX + "ItemProcessor") ItemProcessor<DbImportMigrationUser, ImportMigrationUserInput> processor,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationUserInput> writer
    ) {
        return stepBuilderFactory.
            <DbImportMigrationUser, ImportMigrationUserInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<DbImportMigrationUser> reader() {
        return itemReaderFactory.itemReader(SelectMigrationUserMapper.class, "selectMigrationUser");
    }

    @Bean(name = STEP_PREFIX + "ItemProcessor")
    public ItemProcessor<DbImportMigrationUser, ImportMigrationUserInput> processor() {
        return new ConvertItemProcessorBuilder<DbImportMigrationUser, ImportMigrationUserInput, ImportMigrationUserInput>()
            .converter(new ImportMigrationUserConverter())
            .useCase(inputData -> inputData)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationUserInput> writer(
        ImportMigrationUserSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ImportMigrationUserInput>()
            .writer(saveGateway)
            .build();
    }
}
