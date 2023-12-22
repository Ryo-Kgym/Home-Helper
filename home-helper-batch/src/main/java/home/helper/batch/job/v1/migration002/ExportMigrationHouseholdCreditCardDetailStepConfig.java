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
import home.helper.batch.dto.v1.export.ExportHouseholdCreditCardDetailInput;
import home.helper.batch.persistence.database.v1.export.ExportHouseholdCreditCardDetailMapper;
import home.helper.batch.persistence.database.v1.export.ExportMigrationHouseholdCreditCardDetailSaveRepository;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationHouseholdCreditCardDetailStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationHouseholdCreditCardDetail";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportHouseholdCreditCardDetailInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportHouseholdCreditCardDetailInput> writer
    ) {
        return stepBuilderFactory.
            <ExportHouseholdCreditCardDetailInput, ExportHouseholdCreditCardDetailInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingItemWriteListener<>())
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportHouseholdCreditCardDetailInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportHouseholdCreditCardDetailMapper.class, "fetchHouseholdCreditCardDetail");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportHouseholdCreditCardDetailInput> writer(
        ExportMigrationHouseholdCreditCardDetailSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportHouseholdCreditCardDetailInput>()
            .writer(saveGateway)
            .build();
    }
}
