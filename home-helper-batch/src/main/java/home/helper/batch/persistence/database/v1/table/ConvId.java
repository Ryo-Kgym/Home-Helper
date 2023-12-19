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
public class ConvId {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.conv_id.id
     *
     * @mbg.generated
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.conv_id.current_id
     *
     * @mbg.generated
     */
    private String currentId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.conv_id.table
     *
     * @mbg.generated
     */
    private String table;
}