drop schema if exists tmp_helper_kids cascade;
create schema tmp_helper_kids;

create table tmp_helper_kids.helper_kid (
    helper_kid_id uuid primary key      not null,                -- ID
    name          character varying(32) not null,                -- 氏名
    name_suffix   character varying(8)  not null default 'さん', -- 名前 接尾辞
    group_id      uuid                  not null                 -- グループID
);

create table tmp_helper_kids.helper_kid_parent (
    helper_kid_parent_id uuid primary key not null,
    helper_kid_id        uuid             not null,
    parent_user_id       uuid             not null
);

create table tmp_helper_kids.exchange_item (
    exchange_item_id uuid primary key      not null, -- ID
    name             character varying(32) not null, -- 品名
    point            integer               not null, -- 交換ポイント
    memo             character varying(1024),        -- メモ
    group_id         uuid                  not null  -- グループID
);

create table tmp_helper_kids.help_item (
    help_item_id uuid primary key      not null, -- ID
    name         character varying(32) not null, -- 項目名
    point        integer               not null, -- お手伝いポイント
    memo         character varying(1024),        -- メモ
    group_id     uuid                  not null  -- グループID
);

create table tmp_helper_kids.help_point_earned_achievement (
    help_point_earned_achievement_id uuid primary key            not null, -- ID
    helper_kid_id                    uuid                        not null, -- お手伝いキッズID
    earned_datetime                  timestamp without time zone not null, -- 獲得日時
    earned_point                     integer                     not null, -- 獲得ポイント
    group_id                         uuid                        not null  -- グループID
);
create index help_point_earned_achievement_group_id_idx on tmp_helper_kids.help_point_earned_achievement using btree (group_id);

create table tmp_helper_kids.help_point_earned_detail (
    help_point_earned_detail_id uuid primary key not null, -- ID
    earned_achievement_id       uuid             not null, -- 獲得実績ID
    help_item_id                uuid             not null, -- お手伝い項目ID
    help_item_count             integer          not null, -- お手伝い項目件数
    help_item_total_point       integer          not null, -- お手伝い項目合計ポイント
    group_id                    uuid             not null  -- グループID
);
create index help_point_earned_detail_group_id_idx on tmp_helper_kids.help_point_earned_detail using btree (group_id);

create table tmp_helper_kids.help_point_exchanged_achievement (
    help_point_exchanged_achievement_id uuid primary key            not null, -- ID
    helper_kid_id                       uuid                        not null, -- お手伝いキッズID
    exchange_item_id                    uuid                        not null, -- 交換品ID
    exchange_count                      integer                     not null, -- 交換件数
    exchange_total_point                integer                     not null, -- 交換合計ポイント
    exchanged_datetime                  timestamp without time zone not null, -- 交換日時
    group_id                            uuid                        not null  -- グループID
);
create index help_point_exchanged_achievement_group_id_idx on tmp_helper_kids.help_point_exchanged_achievement using btree (group_id);

create table tmp_helper_kids.helper_kid_point (
    helper_kid_id      uuid primary key            not null,                          -- お手伝いキッズID
    point              integer                     not null default 0,                -- ポイント
    last_help_datetime timestamp without time zone not null default CURRENT_TIMESTAMP -- 最後のお手伝い日時
);
