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
import home.helper.batch.dto.v1.imports.ImportMigrationHelpPointEarnedDetailOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationHelpPointEarnedDetailSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationHelpPointEarnedDetailMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationHelpPointEarnedDetailStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationHelpPointEarnedDetail";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationHelpPointEarnedDetailOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationHelpPointEarnedDetailOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationHelpPointEarnedDetailOutput, ImportMigrationHelpPointEarnedDetailOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationHelpPointEarnedDetailOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationHelpPointEarnedDetailMapper.class, "selectMigrationHelpPointEarnedDetail");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationHelpPointEarnedDetailOutput> writer(
        ImportMigrationHelpPointEarnedDetailSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationHelpPointEarnedDetailOutput>()
            .writer(saveGateway)
            .build();
    }
}
