/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperKidMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int deleteByExample(DbV1HelperKidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helperKidId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int insert(DbV1HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    DbV1HelperKid selectByPrimaryKey(String helperKidId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperKid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperKid record);
}