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
import home.helper.batch.dto.v1.export.ExportPublicAffiliationInput;
import home.helper.batch.persistence.database.v1.export.ExportMigrationPublicAffiliationSaveRepository;
import home.helper.batch.persistence.database.v1.export.ExportPublicAffiliationMapper;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationPublicAffiliationStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationPublicAffiliation";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportPublicAffiliationInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportPublicAffiliationInput> writer
    ) {
        return stepBuilderFactory.
            <ExportPublicAffiliationInput, ExportPublicAffiliationInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportPublicAffiliationInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportPublicAffiliationMapper.class, "fetchPublicAffiliation");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportPublicAffiliationInput> writer(
        ExportMigrationPublicAffiliationSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportPublicAffiliationInput>()
            .writer(saveGateway)
            .build();
    }
}
