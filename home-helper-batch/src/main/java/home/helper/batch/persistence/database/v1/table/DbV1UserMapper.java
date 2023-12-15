/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1UserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String userId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    int insert(DbV1User record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    int insertSelective(DbV1User record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    DbV1User selectByPrimaryKey(String userId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1User record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.user
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1User record);
}