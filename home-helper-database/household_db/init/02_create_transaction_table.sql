DROP TABLE IF EXISTS daily_detail CASCADE;
CREATE TABLE daily_detail (
    id          uuid        NOT NULL PRIMARY KEY,
    date        DATE        NOT NULL,
    category_id uuid        NOT NULL,
    account_id  uuid        NOT NULL,
    user_id     uuid        NOT NULL,
    amount      NUMERIC(10) NOT NULL,
    memo        VARCHAR(64) NULL,
    CONSTRAINT daily_detail_category FOREIGN KEY (category_id) REFERENCES "category" (category_id),
    CONSTRAINT daily_detail_account FOREIGN KEY (account_id) REFERENCES account (account_id),
    CONSTRAINT daily_detail_user FOREIGN KEY (user_id) REFERENCES "user" (user_id)
);

CREATE INDEX daily_detail_date_index ON daily_detail (date);

DROP TABLE IF EXISTS import_file_history CASCADE;
CREATE TABLE import_file_history (
    id              uuid         NOT NULL PRIMARY KEY,
    file_name       VARCHAR(128) NOT NULL,
    file_type       VARCHAR(16)  NOT NULL,
    import_datetime TIMESTAMP    NOT NULL,
    import_user_id  VARCHAR(8)   NOT NULL
);

DROP TABLE IF EXISTS credit_card_summary CASCADE;
CREATE TABLE credit_card_summary (
    id              uuid        NOT NULL PRIMARY KEY,
    credit_card     VARCHAR(16) NOT NULL,
    withdrawal_date DATE        NOT NULL,
    account_id      uuid        NOT NULL,
    total_amount    NUMERIC(10) NOT NULL,
    count           INTEGER     NOT NULL,
    CONSTRAINT credit_card_summary_import_file_history FOREIGN KEY (id) REFERENCES import_file_history (id),
    CONSTRAINT credit_card_summary_account FOREIGN KEY (account_id) REFERENCES account (account_id)
);

DROP TABLE IF EXISTS credit_card_detail CASCADE;
CREATE TABLE credit_card_detail (
    id          uuid        NOT NULL PRIMARY KEY,
    date        DATE        NOT NULL,
    category_id uuid        NOT NULL,
    amount      NUMERIC(10) NOT NULL,
    memo        VARCHAR(64) NULL,
    summary_id  uuid        NOT NULL,
    CONSTRAINT credit_card_detail_credit_card_summary FOREIGN KEY (summary_id) REFERENCES credit_card_summary (id),
    CONSTRAINT credit_card_detail_category FOREIGN KEY (category_id) REFERENCES "category" (category_id)
);

CREATE INDEX credit_card_detail_date_index ON credit_card_detail (date);
CREATE INDEX credit_card_detail_summary_id_index ON credit_card_detail (summary_id);
