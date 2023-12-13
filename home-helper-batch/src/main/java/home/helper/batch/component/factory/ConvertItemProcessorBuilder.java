/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import java.util.function.Function;

import org.springframework.batch.item.ItemProcessor;
import org.springframework.lang.NonNull;

import home.helper.batch.domain.usecase.UseCaseWithException;
import home.helper.batch.error.HomeHelperBatchException;

/**
 * MybatisEntityをInputDataに変換して、UseCaseに渡すためのItemProcessorを生成するクラス
 *
 * @param <E> MybatisEntity
 * @param <I> InputData
 * @param <O> OutputData
 */
public class ConvertItemProcessorBuilder<E, I, O> implements ItemProcessor<E, O> {
    private UseCaseWithException<I, O> useCase;
    private Function<E, I> converter;


    @Override
    public O process(@NonNull E entity) throws Exception {
        try {
            I inputData = converter.apply(entity);
            return useCase.handle(inputData);
        } catch (HomeHelperBatchException e) {
            throw new RuntimeException(e);
        }
    }

    public ConvertItemProcessorBuilder<E, I, O> converter(Function<E, I> converter) {
        this.converter = converter;
        return this;
    }

    public ConvertItemProcessorBuilder<E, I, O> useCase(UseCaseWithException<I, O> useCase) {
        this.useCase = useCase;
        return this;
    }

    public ItemProcessor<E, O> build() {
        return this;
    }
}
