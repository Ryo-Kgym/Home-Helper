/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.migration.imports.ImportMigrationTransferCategoryOutput;

@Mapper
public interface SelectMigrationTransferCategoryMapper {

    List<ImportMigrationTransferCategoryOutput> selectMigrationTransferCategory();
}
