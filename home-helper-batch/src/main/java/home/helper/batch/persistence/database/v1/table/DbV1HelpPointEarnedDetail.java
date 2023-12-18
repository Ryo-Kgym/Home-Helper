/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV1HelpPointEarnedDetail {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.help_point_earned_detail_id
     *
     * @mbg.generated
     */
    private String helpPointEarnedDetailId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.earned_achievement_id
     *
     * @mbg.generated
     */
    private String earnedAchievementId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.help_item_id
     *
     * @mbg.generated
     */
    private String helpItemId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.help_item_count
     *
     * @mbg.generated
     */
    private Integer helpItemCount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.help_item_total_point
     *
     * @mbg.generated
     */
    private Integer helpItemTotalPoint;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.help_point_earned_detail.group_id
     *
     * @mbg.generated
     */
    private String groupId;
}