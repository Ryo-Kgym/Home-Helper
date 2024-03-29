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
import home.helper.batch.dto.v1.imports.ImportMigrationCreditCardDetailOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationCreditCardDetailSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationCreditCardDetailMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationCreditCardDetailStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationCreditCardDetail";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationCreditCardDetailOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationCreditCardDetailOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationCreditCardDetailOutput, ImportMigrationCreditCardDetailOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationCreditCardDetailOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationCreditCardDetailMapper.class, "selectMigrationCreditCardDetail");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationCreditCardDetailOutput> writer(
        ImportMigrationCreditCardDetailSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationCreditCardDetailOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationCreditCardDetailOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
