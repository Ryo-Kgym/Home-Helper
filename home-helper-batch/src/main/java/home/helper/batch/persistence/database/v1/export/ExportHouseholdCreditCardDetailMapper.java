/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import home.helper.batch.dto.v1.export.ExportHouseholdCreditCardDetailInput;

@Mapper
public interface ExportHouseholdCreditCardDetailMapper {

    List<ExportHouseholdCreditCardDetailInput> fetchHouseholdCreditCardDetail();
}
