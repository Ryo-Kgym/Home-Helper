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
import home.helper.batch.dto.v1.imports.ImportMigrationAccountOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationAccountSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationAccountMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationAccountStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationAccount";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationAccountOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationAccountOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationAccountOutput, ImportMigrationAccountOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationAccountOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationAccountMapper.class, "selectMigrationAccount");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationAccountOutput> writer(
        ImportMigrationAccountSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationAccountOutput>()
            .writer(saveGateway)
            .build();
    }
}
