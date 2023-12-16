/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV1DailyDetail {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.id
     *
     * @mbg.generated
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.date
     *
     * @mbg.generated
     */
    private LocalDate date;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.category_id
     *
     * @mbg.generated
     */
    private String categoryId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.account_id
     *
     * @mbg.generated
     */
    private String accountId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.user_id
     *
     * @mbg.generated
     */
    private String userId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.amount
     *
     * @mbg.generated
     */
    private BigDecimal amount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.memo
     *
     * @mbg.generated
     */
    private String memo;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.group_id
     *
     * @mbg.generated
     */
    private String groupId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.genre_id
     *
     * @mbg.generated
     */
    private String genreId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column public.daily_detail.iocome_type
     *
     * @mbg.generated
     */
    private String iocomeType;
}