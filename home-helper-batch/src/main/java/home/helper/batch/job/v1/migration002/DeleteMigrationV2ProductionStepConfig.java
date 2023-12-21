/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration002;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.builder.CountingStepListener;
import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.component.factory.TaskletBuilder;
import home.helper.batch.persistence.database.v1.export.DeleteMigrationV2ProductionRepository;

@Configuration
@RequiredArgsConstructor
public class DeleteMigrationV2ProductionStepConfig {
    private final StepBuilderFactory stepBuilderFactory;
    private final String STEP_PREFIX = "deleteMigrationV2Production";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(@Qualifier(STEP_PREFIX + "Tasklet") Tasklet tasklet) {
        return stepBuilderFactory
            .create(STEP_PREFIX + "Step", tasklet)
            .listener(new CountingStepListener<>())
            .build();
    }

    @Bean(name = STEP_PREFIX + "Tasklet")
    public Tasklet tasklet(DeleteMigrationV2ProductionRepository deleteRepository) {
        return new TaskletBuilder()
            .gateway(deleteRepository)
            .build();
    }
}
