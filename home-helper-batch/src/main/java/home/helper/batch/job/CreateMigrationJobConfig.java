/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.job;

import lombok.RequiredArgsConstructor;
import org.mybatis.spring.batch.MyBatisCursorItemReader;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CreateMigrationJobConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ItemProcessor<User, User> processor;
    private final ItemWriter<User> writer;

    @Bean
    public Job userJob(Step userStep) {
        return jobBuilderFactory.get("userJob")
                .start(userStep)
                .build();
    }

    @Bean
    public Step userStep(ItemReader<User> reader) {
        return stepBuilderFactory.get("userStep")
                .<User, User>chunk(10)
                .reader(reader)
                .processor(processor)
                .writer(writer)
                .build();
    }

    @Bean
    public ItemReader<User> reader() {
        MyBatisCursorItemReader<User> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId("home.helper.batch.job.UserMapper.selectAll");
        reader.setSqlSessionFactory(sqlSessionFactory);
        return reader;
    }

    @Bean
    public ItemProcessor<User, User> processor() {
        return user ->
                User.builder()
                .name(user.getName())
                .age(user.getAge() + 1)
                .build();
    }

    @Bean
    public ItemWriter<User> writer() {
        return users -> users.forEach(System.out::println);
    }
}

