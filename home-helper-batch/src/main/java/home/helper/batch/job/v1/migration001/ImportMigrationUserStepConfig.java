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
import home.helper.batch.dto.v1.imports.ImportMigrationUserOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationUserSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationUserMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationUserStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationUser";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationUserOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationUserOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationUserOutput, ImportMigrationUserOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationUserOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationUserMapper.class, "selectMigrationUser");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationUserOutput> writer(
        ImportMigrationUserSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationUserOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationUserOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
