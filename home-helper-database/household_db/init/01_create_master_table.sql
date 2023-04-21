DROP TYPE IF EXISTS iocome_type CASCADE;
CREATE TYPE iocome_type AS ENUM ( 'INCOME', 'OUTCOME' );

DROP TYPE IF EXISTS genre_type CASCADE;
CREATE TYPE genre_type AS ENUM ( 'FIXED', 'FLUCTUATION' );

DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
    user_id       uuid        NOT NULL PRIMARY KEY,
    user_name     VARCHAR(50) NOT NULL,
    display_order INT         NOT NULL
);

DROP TABLE IF EXISTS genre CASCADE;
CREATE TABLE genre (
    genre_id      uuid        NOT NULL PRIMARY KEY,
    genre_name    VARCHAR(50) NOT NULL,
    genre_type    genre_type  NOT NULL,
    iocome_type   iocome_type NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    owner_user_id uuid        NOT NULL,
    CONSTRAINT genre_owner_user_id_fk FOREIGN KEY (owner_user_id) REFERENCES "user" (user_id)
);


DROP TABLE IF EXISTS "category" CASCADE;
CREATE TABLE "category" (
    category_id   uuid        NOT NULL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    genre_id      uuid        NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    owner_user_id uuid        NOT NULL,
    CONSTRAINT category_genre_id_fk FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    CONSTRAINT category_owner_user_id_fk FOREIGN KEY (owner_user_id) REFERENCES "user" (user_id)
);

DROP TABLE IF EXISTS account CASCADE;
CREATE TABLE account (
    account_id    uuid        NOT NULL PRIMARY KEY,
    account_name  VARCHAR(50) NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    owner_user_id uuid        NOT NULL,
    CONSTRAINT account_owner_user_id FOREIGN KEY (owner_user_id) REFERENCES "user" (user_id)
);

DROP TABLE IF EXISTS summary_category CASCADE;
CREATE TABLE summary_category (
    id            uuid NOT NULL PRIMARY KEY,
    category_id   uuid NOT NULL,
    display_order INT  NOT NULL,
    owner_user_id uuid NOT NULL,
    CONSTRAINT summary_category_owner_user_id_fk FOREIGN KEY (owner_user_id) REFERENCES "user" (user_id),
    CONSTRAINT summary_category_category_id_fk FOREIGN KEY (category_id) REFERENCES "category" (category_id)
);
CREATE INDEX summary_category_user_id_idx ON summary_category (owner_user_id);