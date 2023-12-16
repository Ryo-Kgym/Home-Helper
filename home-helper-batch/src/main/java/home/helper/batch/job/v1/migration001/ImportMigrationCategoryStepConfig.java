/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration001;

import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v1.imports.ImportMigrationCategoryOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationCategorySaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationCategoryMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationCategoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationCategory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationCategoryOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationCategoryOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationCategoryOutput, ImportMigrationCategoryOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationCategoryOutput> reader() {
        return itemReaderFactory.itemReader(SelectMigrationCategoryMapper.class, "selectMigrationCategory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationCategoryOutput> writer(
        ImportMigrationCategorySaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationCategoryOutput>()
            .writer(saveGateway)
            .build();
    }
}