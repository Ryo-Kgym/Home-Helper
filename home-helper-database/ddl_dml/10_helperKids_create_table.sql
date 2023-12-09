drop schema if exists helper_kids cascade;
create schema helper_kids;

create table helper_kids.helper_kid (
    helper_kid_id uuid primary key not null, -- ID
    name character varying(32) not null, -- 氏名
    name_suffix character varying(8) not null default 'さん', -- 名前 接尾辞
    group_id uuid not null, -- グループID
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action
);
comment on table helper_kids.helper_kid is 'お手伝いキッズマスタ';
comment on column helper_kids.helper_kid.helper_kid_id is 'ID';
comment on column helper_kids.helper_kid.name is '氏名';
comment on column helper_kids.helper_kid.name_suffix is '名前 接尾辞';
comment on column helper_kids.helper_kid.group_id is 'グループID';

create table helper_kids.helper_kid_parent (
    helper_kid_parent_id uuid primary key not null,
    helper_kid_id uuid not null,
    parent_user_id uuid not null,
    foreign key (helper_kid_id) references helper_kids.helper_kid (helper_kid_id)
        match simple on update no action on delete no action,
    foreign key (parent_user_id) references public."user" (user_id)
        match simple on update no action on delete no action
);

create table helper_kids.exchange_item (
    exchange_item_id uuid primary key not null, -- ID
    name character varying(32) not null, -- 品名
    point integer not null, -- 交換ポイント
    memo character varying(1024), -- メモ
    group_id uuid not null, -- グループID
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action
);
comment on table helper_kids.exchange_item is '交換品マスタ';
comment on column helper_kids.exchange_item.exchange_item_id is 'ID';
comment on column helper_kids.exchange_item.name is '品名';
comment on column helper_kids.exchange_item.point is '交換ポイント';
comment on column helper_kids.exchange_item.memo is 'メモ';
comment on column helper_kids.exchange_item.group_id is 'グループID';

create table helper_kids.help_item (
    help_item_id uuid primary key not null, -- ID
    name character varying(32) not null, -- 項目名
    point integer not null, -- お手伝いポイント
    memo character varying(1024), -- メモ
    group_id uuid not null, -- グループID
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action
);
comment on table helper_kids.help_item is 'お手伝い項目マスタ';
comment on column helper_kids.help_item.help_item_id is 'ID';
comment on column helper_kids.help_item.name is '項目名';
comment on column helper_kids.help_item.point is 'お手伝いポイント';
comment on column helper_kids.help_item.memo is 'メモ';
comment on column helper_kids.help_item.group_id is 'グループID';

create table helper_kids.help_point_earned_achievement (
    help_point_earned_achievement_id uuid primary key not null, -- ID
    helper_kid_id uuid not null, -- お手伝いキッズID
    earned_datetime timestamp without time zone not null, -- 獲得日時
    earned_point integer not null, -- 獲得ポイント
    group_id uuid not null, -- グループID
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action,
    foreign key (helper_kid_id) references helper_kids.helper_kid (helper_kid_id)
        match simple on update no action on delete no action
);
create index help_point_earned_achievement_group_id_idx on helper_kids.help_point_earned_achievement using btree (group_id);
comment on table helper_kids.help_point_earned_achievement is 'お手伝いポイント獲得実績';
comment on column helper_kids.help_point_earned_achievement.help_point_earned_achievement_id is 'ID';
comment on column helper_kids.help_point_earned_achievement.helper_kid_id is 'お手伝いキッズID';
comment on column helper_kids.help_point_earned_achievement.earned_datetime is '獲得日時';
comment on column helper_kids.help_point_earned_achievement.earned_point is '獲得ポイント';
comment on column helper_kids.help_point_earned_achievement.group_id is 'グループID';

create table helper_kids.help_point_earned_detail (
    help_point_earned_detail_id uuid primary key not null, -- ID
    earned_achievement_id uuid not null, -- 獲得実績ID
    help_item_id uuid not null, -- お手伝い項目ID
    help_item_count integer not null, -- お手伝い項目件数
    help_item_total_point integer not null, -- お手伝い項目合計ポイント
    group_id uuid not null, -- グループID
    foreign key (earned_achievement_id) references helper_kids.help_point_earned_achievement (help_point_earned_achievement_id)
        match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action,
    foreign key (help_item_id) references helper_kids.help_item (help_item_id)
        match simple on update no action on delete no action
);
create index help_point_earned_detail_group_id_idx on helper_kids.help_point_earned_detail using btree (group_id);
comment on table helper_kids.help_point_earned_detail is 'お手伝いポイント獲得明細';
comment on column helper_kids.help_point_earned_detail.help_point_earned_detail_id is 'ID';
comment on column helper_kids.help_point_earned_detail.earned_achievement_id is '獲得実績ID';
comment on column helper_kids.help_point_earned_detail.help_item_id is 'お手伝い項目ID';
comment on column helper_kids.help_point_earned_detail.help_item_count is 'お手伝い項目件数';
comment on column helper_kids.help_point_earned_detail.help_item_total_point is 'お手伝い項目合計ポイント';
comment on column helper_kids.help_point_earned_detail.group_id is 'グループID';

create table helper_kids.help_point_exchanged_achievement (
    help_point_exchanged_achievement_id uuid primary key not null, -- ID
    helper_kid_id uuid not null, -- お手伝いキッズID
    exchange_item_id uuid not null, -- 交換品ID
    exchange_count integer not null, -- 交換件数
    exchange_total_point integer not null, -- 交換合計ポイント
    exchanged_datetime timestamp without time zone not null, -- 交換日時
    group_id uuid not null, -- グループID
    foreign key (exchange_item_id) references helper_kids.exchange_item (exchange_item_id)
        match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id)
        match simple on update no action on delete no action,
    foreign key (helper_kid_id) references helper_kids.helper_kid (helper_kid_id)
        match simple on update no action on delete no action
);
create index help_point_exchanged_achievement_group_id_idx on helper_kids.help_point_exchanged_achievement using btree (group_id);
comment on table helper_kids.help_point_exchanged_achievement is 'お手伝いポイント交換実績';
comment on column helper_kids.help_point_exchanged_achievement.help_point_exchanged_achievement_id is 'ID';
comment on column helper_kids.help_point_exchanged_achievement.helper_kid_id is 'お手伝いキッズID';
comment on column helper_kids.help_point_exchanged_achievement.exchange_item_id is '交換品ID';
comment on column helper_kids.help_point_exchanged_achievement.exchange_count is '交換件数';
comment on column helper_kids.help_point_exchanged_achievement.exchange_total_point is '交換合計ポイント';
comment on column helper_kids.help_point_exchanged_achievement.exchanged_datetime is '交換日時';
comment on column helper_kids.help_point_exchanged_achievement.group_id is 'グループID';

create table helper_kids.helper_kid_point (
    helper_kid_id uuid primary key not null, -- お手伝いキッズID
    point integer not null default 0, -- ポイント
    last_help_datetime timestamp without time zone not null default CURRENT_TIMESTAMP, -- 最後のお手伝い日時
    foreign key (helper_kid_id) references helper_kids.helper_kid (helper_kid_id)
        match simple on update no action on delete no action
);
comment on table helper_kids.helper_kid_point is 'お手伝いキッズポイント';
comment on column helper_kids.helper_kid_point.helper_kid_id is 'お手伝いキッズID';
comment on column helper_kids.helper_kid_point.point is 'ポイント';
comment on column helper_kids.helper_kid_point.last_help_datetime is '最後のお手伝い日時';

