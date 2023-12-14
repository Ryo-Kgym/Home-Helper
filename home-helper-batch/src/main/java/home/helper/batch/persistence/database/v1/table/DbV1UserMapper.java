/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1UserMapper {
    int deleteByPrimaryKey(String userId);

    int insert(DbV1User record);

    int insertSelective(DbV1User record);

    DbV1User selectByPrimaryKey(String userId);

    int updateByPrimaryKeySelective(DbV1User record);

    int updateByPrimaryKey(DbV1User record);
}