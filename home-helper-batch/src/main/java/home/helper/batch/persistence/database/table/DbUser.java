package home.helper.batch.persistence.database.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class DbUser {
    private String userId;

    private String userName;

    private Integer displayOrder;

    private String email;
}