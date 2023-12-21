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
import home.helper.batch.dto.v1.export.ExportPublicGroupApplicationInput;
import home.helper.batch.persistence.database.v1.export.ExportMigrationPublicGroupApplicationSaveRepository;
import home.helper.batch.persistence.database.v1.export.ExportPublicGroupApplicationMapper;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationPublicGroupApplicationStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationPublicGroupApplication";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportPublicGroupApplicationInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportPublicGroupApplicationInput> writer
    ) {
        return stepBuilderFactory.
            <ExportPublicGroupApplicationInput, ExportPublicGroupApplicationInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportPublicGroupApplicationInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportPublicGroupApplicationMapper.class, "fetchPublicGroupApplication");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportPublicGroupApplicationInput> writer(
        ExportMigrationPublicGroupApplicationSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportPublicGroupApplicationInput>()
            .writer(saveGateway)
            .build();
    }
}
