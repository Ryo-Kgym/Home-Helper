/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperPointEarnedAchievementMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helpPointEarnedAchievementId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    int insert(DbV1HelperPointEarnedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperPointEarnedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    DbV1HelperPointEarnedAchievement selectByPrimaryKey(String helpPointEarnedAchievementId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperPointEarnedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperPointEarnedAchievement record);
}