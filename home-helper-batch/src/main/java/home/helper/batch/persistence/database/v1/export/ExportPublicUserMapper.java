/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.v2.export.ExportPublicUserInput;

@Mapper
public interface ExportPublicUserMapper {

    List<ExportPublicUserInput> fetchPublicUser();
}
