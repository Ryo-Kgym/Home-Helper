/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration001;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.JobBuilderFactory;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final String JOB_PREFIX = "importMigration";

    //    @Bean(name = JOB_PREFIX + "Job")
    public Job job(
        Step deleteMigrationDestinationStep,
        Step importMigrationGroupStep,
        Step importMigrationUserStep,
        Step importMigrationGroupRoleStep,
        Step importMigrationAffiliationStep,
        Step importMigrationApplicationStep,
        Step importMigrationGroupApplicationStep,
        Step importMigrationAccountStep,
        Step importMigrationGenreStep,
        Step importMigrationCategoryStep,
        Step importMigrationSummaryCategoryByGroupStep,
        Step importMigrationTransferCategoryStep,
        Step importMigrationDepositCategoryStep,
        Step importMigrationDailyDetailStep,
        Step importMigrationImportFileHistoryStep,
        Step importMigrationCreditCardSummaryStep,
        Step importMigrationCreditCardDetailStep,
        Step importMigrationHelpItemStep,
        Step importMigrationExchangeItemStep,
        Step importMigrationHelperKidStep,
        Step importMigrationHelperKidParentStep,
        Step importMigrationHelperKidPointStep,
        Step importMigrationHelpPointEarnedAchievementStep,
        Step importMigrationHelpPointEarnedDetailStep,
        Step importMigrationHelpPointExchangedAchievementStep
    ) {
        return jobBuilderFactory.create(JOB_PREFIX + "Job")
            .start(deleteMigrationDestinationStep)
            .next(importMigrationGroupStep)
            .next(importMigrationUserStep)
            .next(importMigrationGroupRoleStep)
            .next(importMigrationAffiliationStep)
            .next(importMigrationApplicationStep)
            .next(importMigrationGroupApplicationStep)
            .next(importMigrationAccountStep)
            .next(importMigrationGenreStep)
            .next(importMigrationCategoryStep)
            .next(importMigrationTransferCategoryStep)
            .next(importMigrationSummaryCategoryByGroupStep)
            .next(importMigrationDepositCategoryStep)
            .next(importMigrationDailyDetailStep)
            .next(importMigrationImportFileHistoryStep)
            .next(importMigrationCreditCardSummaryStep)
            .next(importMigrationCreditCardDetailStep)
            .next(importMigrationHelpItemStep)
            .next(importMigrationExchangeItemStep)
            .next(importMigrationHelperKidStep)
            .next(importMigrationHelperKidParentStep)
            .next(importMigrationHelperKidPointStep)
            .next(importMigrationHelpPointEarnedAchievementStep)
            .next(importMigrationHelpPointEarnedDetailStep)
            .next(importMigrationHelpPointExchangedAchievementStep)
            .build();
    }
}

