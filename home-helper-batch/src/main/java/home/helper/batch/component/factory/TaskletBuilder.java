/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;

import home.helper.batch.gateway.NoArgsSaveGateway;

public class TaskletBuilder {
    private NoArgsSaveGateway gateway;

    public TaskletBuilder gateway(NoArgsSaveGateway gateway) {
        this.gateway = gateway;
        return this;
    }

    public Tasklet build() {
        return (contribution, chunkContext) -> {
            gateway.save();
            return RepeatStatus.FINISHED;
        };
    }
}
