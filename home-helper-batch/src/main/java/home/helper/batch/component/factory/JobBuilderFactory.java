/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JobBuilderFactory {
    private final JobRepository myJobRepository;


    public JobBuilder create(String jobName) {
        return new JobBuilder(jobName, myJobRepository)
            .incrementer(new RunIdIncrementer());
    }
}
