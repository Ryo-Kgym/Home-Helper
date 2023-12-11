/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import home.helper.batch.gateway.SaveGateway;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;

public class ItemWriterBuilder<O> implements ItemWriter<O> {
    private SaveGateway<O> saveGateway;

    @Override
    public void write(Chunk<? extends O> chunk) throws Exception {
        chunk.forEach(saveGateway::save);
    }

    public ItemWriterBuilder<O> writer(SaveGateway<O> repository) {
        this.saveGateway = repository;
        return this;
    }

    public ItemWriter<O> build() {
        return this;
    }
}
