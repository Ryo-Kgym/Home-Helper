-- NOT NULLだと値を入れられないので、NULLABLEでカラムを追加する。
ALTER TABLE daily_detail
    ADD COLUMN genre_id uuid NULL,
    ADD COLUMN iocome_type iocome_type NULL
;

ALTER TABLE credit_card_detail
    ADD COLUMN genre_id uuid NULL,
    ADD COLUMN iocome_type iocome_type NULL
;

-- データの更新
UPDATE daily_detail SET
    genre_id = genre.genre_id,
    iocome_type = genre.iocome_type
FROM genre JOIN category ON category.genre_id = genre.genre_id
WHERE daily_detail.category_id = category.category_id
;

UPDATE credit_card_detail SET
    genre_id = genre.genre_id,
    iocome_type = genre.iocome_type
FROM genre JOIN category ON category.genre_id = genre.genre_id
WHERE credit_card_detail.category_id = category.category_id
;

-- NOT NULL制約をつける
-- 外部キー制約をつける
ALTER TABLE daily_detail
    ALTER COLUMN genre_id SET NOT NULL,
    ADD CONSTRAINT daily_detail_genre_fk FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    ALTER COLUMN iocome_type SET NOT NULL
;

ALTER TABLE credit_card_detail
    ALTER COLUMN genre_id SET NOT NULL,
    ADD CONSTRAINT credit_card_detail_genre_fk FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    ALTER COLUMN iocome_type SET NOT NULL
;

-- インデックスをつける
CREATE INDEX credit_card_detail_iocome_type_index ON credit_card_detail (iocome_type);
CREATE INDEX daily_detail_iocome_type_idx ON daily_detail (iocome_type);
