/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.table;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbUserMapper {
    int deleteByPrimaryKey(String userId);

    int insert(DbUser record);

    int insertSelective(DbUser record);

    List<DbUser> selectByExample(DbUserExample example);

    DbUser selectByPrimaryKey(String userId);

    int updateByPrimaryKeySelective(DbUser record);

    int updateByPrimaryKey(DbUser record);
}