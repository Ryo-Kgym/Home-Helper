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
public class DbV1Category {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.category_id
     *
     * @mbg.generated
     */
    private String categoryId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.category_name
     *
     * @mbg.generated
     */
    private String categoryName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.genre_id
     *
     * @mbg.generated
     */
    private String genreId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.valid_flag
     *
     * @mbg.generated
     */
    private Boolean validFlag;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.display_order
     *
     * @mbg.generated
     */
    private Integer displayOrder;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.category.group_id
     *
     * @mbg.generated
     */
    private String groupId;
}