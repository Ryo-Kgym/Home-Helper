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
import home.helper.batch.dto.v1.imports.ImportMigrationHelperKidOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationHelperKidSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationHelperKidMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationHelperKidStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationHelperKid";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationHelperKidOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationHelperKidOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationHelperKidOutput, ImportMigrationHelperKidOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationHelperKidOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationHelperKidMapper.class, "selectMigrationHelperKid");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationHelperKidOutput> writer(
        ImportMigrationHelperKidSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationHelperKidOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationHelperKidOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
