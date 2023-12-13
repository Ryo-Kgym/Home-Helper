/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbUserMapper {
    int deleteByPrimaryKey(Object userId);

    int insert(DbUser record);

    int insertSelective(DbUser record);

    DbUser selectByPrimaryKey(Object userId);

    int updateByPrimaryKeySelective(DbUser record);

    int updateByPrimaryKey(DbUser record);
}