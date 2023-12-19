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
import home.helper.batch.dto.v1.imports.ImportMigrationImportFileHistoryOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationImportFileHistorySaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationImportFileHistoryMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationImportFileHistoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationImportFileHistory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationImportFileHistoryOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationImportFileHistoryOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationImportFileHistoryOutput, ImportMigrationImportFileHistoryOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationImportFileHistoryOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationImportFileHistoryMapper.class, "selectMigrationImportFileHistory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationImportFileHistoryOutput> writer(
        ImportMigrationImportFileHistorySaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationImportFileHistoryOutput>()
            .writer(saveGateway)
            .build();
    }
}
