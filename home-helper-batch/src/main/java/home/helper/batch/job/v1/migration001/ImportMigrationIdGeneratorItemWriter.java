/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job.v1.migration001;

import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.batch.item.ItemWriter;
import lombok.Builder;

import home.helper.batch.component.builder.CompositeItemWriterBuilder;
import home.helper.batch.gateway.migration.MigrationIdGateway;
import home.helper.batch.persistence.database.v1.table.ConvId;
import home.helper.batch.persistence.database.v1.table.ConvIdMapper;

@Builder
public class ImportMigrationIdGeneratorItemWriter<O> {
    private ConvIdMapper convIdMapper;
    private MigrationIdGateway migrationIdGateway;
    private String tableName;
    private Function<O, String> currentIdGetter;
    private Consumer<O> saveGateway;

    private final Consumer<O> generateId = (O output) -> {
        var id = migrationIdGateway.generateId();
        convIdMapper.insert(new ConvId() {{
            setTableName(tableName);
            setCurrentId(currentIdGetter.apply(output));
            setId(id);
        }});
    };

    public ItemWriter<O> build() {
        var ciwb = new CompositeItemWriterBuilder<O>();
        ciwb.append(saveGateway);
        ciwb.append(generateId);
        return ciwb.build();
    }
}
