INSERT INTO "user" (user_id, user_name, display_order) VALUES ('USR00001', 'ユーザ1', 1);
INSERT INTO "user" (user_id, user_name, display_order) VALUES ('USR00002', 'ユーザ2', 2);

INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00001', '固定_収入1', 'FIXED', 'INCOME', true, 1);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00002', '固定_収入2', 'FIXED', 'INCOME', true, 2);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00003', '変動_収入1', 'FLUCTUATION', 'INCOME', true, 3);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00004', '変動_収入2', 'FLUCTUATION', 'INCOME', true, 4);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00005', '固定_支出1', 'FIXED', 'OUTCOME', true, 5);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00006', '固定_支出2', 'FIXED', 'OUTCOME', true, 6);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00007', '変動_支出1', 'FLUCTUATION', 'OUTCOME', true, 7);
INSERT INTO genre (genre_id, genre_name, genre_type, iocome_type, valid_flag, display_order) VALUES ('GNR00008', '変動_支出2', 'FLUCTUATION', 'OUTCOME', true, 8);

INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00001', '固定_収入カテゴリ1', 'GNR00001', true, 1);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00002', '固定_収入カテゴリ2', 'GNR00002', true, 2);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00003', '変動_収入カテゴリ1', 'GNR00003', true, 3);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00004', '変動_収入カテゴリ2', 'GNR00004', true, 4);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00005', '固定_支出カテゴリ1', 'GNR00005', true, 5);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00006', '固定_支出カテゴリ2', 'GNR00006', true, 6);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00007', '変動_支出カテゴリ1', 'GNR00007', true, 7);
INSERT INTO "category" (category_id, category_name, genre_id, valid_flag, display_order) VALUES ('CTG00008', '変動_支出カテゴリ2', 'GNR00008', true, 8);

INSERT INTO account (account_id, account_name, valid_flag, display_order, owner_user_id) VALUES ('ACT00001', '財布1                                               ', true, 1, 'USR00001');
INSERT INTO account (account_id, account_name, valid_flag, display_order, owner_user_id) VALUES ('ACT00002', '財布2                                               ', true, 2, 'USR00002');
INSERT INTO account (account_id, account_name, valid_flag, display_order, owner_user_id) VALUES ('ACT00003', 'A銀行                                               ', true, 3, 'USR00001');
INSERT INTO account (account_id, account_name, valid_flag, display_order, owner_user_id) VALUES ('ACT00004', 'B銀行                                               ', true, 4, 'USR00002');

INSERT INTO account_balance (account_id, balance) VALUES ('ACT00001', 1000);
INSERT INTO account_balance (account_id, balance) VALUES ('ACT00003', 20000);
INSERT INTO account_balance (account_id, balance) VALUES ('ACT00002', 1000);
INSERT INTO account_balance (account_id, balance) VALUES ('ACT00004', 20000);
