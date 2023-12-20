/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.builder;

import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.StepExecutionListener;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CountingStepListener<O> implements StepExecutionListener {

    @Override
    public ExitStatus afterStep(@NonNull StepExecution stepExecution) {
        var count = stepExecution.getWriteCount();
        log.info("実行件数: {}, 成功件数: {}, 失敗件数: {}, 対象： {}",
            stepExecution.getReadCount(),
            stepExecution.getWriteCount(),
            stepExecution.getSkipCount(),
            stepExecution.getStepName());
        return StepExecutionListener.super.afterStep(stepExecution);
    }
}
