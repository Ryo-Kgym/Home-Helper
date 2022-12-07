insert into m_user(id, name, name_suffix) values ('u1', 'ユーザ1', 'くん');
insert into m_user(id, name, name_suffix) values ('u2', 'ユーザ2', 'ちゃん');

INSERT INTO user_point (user_id, point, last_help_datetime) VALUES ('u1', 0, '2020-01-01 00:00:00');
INSERT INTO user_point (user_id, point, last_help_datetime) VALUES ('u2', 0, '2020-01-01 00:00:00');

INSERT INTO m_help_item (id, name, point, memo) VALUES ('h1', 'お手伝い項目1', 100, null);
INSERT INTO m_help_item (id, name, point, memo) VALUES ('h2', 'お手伝い項目2', 200, null);
INSERT INTO m_help_item (id, name, point, memo) VALUES ('h3', 'お手伝い項目3', 300, null);
INSERT INTO m_help_item (id, name, point, memo) VALUES ('h4', 'お手伝い項目4', 400, null);
INSERT INTO m_help_item (id, name, point, memo) VALUES ('h5', 'お手伝い項目5', 500, null);

INSERT INTO m_exchange_item (id, name, point) VALUES ('e1', '交換品1', 1000);
INSERT INTO m_exchange_item (id, name, point) VALUES ('e2', '交換品2', 2000);
INSERT INTO m_exchange_item (id, name, point) VALUES ('e3', '交換品3', 3000);
INSERT INTO m_exchange_item (id, name, point) VALUES ('e4', '交換品4', 4000);
INSERT INTO m_exchange_item (id, name, point) VALUES ('e5', '交換品5', 5000);

INSERT INTO id_holder (id_type, current_id) VALUES ('HELP_ITEM_ID', 0);
INSERT INTO id_holder (id_type, current_id) VALUES ('HELP_POINT_EARNED_ACHIEVEMENT_ID', 0);
INSERT INTO id_holder (id_type, current_id) VALUES ('HELP_POINT_EARNED_DETAIL_ID', 0);

