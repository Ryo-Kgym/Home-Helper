/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.component.factory;

import home.helper.batch.gateway.SaveRepository;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;

public class ItemWriterBuilder<O> implements ItemWriter<O> {
    private SaveRepository<O> saveRepository;

    @Override
    public void write(Chunk<? extends O> chunk) throws Exception {
        chunk.forEach(saveRepository::save);
    }

    public ItemWriterBuilder<O> writer(SaveRepository<O> repository) {
        this.saveRepository = repository;
        return this;
    }

    public ItemWriter<O> build() {
        return this;
    }
}
