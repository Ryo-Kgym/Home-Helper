/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.migration.imports.ImportMigrationGroupRoleOutput;

@Mapper
public interface SelectMigrationGroupRoleMapper {

    List<ImportMigrationGroupRoleOutput> selectMigrationGroupRole();
}
