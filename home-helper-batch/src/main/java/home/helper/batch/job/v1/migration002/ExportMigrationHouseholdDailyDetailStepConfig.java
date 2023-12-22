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

import home.helper.batch.component.builder.CountingItemWriteListener;
import home.helper.batch.component.builder.CountingStepListener;
import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v1.export.ExportHouseholdDailyDetailInput;
import home.helper.batch.persistence.database.v1.export.ExportHouseholdDailyDetailMapper;
import home.helper.batch.persistence.database.v1.export.ExportMigrationHouseholdDailyDetailSaveRepository;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationHouseholdDailyDetailStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationHouseholdDailyDetail";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportHouseholdDailyDetailInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportHouseholdDailyDetailInput> writer
    ) {
        return stepBuilderFactory.
            <ExportHouseholdDailyDetailInput, ExportHouseholdDailyDetailInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingItemWriteListener<>())
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportHouseholdDailyDetailInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportHouseholdDailyDetailMapper.class, "fetchHouseholdDailyDetail");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportHouseholdDailyDetailInput> writer(
        ExportMigrationHouseholdDailyDetailSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportHouseholdDailyDetailInput>()
            .writer(saveGateway)
            .build();
    }
}
