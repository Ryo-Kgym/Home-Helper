/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1production.imports;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.v1.imports.ImportMigrationExchangeItemOutput;

@Mapper
public interface SelectMigrationExchangeItemMapper {

    List<ImportMigrationExchangeItemOutput> selectMigrationExchangeItem();
}
