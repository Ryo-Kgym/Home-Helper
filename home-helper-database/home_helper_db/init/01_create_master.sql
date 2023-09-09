drop table if exists home_helper.help_item cascade;
create table home_helper.help_item (
    help_item_id uuid          not null primary key,
    name         varchar(32)   not null,
    point        integer       not null,
    memo         varchar(1024) null,
    group_id     uuid          not null,
    constraint fk_help_item_group_id foreign key (group_id) references "group" (group_id)
);

comment on table home_helper.help_item is 'お手伝い項目マスタ';
comment on column home_helper.help_item.help_item_id is 'ID';
comment on column home_helper.help_item.name is '項目名';
comment on column home_helper.help_item.point is 'お手伝いポイント';
comment on column home_helper.help_item.memo is 'メモ';
comment on column home_helper.help_item.group_id is 'グループID';

drop table if exists home_helper.exchange_item cascade;
create table home_helper.exchange_item (
    exchange_item_id uuid          not null primary key,
    name             varchar(32)   not null,
    point            integer       not null,
    memo             varchar(1024) null,
    group_id         uuid          not null,
    constraint fk_exchange_item_group_id foreign key (group_id) references "group" (group_id)
);

comment on table home_helper.exchange_item is '交換品マスタ';
comment on column home_helper.exchange_item.exchange_item_id is 'ID';
comment on column home_helper.exchange_item.name is '品名';
comment on column home_helper.exchange_item.point is '交換ポイント';
comment on column home_helper.exchange_item.memo is 'メモ';
comment on column home_helper.exchange_item.group_id is 'グループID';

drop table if exists home_helper.helper_kid cascade;
create table home_helper.helper_kid (
    helper_kid_id uuid                      not null primary key,
    name          varchar(32)               not null,
    name_suffix   varchar(8) default 'さん' not null,
    group_id      uuid                      not null,
    constraint fk_helper_kid_group_id foreign key (group_id) references "group" (group_id)
);

comment on table home_helper.helper_kid is 'お手伝いキッズマスタ';
comment on column home_helper.helper_kid.helper_kid_id is 'ID';
comment on column home_helper.helper_kid.name is '氏名';
comment on column home_helper.helper_kid.name_suffix is '名前 接尾辞';
comment on column home_helper.helper_kid.group_id is 'グループID';
