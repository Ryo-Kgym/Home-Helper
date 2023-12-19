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
import home.helper.batch.dto.v1.imports.ImportMigrationSummaryCategoryByGroupOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationSummaryCategoryByGroupSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationSummaryCategoryByGroupMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationSummaryCategoryByGroupStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationSummaryCategoryByGroup";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationSummaryCategoryByGroupOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationSummaryCategoryByGroupOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationSummaryCategoryByGroupOutput, ImportMigrationSummaryCategoryByGroupOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationSummaryCategoryByGroupOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationSummaryCategoryByGroupMapper.class, "selectMigrationSummaryCategoryByGroup");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationSummaryCategoryByGroupOutput> writer(
        ImportMigrationSummaryCategoryByGroupSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationSummaryCategoryByGroupOutput>()
            .writer(saveGateway)
            .build();
    }
}
