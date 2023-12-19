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
import home.helper.batch.dto.v1.imports.ImportMigrationCreditCardSummaryOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationCreditCardSummarySaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationCreditCardSummaryMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationCreditCardSummaryStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationCreditCardSummary";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationCreditCardSummaryOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationCreditCardSummaryOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationCreditCardSummaryOutput, ImportMigrationCreditCardSummaryOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationCreditCardSummaryOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationCreditCardSummaryMapper.class, "selectMigrationCreditCardSummary");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationCreditCardSummaryOutput> writer(
        ImportMigrationCreditCardSummarySaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationCreditCardSummaryOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationCreditCardSummaryOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
