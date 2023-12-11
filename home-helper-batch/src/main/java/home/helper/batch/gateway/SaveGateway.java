/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.gateway;

public interface SaveGateway<O> {

    void save(O data);
}
