/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import home.helper.batch.error.HomeHelperBatchException;

public interface UseCaseWithException<I, O> {

    O handle(I inputData) throws HomeHelperBatchException;
}
