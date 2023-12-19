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

import home.helper.batch.component.factory.ItemReaderFactory;
import home.helper.batch.component.factory.ItemWriterBuilder;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.dto.v2.export.ExportPublicUserInput;
import home.helper.batch.persistence.database.v1.export.ExportMigrationPublicUserSaveRepository;
import home.helper.batch.persistence.database.v1.export.ExportPublicUserMapper;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationPublicUserStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "exportMigrationPublicUser";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ExportPublicUserInput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ExportPublicUserInput> writer
    ) {
        return stepBuilderFactory.
            <ExportPublicUserInput, ExportPublicUserInput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ExportPublicUserInput> reader() {
        return itemReaderFactory.itemReaderV1(ExportPublicUserMapper.class, "fetchPublicUser");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ExportPublicUserInput> writer(
        ExportMigrationPublicUserSaveRepository saveGateway
    ) {
        return new ItemWriterBuilder<ExportPublicUserInput>()
            .writer(saveGateway)
            .build();
    }
}
