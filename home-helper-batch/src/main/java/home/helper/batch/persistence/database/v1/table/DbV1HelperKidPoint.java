/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV1HelperKidPoint {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid_point.helper_kid_id
     *
     * @mbg.generated
     */
    private String helperKidId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid_point.point
     *
     * @mbg.generated
     */
    private Integer point;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid_point.last_help_datetime
     *
     * @mbg.generated
     */
    private LocalDateTime lastHelpDatetime;
}