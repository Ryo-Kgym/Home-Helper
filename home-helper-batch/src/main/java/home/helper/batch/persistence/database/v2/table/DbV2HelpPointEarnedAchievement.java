/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV2HelpPointEarnedAchievement {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_achievement.id
     *
     * @mbg.generated
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_achievement.helper_kid_id
     *
     * @mbg.generated
     */
    private String helperKidId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_achievement.earned_datetime
     *
     * @mbg.generated
     */
    private LocalDateTime earnedDatetime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_achievement.earned_point
     *
     * @mbg.generated
     */
    private Integer earnedPoint;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_achievement.group_id
     *
     * @mbg.generated
     */
    private String groupId;
}