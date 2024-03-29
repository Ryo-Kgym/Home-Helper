/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV2HelpPointExchangedAchievementMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int deleteByExample(DbV2HelpPointExchangedAchievementExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int insert(DbV2HelpPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int insertSelective(DbV2HelpPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    DbV2HelpPointExchangedAchievement selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV2HelpPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV2HelpPointExchangedAchievement record);
}