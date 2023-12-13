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
    private final JobRepository myJobRepository;
    private final PlatformTransactionManager transactionManager;

    public <I, O> SimpleStepBuilder<I, O> create(String stepName) {
        return new StepBuilder(stepName, myJobRepository)
            .allowStartIfComplete(true)
            .chunk(100, transactionManager)
            ;
    }
}
