/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.table;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbAccountMapper {
    int deleteByPrimaryKey(String accountId);

    int insert(DbAccount record);

    int insertSelective(DbAccount record);

    List<DbAccount> selectByExample(DbAccountExample example);

    DbAccount selectByPrimaryKey(String accountId);

    int updateByPrimaryKeySelective(DbAccount record);

    int updateByPrimaryKey(DbAccount record);
}