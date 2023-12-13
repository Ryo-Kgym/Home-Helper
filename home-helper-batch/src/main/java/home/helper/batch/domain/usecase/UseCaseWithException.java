/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.domain.usecase;

import home.helper.batch.error.HomeHelperBatchException;

/**
 * UseCaseを生成するクラスです。
 *
 * @param <I> 入力データの型
 * @param <O> 出力データの型
 */
public interface UseCaseWithException<I, O> {

    /**
     * UseCaseを実行します。
     *
     * @param inputData 入力データ
     * @return 出力データ
     * @throws HomeHelperBatchException 例外
     */
    O handle(I inputData) throws HomeHelperBatchException;
}
