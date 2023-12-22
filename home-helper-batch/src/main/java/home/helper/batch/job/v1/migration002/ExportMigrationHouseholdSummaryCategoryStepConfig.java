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
import home.helper.batch.dto.v1.export.ExportHouseholdSummaryCategoryInput;
import home.helper.batch.persistence.database.v1.export.ExportHouseholdSummaryCategoryMapper;
import home.helper.batch.persistence.database.v1.export.ExportMigrationHouseholdSummaryCategorySaveRepository;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationHouseholdSummaryCategoryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationHouseholdSummaryCategory";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportHouseholdSummaryCategoryInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportHouseholdSummaryCategoryInput> writer
    ) {
        return stepBuilderFactory.
            <ExportHouseholdSummaryCategoryInput, ExportHouseholdSummaryCategoryInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportHouseholdSummaryCategoryInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportHouseholdSummaryCategoryMapper.class, "fetchHouseholdSummaryCategory");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportHouseholdSummaryCategoryInput> writer(
        ExportMigrationHouseholdSummaryCategorySaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportHouseholdSummaryCategoryInput>()
            .writer(saveGateway)
            .build();
    }
}
