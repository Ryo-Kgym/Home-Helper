/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.SimpleStepBuilder;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import lombok.RequiredArgsConstructor;

/**
 * StepBuilderを生成するクラスです。
 */
@Component
@RequiredArgsConstructor
public class StepBuilderFactory {
    private final JobRepository myJobRepository;
    private final PlatformTransactionManager jobTransactionManager;

    /**
     * StepBuilderを生成します。
     *
     * @param stepName ステップ名
     * @param <I>      入力データの型
     * @param <O>      出力データの型
     * @return StepBuilder
     */
    public <I, O> SimpleStepBuilder<I, O> create(String stepName) {
        return new StepBuilder(stepName, myJobRepository)
            .allowStartIfComplete(true)
            .chunk(100, jobTransactionManager)
            ;
    }
}
