/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.JobBuilderFactory;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;

    private final String JOB_PREFIX = "importMigration";

    @Bean(name = JOB_PREFIX + "Job")
    public Job job(
        Step importMigrationUserStep,
        Step importMigrationAccountStep,
        Step importMigrationAffiliationStep,
        Step importMigrationApplicationStep
    ) {
        return jobBuilderFactory.create(JOB_PREFIX)
            .start(importMigrationUserStep)
            .next(importMigrationAccountStep)
            .next(importMigrationAffiliationStep)
            .next(importMigrationApplicationStep)
            .build();
    }
}

