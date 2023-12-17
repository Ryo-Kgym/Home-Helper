/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration001;

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
        Step deleteMigrationDestinationStep,
        Step importMigrationGroupStep,
        Step importMigrationUserStep,
        Step importMigrationAccountStep,
        Step importMigrationAffiliationStep,
        Step importMigrationApplicationStep,
        Step importMigrationCategoryStep,
        Step importMigrationGenreStep,
        Step importMigrationGroupApplicationStep,
        Step importMigrationGroupRoleStep,
        Step importMigrationSummaryCategoryByGroupStep,
        Step importMigrationTransferCategoryStep
    ) {
        return jobBuilderFactory.create(JOB_PREFIX)
            .start(deleteMigrationDestinationStep)
            .next(importMigrationGroupStep)
            .next(importMigrationAccountStep)
            .next(importMigrationUserStep)
//            .next(importMigrationAffiliationStep)
//            .next(importMigrationApplicationStep)
//            .next(importMigrationCategoryStep)
//            .next(importMigrationGenreStep)
//            .next(importMigrationGroupApplicationStep)
//            .next(importMigrationGroupRoleStep)
//            .next(importMigrationSummaryCategoryByGroupStep)
//            .next(importMigrationTransferCategoryStep)
            .build();
    }
}

