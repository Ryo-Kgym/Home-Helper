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
import home.helper.batch.dto.v1.imports.ImportMigrationHelperKidParentOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationHelperKidParentSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationHelperKidParentMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationHelperKidParentStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationHelperKidParent";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationHelperKidParentOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationHelperKidParentOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationHelperKidParentOutput, ImportMigrationHelperKidParentOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationHelperKidParentOutput> reader() {
        return itemReaderFactory.itemReader(SelectMigrationHelperKidParentMapper.class, "selectMigrationHelperKidParent");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationHelperKidParentOutput> writer(
        ImportMigrationHelperKidParentSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationHelperKidParentOutput>()
            .writer(saveGateway)
            .build();
    }
}
