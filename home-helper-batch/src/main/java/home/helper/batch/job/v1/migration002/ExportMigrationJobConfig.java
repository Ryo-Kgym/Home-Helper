/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration002;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.RequiredArgsConstructor;

import home.helper.batch.component.factory.JobBuilderFactory;

@Configuration
@RequiredArgsConstructor
public class ExportMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final String JOB_PREFIX = "exportMigration";

    @Bean(name = JOB_PREFIX + "Job")
    public Job job(
        Step deleteMigrationV2ProductionStep,
        Step exportMigrationPublicUserStep,
        Step exportMigrationPublicGroupStep,
        Step exportMigrationPublicAffiliationStep,
        Step exportMigrationPublicApplicationStep,
        Step exportMigrationPublicGroupApplicationStep,
        Step exportMigrationHouseholdGenreStep,
        Step exportMigrationHouseholdCategoryStep,
        Step exportMigrationHouseholdDepositCategoryStep,
        Step exportMigrationHouseholdSummaryCategoryStep,
        Step exportMigrationHouseholdTransferCategoryStep,
        Step exportMigrationHouseholdAccountStep,
        Step exportMigrationHouseholdDailyDetailStep,
        Step exportMigrationHouseholdImportFileHistoryStep,
        Step exportMigrationHouseholdCreditCardSummaryStep,
        Step exportMigrationHouseholdCreditCardDetailStep
    ) {
        return jobBuilderFactory.create(JOB_PREFIX + "Job")
            .start(deleteMigrationV2ProductionStep)
//            .next(exportMigrationPublicUserStep)
//            .next(exportMigrationPublicGroupStep)
//            .next(exportMigrationPublicAffiliationStep)
//            .next(exportMigrationPublicApplicationStep)
//            .next(exportMigrationPublicGroupApplicationStep)
//            .next(exportMigrationHouseholdGenreStep)
//            .next(exportMigrationHouseholdCategoryStep)
//            .next(exportMigrationHouseholdDepositCategoryStep)
//            .next(exportMigrationHouseholdSummaryCategoryStep)
//            .next(exportMigrationHouseholdTransferCategoryStep)
//            .next(exportMigrationHouseholdAccountStep)
//            .next(exportMigrationHouseholdDailyDetailStep)
//            .next(exportMigrationHouseholdImportFileHistoryStep)
//            .next(exportMigrationHouseholdCreditCardSummaryStep)
//            .next(exportMigrationHouseholdCreditCardDetailStep)
            .build();
    }
}

