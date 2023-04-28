DROP TABLE IF EXISTS daily_detail CASCADE;
CREATE TABLE daily_detail (
    id          uuid        NOT NULL PRIMARY KEY,
    date        DATE        NOT NULL,
    category_id uuid        NOT NULL,
    account_id  uuid        NOT NULL,
    user_id     uuid        NOT NULL,
    amount      NUMERIC(10) NOT NULL,
    memo        VARCHAR(64) NULL,
    group_id    uuid        NOT NULL,
    CONSTRAINT daily_detail_category_fk FOREIGN KEY (category_id) REFERENCES "category" (category_id),
    CONSTRAINT daily_detail_account_fk FOREIGN KEY (account_id) REFERENCES account (account_id),
    CONSTRAINT daily_detail_user_fk FOREIGN KEY (user_id) REFERENCES "user" (user_id),
    CONSTRAINT daily_detail_group_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

CREATE INDEX daily_detail_date_idx ON daily_detail (date);
CREATE INDEX daily_detail_group_id_idx ON daily_detail (group_id);

DROP TABLE IF EXISTS import_file_history CASCADE;
CREATE TABLE import_file_history (
    id              uuid         NOT NULL PRIMARY KEY,
    file_name       VARCHAR(128) NOT NULL,
    file_type       VARCHAR(16)  NOT NULL,
    import_datetime TIMESTAMP    NOT NULL,
    import_user_id  uuid         NOT NULL,
    group_id        uuid         NOT NULL,
    CONSTRAINT import_file_history_import_user_fk FOREIGN KEY (import_user_id) REFERENCES "user" (user_id),
    CONSTRAINT import_file_history_group_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

CREATE INDEX import_file_history_group_id_idx ON import_file_history (group_id);

DROP TABLE IF EXISTS credit_card_summary CASCADE;
CREATE TABLE credit_card_summary (
    id              uuid        NOT NULL PRIMARY KEY,
    credit_card     VARCHAR(16) NOT NULL,
    withdrawal_date DATE        NOT NULL,
    account_id      uuid        NOT NULL,
    total_amount    NUMERIC(10) NOT NULL,
    count           INTEGER     NOT NULL,
    group_id        uuid        NOT NULL,
    CONSTRAINT credit_card_summary_import_file_history_fk FOREIGN KEY (id) REFERENCES import_file_history (id),
    CONSTRAINT credit_card_summary_account_fk FOREIGN KEY (account_id) REFERENCES account (account_id),
    CONSTRAINT credit_card_summary_group_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

CREATE INDEX credit_card_summary_group_id_idx ON credit_card_summary (group_id);

DROP TABLE IF EXISTS credit_card_detail CASCADE;
CREATE TABLE credit_card_detail (
    id          uuid        NOT NULL PRIMARY KEY,
    date        DATE        NOT NULL,
    category_id uuid        NOT NULL,
    amount      NUMERIC(10) NOT NULL,
    memo        VARCHAR(64) NULL,
    summary_id  uuid        NOT NULL,
    user_id     uuid        NOT NULL,
    CONSTRAINT credit_card_detail_credit_card_summary_fk FOREIGN KEY (summary_id) REFERENCES credit_card_summary (id),
    CONSTRAINT credit_card_detail_category_fk FOREIGN KEY (category_id) REFERENCES "category" (category_id),
    CONSTRAINT credit_card_detail_user_fk FOREIGN KEY (user_id) REFERENCES "user" (user_id)
);

CREATE INDEX credit_card_detail_date_index ON credit_card_detail (date);
CREATE INDEX credit_card_detail_summary_id_index ON credit_card_detail (summary_id);
CREATE INDEX credit_card_detail_user_id_index ON credit_card_detail (user_id);

