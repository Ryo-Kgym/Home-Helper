/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperKidParentMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helperKidParentId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    int insert(DbV1HelperKidParent record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperKidParent record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    DbV1HelperKidParent selectByPrimaryKey(String helperKidParentId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperKidParent record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperKidParent record);
}