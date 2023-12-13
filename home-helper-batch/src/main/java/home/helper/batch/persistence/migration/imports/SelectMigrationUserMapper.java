/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.imports;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SelectMigrationUserMapper {

    List<DbImportMigrationUser> selectMigrationUser();
}
