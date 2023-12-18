/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.batch.MyBatisCursorItemReader;
import org.springframework.batch.item.ItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * ItemReaderを生成するクラスです。
 */
@Component
public class ItemReaderFactory {
    @Autowired
    @Qualifier("v1ProductionSqlSessionFactory")
    private SqlSessionFactory sqlSessionFactory;

    /**
     * MyBatisCursorItemReaderを生成します。
     *
     * @param mapperClass Mapperクラス
     * @param methodName  Mapperのメソッド名
     * @param <T>         Mapperの戻り値の型
     * @param <S>         Mapperの型
     * @return MyBatisCursorItemReader
     */
    public <T, S> ItemReader<T> itemReader(Class<S> mapperClass, String methodName) {
        MyBatisCursorItemReader<T> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId(mapperClass.getName() + "." + methodName);
        reader.setSqlSessionFactory(sqlSessionFactory);
        return reader;
    }
}
