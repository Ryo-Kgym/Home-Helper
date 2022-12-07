drop table if exists help_point_earned_achievement;
create table help_point_earned_achievement (
    id              varchar(32) not null comment 'ID' primary key,
    user_id         varchar(32) not null comment 'ユーザID',
    earned_datetime datetime    not null comment '獲得日時',
    earned_point    integer     not null comment '獲得ポイント'
) comment 'お手伝いポイント獲得実績';

drop table if exists help_point_earned_detail;
create table help_point_earned_detail (
    id                    varchar(32) not null comment 'ID' primary key,
    earned_achievement_id varchar(32) not null comment '獲得実績ID',
    help_item_id          varchar(32) not null comment 'お手伝い項目ID'
) comment 'お手伝いポイント獲得明細';

drop table if exists user_point;
create table user_point (
    user_id            varchar(32) not null comment 'ユーザID' primary key,
    point              int         not null comment 'ポイント'      default 0,
    last_help_datetime datetime    not null comment '最後のお手伝い日時' default '2020-01-01 00:00:00'
) comment 'ユーザポイント';

drop table if exists m_help_item;
create table m_help_item (
    id    varchar(32)   not null comment 'ID' primary key,
    name  varchar(32)   not null comment '項目名',
    point integer       not null comment 'お手伝いポイント',
    memo  varchar(1024) null comment 'メモ'
) comment 'お手伝い項目マスタ';

drop table if exists m_exchange_item;
create table m_exchange_item (
    id    varchar(32) not null comment 'ID' primary key,
    name  varchar(32) not null comment '品名',
    point integer     not null comment '交換ポイント'
) comment '交換品マスタ';

drop table if exists m_user;
create table m_user (
    id          varchar(32)             not null comment 'ID' primary key,
    name        varchar(32)             not null comment '氏名',
    name_suffix varchar(8) default 'さん' null comment '名前 接尾辞'
) comment 'ユーザマスタ';

-- Mock
drop table if exists id_holder;
create table id_holder (
    id_type    varchar(128) not null comment 'IDタイプ' primary key,
    current_id bigint       not null comment '現在ID'
) comment 'IDホルダ';