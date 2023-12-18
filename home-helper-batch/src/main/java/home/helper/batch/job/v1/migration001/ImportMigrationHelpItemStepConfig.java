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
import home.helper.batch.dto.v1.imports.ImportMigrationHelpItemOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationHelpItemSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationHelpItemMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationHelpItemStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationHelpItem";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationHelpItemOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationHelpItemOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationHelpItemOutput, ImportMigrationHelpItemOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationHelpItemOutput> reader() {
        return itemReaderFactory.itemReader(SelectMigrationHelpItemMapper.class, "selectMigrationHelpItem");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationHelpItemOutput> writer(
        ImportMigrationHelpItemSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationHelpItemOutput>()
            .writer(saveGateway)
            .build();
    }
}
