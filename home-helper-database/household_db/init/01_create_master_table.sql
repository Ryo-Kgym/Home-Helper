DROP TYPE IF EXISTS iocome_type CASCADE;
CREATE TYPE iocome_type AS ENUM ( 'INCOME', 'OUTCOME' );

DROP TYPE IF EXISTS genre_type CASCADE;
CREATE TYPE genre_type AS ENUM ( 'FIXED', 'FLUCTUATION' );

DROP TABLE IF EXISTS "group" CASCADE;
CREATE TABLE "group" (
    group_id   uuid        NOT NULL PRIMARY KEY,
    group_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (
    user_id       uuid         NOT NULL PRIMARY KEY,
    user_name     VARCHAR(50)  NOT NULL,
    display_order INT          NOT NULL,
    email         VARCHAR(256) NOT NULL
        CONSTRAINT user_email_uk UNIQUE
);

DROP TABLE IF EXISTS group_role CASCADE;
CREATE TABLE group_role (
    group_role_id uuid        NOT NULL PRIMARY KEY,
    role          VARCHAR(32) NOT NULL
);

DROP TABLE IF EXISTS affiliation CASCADE;
CREATE TABLE affiliation (
    affiliation_id uuid NOT NULL PRIMARY KEY,
    user_id        uuid NOT NULL,
    group_id       uuid NOT NULL,
    group_role_id  uuid NOT NULL,
    CONSTRAINT affiliation_user_id_fk FOREIGN KEY (user_id) REFERENCES "user" (user_id),
    CONSTRAINT affiliation_group_id_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id),
    CONSTRAINT affiliation_group_role_id_fk FOREIGN KEY (group_role_id) REFERENCES group_role (group_role_id)
);

DROP TABLE IF EXISTS genre CASCADE;
CREATE TABLE genre (
    genre_id      uuid        NOT NULL PRIMARY KEY,
    genre_name    VARCHAR(50) NOT NULL,
    genre_type    genre_type  NOT NULL,
    iocome_type   iocome_type NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    group_id      uuid        NOT NULL,
    CONSTRAINT genre_group_id_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

DROP TABLE IF EXISTS "category" CASCADE;
CREATE TABLE "category" (
    category_id   uuid        NOT NULL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    genre_id      uuid        NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    group_id      uuid        NOT NULL,
    CONSTRAINT category_genre_id_fk FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    CONSTRAINT category_group_id_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

DROP TABLE IF EXISTS account CASCADE;
CREATE TABLE account (
    account_id    uuid        NOT NULL PRIMARY KEY,
    account_name  VARCHAR(50) NOT NULL,
    valid_flag    BOOLEAN DEFAULT TRUE,
    display_order INT         NOT NULL,
    group_id      uuid        NOT NULL,
    CONSTRAINT account_group_id_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);

DROP TABLE IF EXISTS summary_category_by_user CASCADE;
CREATE TABLE summary_category_by_user (
    id            uuid NOT NULL PRIMARY KEY,
    category_id   uuid NOT NULL,
    display_order INT  NOT NULL,
    user_id       uuid NOT NULL,
    CONSTRAINT summary_category_by_user_category_id_fk FOREIGN KEY (category_id) REFERENCES "category" (category_id),
    CONSTRAINT summary_category_by_user_user_id_fk FOREIGN KEY (user_id) REFERENCES "user" (user_id)
);
CREATE INDEX summary_category_by_user_user_id_idx ON summary_category_by_user (user_id);

DROP TABLE IF EXISTS summary_category_by_group CASCADE;
CREATE TABLE summary_category_by_group (
    id            uuid NOT NULL PRIMARY KEY,
    category_id   uuid NOT NULL,
    display_order INT  NOT NULL,
    group_id      uuid NOT NULL,
    CONSTRAINT summary_category_by_group_category_id_fk FOREIGN KEY (category_id) REFERENCES "category" (category_id),
    CONSTRAINT summary_category_by_group_group_id_fk FOREIGN KEY (group_id) REFERENCES "group" (group_id)
);
CREATE INDEX summary_category_by_group_group_id_idx ON summary_category_by_group (group_id);