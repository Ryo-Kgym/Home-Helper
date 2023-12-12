/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.SimpleStepBuilder;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;

@Component
@RequiredArgsConstructor
public class StepBuilderFactory {
    private final JobRepository jobRepository;
    private final PlatformTransactionManager primaryTxManager;

    public <I, O> SimpleStepBuilder<I, O> create(String stepName) {
        return new StepBuilder(stepName, jobRepository)
            .allowStartIfComplete(true)
            .chunk(100, primaryTxManager)
            ;
    }
}
