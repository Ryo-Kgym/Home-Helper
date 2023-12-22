/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV2GroupApplicationMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int deleteByExample(DbV2GroupApplicationExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int insert(DbV2GroupApplication record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int insertSelective(DbV2GroupApplication record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    DbV2GroupApplication selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV2GroupApplication record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.group_application
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV2GroupApplication record);
}