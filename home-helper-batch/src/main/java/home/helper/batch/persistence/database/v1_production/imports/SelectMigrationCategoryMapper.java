/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1_production.imports;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.v1.imports.ImportMigrationCategoryOutput;

@Mapper
public interface SelectMigrationCategoryMapper {

    List<ImportMigrationCategoryOutput> selectMigrationCategory();
}
