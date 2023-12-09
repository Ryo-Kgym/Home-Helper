/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class User {
    private String name;
    private int age;
}
