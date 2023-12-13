/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;

/**
 * JobBuilderを生成するクラスです。
 */
@Component
@RequiredArgsConstructor
public class JobBuilderFactory {
    private final JobRepository myJobRepository;


    /**
     * JobBuilderを生成します。
     *
     * @param jobName ジョブ名
     * @return JobBuilder
     */
    public JobBuilder create(String jobName) {
        return new JobBuilder(jobName, myJobRepository)
            .incrementer(new RunIdIncrementer());
    }
}
