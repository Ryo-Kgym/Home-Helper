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
import home.helper.batch.component.builder.CountingStepListener;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v1.imports.ImportMigrationTransferCategoryOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationTransferCategorySaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationTransferCategoryMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationTransferCategoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationTransferCategory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationTransferCategoryOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationTransferCategoryOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationTransferCategoryOutput, ImportMigrationTransferCategoryOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationTransferCategoryOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationTransferCategoryMapper.class, "selectMigrationTransferCategory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationTransferCategoryOutput> writer(
        ImportMigrationTransferCategorySaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationTransferCategoryOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationTransferCategoryOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
