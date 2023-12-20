/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.converter;

import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;

import home.helper.batch.gateway.migration.MigrationIdGateway;

@Component
@RequiredArgsConstructor
public class UlidGenerator implements MigrationIdGateway {

    private int count = 0;

    @Override
    public String generateId() {
        return String.valueOf(count++);
    }
}
