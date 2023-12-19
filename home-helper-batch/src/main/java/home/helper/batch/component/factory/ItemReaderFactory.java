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
    private SqlSessionFactory v1ProductionSqlSessionFactory;
    @Autowired
    @Qualifier("v1SqlSessionFactory")
    private SqlSessionFactory v1SqlSessionFactory;

    /**
     * MyBatisCursorItemReaderを生成します。V1 Production用です。
     *
     * @param mapperClass Mapperクラス
     * @param methodName  Mapperのメソッド名
     * @param <T>         Mapperの戻り値の型
     * @param <S>         Mapperの型
     * @return MyBatisCursorItemReader
     */
    public <T, S> ItemReader<T> itemReaderV1Production(Class<S> mapperClass, String methodName) {
        MyBatisCursorItemReader<T> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId(mapperClass.getName() + "." + methodName);
        reader.setSqlSessionFactory(v1ProductionSqlSessionFactory);
        return reader;
    }

    /**
     * MyBatisCursorItemReaderを生成します。V1 用です。
     *
     * @param mapperClass Mapperクラス
     * @param methodName  Mapperのメソッド名
     * @param <T>         Mapperの戻り値の型
     * @param <S>         Mapperの型
     * @return MyBatisCursorItemReader
     */
    public <T, S> ItemReader<T> itemReaderV1(Class<S> mapperClass, String methodName) {
        MyBatisCursorItemReader<T> reader = new MyBatisCursorItemReader<>();
        reader.setQueryId(mapperClass.getName() + "." + methodName);
        reader.setSqlSessionFactory(v1SqlSessionFactory);
        return reader;
    }
}
