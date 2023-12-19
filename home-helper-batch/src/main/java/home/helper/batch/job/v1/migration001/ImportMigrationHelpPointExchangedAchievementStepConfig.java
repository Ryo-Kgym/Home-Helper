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
import home.helper.batch.dto.v1.imports.ImportMigrationHelpPointExchangedAchievementOutput;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationHelpPointExchangedAchievementSaveRepository;
import home.helper.batch.persistence.database.v1.imports.RegisterConvIdRepository;
import home.helper.batch.persistence.database.v1production.imports.SelectMigrationHelpPointExchangedAchievementMapper;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationHelpPointExchangedAchievementStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemReaderFactory itemReaderFactory;

    private final String STEP_PREFIX = "importMigrationHelpPointExchangedAchievement";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(
        @Qualifier(STEP_PREFIX + "ItemReader") ItemReader<ImportMigrationHelpPointExchangedAchievementOutput> reader,
        @Qualifier(STEP_PREFIX + "ItemWriter") ItemWriter<ImportMigrationHelpPointExchangedAchievementOutput> writer
    ) {
        return stepBuilderFactory.
            <ImportMigrationHelpPointExchangedAchievementOutput, ImportMigrationHelpPointExchangedAchievementOutput>create(STEP_PREFIX + "Step")
            .reader(reader)
            .writer(writer)
            .build();
    }

    @Bean(name = STEP_PREFIX + "ItemReader")
    public ItemReader<ImportMigrationHelpPointExchangedAchievementOutput> reader() {
        return itemReaderFactory.itemReaderV1Production(SelectMigrationHelpPointExchangedAchievementMapper.class, "selectMigrationHelpPointExchangedAchievement");
    }

    @Bean(name = STEP_PREFIX + "ItemWriter")
    public ItemWriter<ImportMigrationHelpPointExchangedAchievementOutput> writer(
        ImportMigrationHelpPointExchangedAchievementSaveRepository saveGateway,
        RegisterConvIdRepository<ImportMigrationHelpPointExchangedAchievementOutput> saveConvIdGateway
    ) {
        return new CompositeItemWriterBuilder<ImportMigrationHelpPointExchangedAchievementOutput>()
            .append(saveGateway::save)
            .append(saveConvIdGateway::save)
            .build();
    }
}
