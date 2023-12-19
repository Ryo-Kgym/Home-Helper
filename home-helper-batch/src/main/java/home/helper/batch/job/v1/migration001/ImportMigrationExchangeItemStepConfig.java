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

import home.helper.batch.component.builder.CompositeItemWriterBuilder;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v1.imports.ImportMigrationExchangeItemOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationExchangeItemSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationExchangeItemMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationExchangeItemStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationExchangeItem";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationExchangeItemOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationExchangeItemOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationExchangeItemOutput, ImportMigrationExchangeItemOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationExchangeItemOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationExchangeItemMapper.class, "selectMigrationExchangeItem");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationExchangeItemOutput> writer(
        ImportMigrationExchangeItemSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationExchangeItemOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationExchangeItemOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
