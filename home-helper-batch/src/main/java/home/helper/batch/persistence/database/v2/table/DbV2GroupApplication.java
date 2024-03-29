/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV2GroupApplication {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group_application.id
     *
     * @mbg.generated
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group_application.group_id
     *
     * @mbg.generated
     */
    private String groupId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.group_application.application_id
     *
     * @mbg.generated
     */
    private String applicationId;
}