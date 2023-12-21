/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.converter;

import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;
import de.huxhorn.sulky.ulid.ULID;

import home.helper.batch.gateway.migration.MigrationIdGateway;

@Component
@RequiredArgsConstructor
public class UlidGenerator implements MigrationIdGateway {
    private final ULID ulid = new ULID();

    @Override
    public String generateId() {
        return String.valueOf(ulid.nextULID());
    }
}
