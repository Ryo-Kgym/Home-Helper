/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.gateway;

public interface SaveRepository<O> {

    void save(O data);
}
