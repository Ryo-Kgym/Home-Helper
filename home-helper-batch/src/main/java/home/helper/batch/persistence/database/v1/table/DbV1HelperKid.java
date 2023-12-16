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
public class DbV1HelperKid {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid.helper_kid_id
     *
     * @mbg.generated
     */
    private String helperKidId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid.name
     *
     * @mbg.generated
     */
    private String name;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid.name_suffix
     *
     * @mbg.generated
     */
    private String nameSuffix;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column helper_kids.helper_kid.group_id
     *
     * @mbg.generated
     */
    private String groupId;
}