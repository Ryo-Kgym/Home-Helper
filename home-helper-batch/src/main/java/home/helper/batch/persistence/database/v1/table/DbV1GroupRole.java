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
public class DbV1GroupRole {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group_role.group_role_id
     *
     * @mbg.generated
     */
    private String groupRoleId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group_role.role
     *
     * @mbg.generated
     */
    private String role;
}