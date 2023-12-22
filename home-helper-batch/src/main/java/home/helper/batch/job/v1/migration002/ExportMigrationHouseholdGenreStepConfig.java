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
import home.helper.batch.dto.v1.export.ExportHouseholdGenreInput;
import home.helper.batch.persistence.database.v1.export.ExportHouseholdGenreMapper;
import home.helper.batch.persistence.database.v1.export.ExportMigrationHouseholdGenreSaveRepository;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationHouseholdGenreStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationHouseholdGenre";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportHouseholdGenreInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportHouseholdGenreInput> writer
    ) {
        return stepBuilderFactory.
            <ExportHouseholdGenreInput, ExportHouseholdGenreInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportHouseholdGenreInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportHouseholdGenreMapper.class, "fetchHouseholdGenre");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportHouseholdGenreInput> writer(
        ExportMigrationHouseholdGenreSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportHouseholdGenreInput>()
            .writer(saveGateway)
            .build();
    }
}
