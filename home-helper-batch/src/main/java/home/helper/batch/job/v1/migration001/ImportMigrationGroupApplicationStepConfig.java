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
import home.helper.batch.dto.v1.imports.ImportMigrationGroupApplicationOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationGroupApplicationSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationGroupApplicationMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationGroupApplicationStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationGroupApplication";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationGroupApplicationOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationGroupApplicationOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationGroupApplicationOutput, ImportMigrationGroupApplicationOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationGroupApplicationOutput> reader() {
        return itemReaderFactory.itemReader(SelectMigrationGroupApplicationMapper.class, "selectMigrationGroupApplication");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationGroupApplicationOutput> writer(
        ImportMigrationGroupApplicationSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationGroupApplicationOutput>()
            .writer(saveGateway)
            .build();
    }
}
