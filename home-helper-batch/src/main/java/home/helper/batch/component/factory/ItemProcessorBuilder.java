/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import home.helper.core.error.HomeHelperBatchException;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.lang.NonNull;

public class ItemProcessorBuilder<I, O> implements ItemProcessor<I, O> {
    private UseCaseWithException<I, O> useCase;

    @Override
    public O process(@NonNull I inputData) {
        try {
            return useCase.handle(inputData);
        } catch (HomeHelperBatchException e) {
            throw new RuntimeException(e);
        }
    }

    public ItemProcessorBuilder<I, O> useCase(UseCaseWithException<I, O> useCase) {
        this.useCase = useCase;
        return this;
    }

    public ItemProcessor<I, O> build() {
        return this;
    }
}
