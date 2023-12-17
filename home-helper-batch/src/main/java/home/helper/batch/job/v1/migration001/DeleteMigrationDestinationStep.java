/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration001;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.StepBuilderFactory;
import home.helper.batch.component.factory.TaskletBuilder;
import home.helper.batch.persistence.database.v1.imports.ImportMigrationDestinationDeleteRepository;

@Configuration
@RequiredArgsConstructor
public class DeleteMigrationDestinationStep {
    private final StepBuilderFactory stepBuilderFactory;
    private final String STEP_PREFIX = "deleteMigrationDestination";

    @Bean(name = STEP_PREFIX + "Step")
    public Step step(@Qualifier(STEP_PREFIX + "Tasklet") Tasklet tasklet) {
        return stepBuilderFactory
            .create(STEP_PREFIX + "Step", tasklet)
            .build();
    }

    @Bean(name = STEP_PREFIX + "Tasklet")
    public Tasklet tasklet(ImportMigrationDestinationDeleteRepository deleteRepository) {
        return new TaskletBuilder()
            .gateway(deleteRepository)
            .build();
    }
}
