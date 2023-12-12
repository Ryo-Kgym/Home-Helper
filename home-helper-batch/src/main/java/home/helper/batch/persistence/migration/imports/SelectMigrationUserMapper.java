/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.imports;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SelectMigrationUserMapper {

    DbImportMigrationUser selectMigrationUser();
}
