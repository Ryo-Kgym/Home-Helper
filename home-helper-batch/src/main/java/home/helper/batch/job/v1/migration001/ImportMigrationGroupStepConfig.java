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
import home.helper.batch.dto.v1.imports.ImportMigrationGroupOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationGroupSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationGroupMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationGroupStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationGroup";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationGroupOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationGroupOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationGroupOutput, ImportMigrationGroupOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationGroupOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationGroupMapper.class, "selectMigrationGroup");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationGroupOutput> writer(
        ImportMigrationGroupSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationGroupOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationGroupOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
