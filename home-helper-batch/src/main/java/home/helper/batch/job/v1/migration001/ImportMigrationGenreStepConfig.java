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
import home.helper.batch.dto.v1.imports.ImportMigrationGenreOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationGenreSaveRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationGenreMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationGenreStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationGenre";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationGenreOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationGenreOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationGenreOutput, ImportMigrationGenreOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationGenreOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationGenreMapper.class, "selectMigrationGenre");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationGenreOutput> writer(
        ImportMigrationGenreSaveRepository saveGateway) {
        return new ItemWriterBuilder<ImportMigrationGenreOutput>()
            .writer(saveGateway)
            .build();
    }
}
