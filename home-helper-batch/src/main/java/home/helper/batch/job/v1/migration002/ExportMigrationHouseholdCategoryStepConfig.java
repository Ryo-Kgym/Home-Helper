/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration002;

import org.springframework.batch.core.Step;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.builder.CountingStepListener;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v1.export.ExportHouseholdCategoryInput;
import home.helper.batch.persistence.database.v1.export.ExportHouseholdCategoryMapper;
import home.helper.batch.persistence.database.v1.export.ExportMigrationHouseholdCategorySaveRepository;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationHouseholdCategoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationHouseholdCategory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportHouseholdCategoryInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportHouseholdCategoryInput> writer
    ) {
        return stepBuilderFactory.
            <ExportHouseholdCategoryInput, ExportHouseholdCategoryInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportHouseholdCategoryInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportHouseholdCategoryMapper.class, "fetchHouseholdCategory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportHouseholdCategoryInput> writer(
        ExportMigrationHouseholdCategorySaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportHouseholdCategoryInput>()
            .writer(saveGateway)
            .build();
    }
}
