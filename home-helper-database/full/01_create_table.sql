drop table if exists help_point_earned_achievement;
create table help_point_earned_achievement (
    id           serial primary key not null comment 'ID',
    user_id      int                not null comment 'ユーザID',
    earned_date  date               not null comment '獲得日付',
    earned_point int                not null comment '獲得ポイント'
) comment 'お手伝いポイント獲得実績';

drop table if exists help_point_earned_detail;
create table help_point_earned_detail (
    id             serial primary key not null comment 'ID',
    achievement_id int                not null comment '実績ID',
    item_id        int                not null comment '項目ID'
) comment 'お手伝いポイント獲得明細';

drop table if exists m_help_item;
create table m_help_item (
    id         serial primary key not null comment 'ID',
    item_name  varchar(32)        not null comment '項目名',
    help_point int                not null comment 'お手伝いポイント'
) comment 'お手伝い項目';

drop table if exists m_exchange_item;
create table m_exchange_item (
    id             serial primary key not null comment 'ID',
    item_name      varchar(32)        not null comment '品名',
    exchange_point int                not null comment '交換ポイント'
) comment '交換品';

drop table if exists m_user;
create table m_user (
    id   serial primary key not null comment 'ID',
    name varchar(32)        not null comment '氏名'
) comment 'ユーザ'