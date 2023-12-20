/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.domain.model.id.CurrentId;
import home.helper.batch.gateway.migration.MigrationIdGateway;
import home.helper.batch.persistence.database.v1.table.ConvId;
import home.helper.batch.persistence.database.v1.table.ConvIdMapper;

@Repository
@RequiredArgsConstructor
public class RegisterConvIdRepository<O extends CurrentId> {
    private final ConvIdMapper convIdMapper;
    private final MigrationIdGateway migrationIdGateway;

    public void save(O output) {
        var id = migrationIdGateway.generateId();
        convIdMapper.insert(new ConvId() {{
            setTableName(extractTableName(output));
            setCurrentId(output.getCurrentId());
            setId(id);
        }});
    }

    private String extractTableName(O output) {
        return output.getClass().getSimpleName()
            .replaceAll("ImportMigration", "")
            .replaceAll("Output", "")
            .toLowerCase();
    }
}
