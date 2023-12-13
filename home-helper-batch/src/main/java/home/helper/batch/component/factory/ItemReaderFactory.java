/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.batch.MyBatisCursorItemReader;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ItemReaderFactory {
    @Qualifier("migrationSqlSessionFactory")
    private final SqlSessionFactory sqlSessionFactory;

    public <T, S> ItemReader<T> itemReader(Class<S> mapperClass, String methodName) {
        MyBatisCursorItemReader<T> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId(mapperClass.getName() + "." + methodName);
        reader.setSqlSessionFactory(sqlSessionFactory);
        return reader;
    }
}
