/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperKidPointMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int deleteByExample(DbV1HelperKidPointExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helperKidId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int insert(DbV1HelperKidPoint record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperKidPoint record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    DbV1HelperKidPoint selectByPrimaryKey(String helperKidId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperKidPoint record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperKidPoint record);
}