package home.helper.batch.persistence.database.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbAccount {
    private String accountId;

    private String accountName;

    private Boolean validFlag;

    private Integer displayOrder;

    private String groupId;
}