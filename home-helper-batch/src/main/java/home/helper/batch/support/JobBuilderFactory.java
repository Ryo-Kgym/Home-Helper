/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.support;

import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JobBuilderFactory {
    private final JobRepository jobRepository;

    public Job create(String jobName, Step... steps) {
        return new JobBuilder(jobName, jobRepository)
                .start(steps[0])
                .incrementer(new RunIdIncrementer())
                .build();
    }
}
