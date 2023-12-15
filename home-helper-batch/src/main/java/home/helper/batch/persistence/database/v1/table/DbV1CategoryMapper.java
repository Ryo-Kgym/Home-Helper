/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1CategoryMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String categoryId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    int insert(DbV1Category record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    int insertSelective(DbV1Category record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    DbV1Category selectByPrimaryKey(String categoryId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1Category record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.category
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1Category record);
}