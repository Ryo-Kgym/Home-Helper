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
public class DbV1Affiliation {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.affiliation.affiliation_id
     *
     * @mbg.generated
     */
    private String affiliationId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.affiliation.user_id
     *
     * @mbg.generated
     */
    private String userId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.affiliation.group_id
     *
     * @mbg.generated
     */
    private String groupId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.affiliation.group_role_id
     *
     * @mbg.generated
     */
    private String groupRoleId;
}