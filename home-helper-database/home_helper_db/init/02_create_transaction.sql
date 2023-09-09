drop table if exists home_helper.helper_kid_parent cascade;
create table home_helper.helper_kid_parent (
    helper_kid_parent_id uuid not null primary key,
    helper_kid_id        uuid not null,
    parent_user_id       uuid not null,
    constraint fk_helper_kid_parent_helper_kid_id foreign key (helper_kid_id) references home_helper.helper_kid (helper_kid_id),
    constraint fk_helper_kid_parent_parent_id foreign key (parent_user_id) references "user" (user_id)
);

drop table if exists home_helper.helper_kid_point cascade;
create table home_helper.helper_kid_point (
    helper_kid_id      uuid      not null primary key,
    point              int       not null default 0,
    last_help_datetime timestamp not null default current_timestamp,
    group_id           uuid      not null,
    constraint fk_helper_kid_point_helper_kid_id foreign key (helper_kid_id) references home_helper.helper_kid (helper_kid_id),
    constraint fk_helper_kid_point_group_id foreign key (group_id) references "group" (group_id)
);

create index helper_kid_point_group_id_idx on home_helper.helper_kid_point (group_id);

comment on table home_helper.helper_kid_point is 'お手伝いキッズポイント';
comment on column home_helper.helper_kid_point.helper_kid_id is 'お手伝いキッズID';
comment on column home_helper.helper_kid_point.point is 'ポイント';
comment on column home_helper.helper_kid_point.last_help_datetime is '最後のお手伝い日時';
comment on column home_helper.helper_kid_point.group_id is 'グループID';

drop table if exists home_helper.help_point_earned_achievement cascade;
create table home_helper.help_point_earned_achievement (
    help_point_earned_achievement_id uuid      not null primary key,
    helper_kid_id                    uuid      not null,
    earned_datetime                  timestamp not null,
    earned_point                     integer   not null,
    group_id                         uuid      not null,
    constraint fk_help_point_earned_achievement_helper_kid_id foreign key (helper_kid_id) references home_helper.helper_kid (helper_kid_id),
    constraint fk_help_point_earned_achievement_group_id foreign key (group_id) references "group" (group_id)
);
create index help_point_earned_achievement_group_id_idx on home_helper.help_point_earned_achievement (group_id);


comment on table home_helper.help_point_earned_achievement is 'お手伝いポイント獲得実績';
comment on column home_helper.help_point_earned_achievement.help_point_earned_achievement_id is 'ID';
comment on column home_helper.help_point_earned_achievement.helper_kid_id is 'お手伝いキッズID';
comment on column home_helper.help_point_earned_achievement.earned_datetime is '獲得日時';
comment on column home_helper.help_point_earned_achievement.earned_point is '獲得ポイント';
comment on column home_helper.help_point_earned_achievement.group_id is 'グループID';

drop table if exists home_helper.help_point_earned_detail cascade;
create table home_helper.help_point_earned_detail (
    help_point_earned_detail_id uuid    not null primary key,
    earned_achievement_id       uuid    not null,
    help_item_id                uuid    not null,
    help_item_count             integer not null,
    help_item_total_point       integer not null,
    group_id                    uuid    not null,
    constraint fk_help_point_earned_detail_earned_achievement_id foreign key (earned_achievement_id) references home_helper.help_point_earned_achievement (help_point_earned_achievement_id),
    constraint fk_help_point_earned_detail_help_item_id foreign key (help_item_id) references home_helper.help_item (help_item_id),
    constraint fk_help_point_earned_detail_group_id foreign key (group_id) references "group" (group_id)
);

create index help_point_earned_detail_group_id_idx on home_helper.help_point_earned_detail (group_id);

comment on table home_helper.help_point_earned_detail is 'お手伝いポイント獲得明細';
comment on column home_helper.help_point_earned_detail.help_point_earned_detail_id is 'ID';
comment on column home_helper.help_point_earned_detail.earned_achievement_id is '獲得実績ID';
comment on column home_helper.help_point_earned_detail.help_item_id is 'お手伝い項目ID';
comment on column home_helper.help_point_earned_detail.help_item_count is 'お手伝い項目件数';
comment on column home_helper.help_point_earned_detail.help_item_total_point is 'お手伝い項目合計ポイント';
comment on column home_helper.help_point_earned_detail.group_id is 'グループID';

drop table if exists home_helper.help_point_exchanged_achievement cascade;
create table home_helper.help_point_exchanged_achievement (
    help_point_exchanged_achievement_id uuid      not null primary key,
    helper_kid_id                       uuid      not null,
    exchange_item_id                    uuid      not null,
    exchange_count                      integer   not null,
    exchange_total_point                integer   not null,
    exchanged_datetime                  timestamp not null,
    group_id                            uuid      not null,
    constraint fk_help_point_exchanged_achievement_helper_kid_id foreign key (helper_kid_id) references home_helper.helper_kid (helper_kid_id),
    constraint fk_help_point_exchanged_achievement_exchange_item_id foreign key (exchange_item_id) references home_helper.exchange_item (exchange_item_id),
    constraint fk_help_point_exchanged_achievement_group_id foreign key (group_id) references "group" (group_id)
);

create index help_point_exchanged_achievement_group_id_idx on home_helper.help_point_exchanged_achievement (group_id);

comment on table home_helper.help_point_exchanged_achievement is 'お手伝いポイント交換実績';
comment on column home_helper.help_point_exchanged_achievement.help_point_exchanged_achievement_id is 'ID';
comment on column home_helper.help_point_exchanged_achievement.helper_kid_id is 'お手伝いキッズID';
comment on column home_helper.help_point_exchanged_achievement.exchange_item_id is '交換品ID';
comment on column home_helper.help_point_exchanged_achievement.exchange_count is '交換件数';
comment on column home_helper.help_point_exchanged_achievement.exchange_total_point is '交換合計ポイント';
comment on column home_helper.help_point_exchanged_achievement.exchanged_datetime is '交換日時';
comment on column home_helper.help_point_exchanged_achievement.group_id is 'グループID';
