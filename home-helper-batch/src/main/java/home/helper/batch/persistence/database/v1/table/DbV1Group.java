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
public class DbV1Group {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group.group_id
     *
     * @mbg.generated
     */
    private String groupId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group.group_name
     *
     * @mbg.generated
     */
    private String groupName;
}