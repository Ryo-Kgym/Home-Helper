/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("home.helper.batch.persistence")
public class HomeHelperBatchApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeHelperBatchApplication.class, args);
	}

}
