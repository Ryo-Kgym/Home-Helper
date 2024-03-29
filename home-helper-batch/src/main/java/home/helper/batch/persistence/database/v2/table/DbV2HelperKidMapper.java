/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV2HelperKidMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int deleteByExample(DbV2HelperKidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int insert(DbV2HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int insertSelective(DbV2HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    DbV2HelperKid selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV2HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV2HelperKid record);
}