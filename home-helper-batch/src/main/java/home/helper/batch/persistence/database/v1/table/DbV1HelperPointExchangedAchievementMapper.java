/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV1HelperPointExchangedAchievementMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String helpPointExchangedAchievementId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int insert(DbV1HelperPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int insertSelective(DbV1HelperPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    DbV1HelperPointExchangedAchievement selectByPrimaryKey(String helpPointExchangedAchievementId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV1HelperPointExchangedAchievement record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_exchanged_achievement
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV1HelperPointExchangedAchievement record);
}