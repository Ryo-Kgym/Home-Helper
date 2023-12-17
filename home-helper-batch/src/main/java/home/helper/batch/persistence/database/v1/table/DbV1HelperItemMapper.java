/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperItemMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int deleteByExample(DbV1HelperItemExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helpItemId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int insert(DbV1HelperItem record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperItem record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    DbV1HelperItem selectByPrimaryKey(String helpItemId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperItem record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_item
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperItem record);
}