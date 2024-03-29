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
import home.helper.batch.dto.v1.imports.ImportMigrationDepositCategoryOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationDepositCategorySaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationDepositCategoryMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationDepositCategoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationDepositCategory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationDepositCategoryOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationDepositCategoryOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationDepositCategoryOutput, ImportMigrationDepositCategoryOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationDepositCategoryOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationDepositCategoryMapper.class, "selectMigrationDepositCategory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationDepositCategoryOutput> writer(
        ImportMigrationDepositCategorySaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationDepositCategoryOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationDepositCategoryOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
