/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.migration.jm001;

import home.helper.batch.component.factory.JobBuilderFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ImportMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;

    private final String JOB_PREFIX = "importMigration";

    @Bean(name = JOB_PREFIX + "Job")
    public Job job(@Qualifier("importMigrationUserStep") Step userStep,
                   @Qualifier("importMigrationUserStep") Step userStep2,
                   @Qualifier("importMigrationUserStep") Step userStep3) {
        return jobBuilderFactory.create(JOB_PREFIX)
            .start(userStep)
            .next(userStep2)
            .next(userStep3)
            .build();
    }
}

