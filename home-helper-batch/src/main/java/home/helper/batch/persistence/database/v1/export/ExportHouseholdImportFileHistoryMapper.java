/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.v1.export.ExportHouseholdImportFileHistoryInput;

@Mapper
public interface ExportHouseholdImportFileHistoryMapper {

    List<ExportHouseholdImportFileHistoryInput> fetchHouseholdImportFileHistory();
}
