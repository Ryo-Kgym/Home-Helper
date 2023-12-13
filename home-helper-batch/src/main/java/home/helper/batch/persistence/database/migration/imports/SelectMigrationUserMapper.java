/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SelectMigrationUserMapper {

    List<DbImportMigrationUser> selectMigrationUser();
}
