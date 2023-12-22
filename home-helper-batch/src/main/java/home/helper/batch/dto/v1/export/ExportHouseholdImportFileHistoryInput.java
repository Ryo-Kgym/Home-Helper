/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdImportFileHistoryInput {
    private String id;
    private String fileName;
    private String fileType;
    private LocalDateTime importDatetime;
    private String importUserId;
    private String groupId;
}