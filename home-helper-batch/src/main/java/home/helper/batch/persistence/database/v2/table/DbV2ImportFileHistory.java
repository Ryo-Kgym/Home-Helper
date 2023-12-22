/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbV2ImportFileHistory {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.id
     *
     * @mbg.generated
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.file_name
     *
     * @mbg.generated
     */
    private String fileName;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.file_type
     *
     * @mbg.generated
     */
    private String fileType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.import_datetime
     *
     * @mbg.generated
     */
    private LocalDateTime importDatetime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.import_user_id
     *
     * @mbg.generated
     */
    private String importUserId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column household.import_file_history.group_id
     *
     * @mbg.generated
     */
    private String groupId;
}