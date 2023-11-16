import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  genre_type: any;
  iocome_type: any;
  numeric: any;
  timestamp: any;
  uuid: any;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: "Account";
  accountId: Scalars["uuid"];
  accountName: Scalars["String"];
  /** An array relationship */
  credit_card_summaries: Array<CreditCardSummary>;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "account" */
export type AccountCredit_Card_SummariesArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "account" */
export type AccountDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
  avg?: InputMaybe<AccountAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccountMaxOrderBy>;
  min?: InputMaybe<AccountMinOrderBy>;
  stddev?: InputMaybe<AccountStddevOrderBy>;
  stddevPop?: InputMaybe<AccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AccountStddevSampOrderBy>;
  sum?: InputMaybe<AccountSumOrderBy>;
  varPop?: InputMaybe<AccountVarPopOrderBy>;
  varSamp?: InputMaybe<AccountVarSampOrderBy>;
  variance?: InputMaybe<AccountVarianceOrderBy>;
};

/** order by avg() on columns of table "account" */
export type AccountAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
  _and?: InputMaybe<Array<AccountBoolExp>>;
  _not?: InputMaybe<AccountBoolExp>;
  _or?: InputMaybe<Array<AccountBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "account" */
export enum AccountConstraint {
  /** unique or primary key constraint on columns "account_id" */
  AccountPkey = "account_pkey",
}

/** input type for inserting data into table "account" */
export type AccountInsertInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "account" */
export type AccountMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "account" */
export type AccountMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
  __typename?: "AccountMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type AccountObjRelInsertInput = {
  data: AccountInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** on_conflict condition type for table "account" */
export type AccountOnConflict = {
  constraint: AccountConstraint;
  updateColumns?: Array<AccountUpdateColumn>;
  where?: InputMaybe<AccountBoolExp>;
};

/** Ordering options when selecting data from "account". */
export type AccountOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "account" */
export enum AccountSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

/** order by stddev() on columns of table "account" */
export type AccountStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "account" */
export type AccountStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "account" */
export type AccountStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "account" */
export type AccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "account" */
export type AccountSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "account" (current role has no relevant permissions) */
export enum AccountUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "account" */
export type AccountVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "account" */
export type AccountVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "account" */
export type AccountVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "affiliation" */
export type Affiliation = {
  __typename?: "Affiliation";
  affiliationId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  groupRoleId: Scalars["uuid"];
  /** An object relationship */
  group_role: GroupRole;
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** order by aggregate values of table "affiliation" */
export type AffiliationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AffiliationMaxOrderBy>;
  min?: InputMaybe<AffiliationMinOrderBy>;
};

/** Boolean expression to filter rows from the table "affiliation". All fields are combined with a logical 'AND'. */
export type AffiliationBoolExp = {
  _and?: InputMaybe<Array<AffiliationBoolExp>>;
  _not?: InputMaybe<AffiliationBoolExp>;
  _or?: InputMaybe<Array<AffiliationBoolExp>>;
  affiliationId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  groupRoleId?: InputMaybe<UuidComparisonExp>;
  group_role?: InputMaybe<GroupRoleBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** order by max() on columns of table "affiliation" */
export type AffiliationMaxOrderBy = {
  affiliationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "affiliation" */
export type AffiliationMinOrderBy = {
  affiliationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "affiliation". */
export type AffiliationOrderBy = {
  affiliationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  group_role?: InputMaybe<GroupRoleOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select columns of table "affiliation" */
export enum AffiliationSelectColumn {
  /** column name */
  AffiliationId = "affiliationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  UserId = "userId",
}

/** Streaming cursor of the table "affiliation" */
export type AffiliationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AffiliationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AffiliationStreamCursorValueInput = {
  affiliationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** columns and relationships of "application" */
export type Application = {
  __typename?: "Application";
  application: Scalars["String"];
  applicationId: Scalars["uuid"];
  /** An array relationship */
  group_applications: Array<GroupApplication>;
  topUrl: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "application" */
export type ApplicationGroup_ApplicationsArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** Boolean expression to filter rows from the table "application". All fields are combined with a logical 'AND'. */
export type ApplicationBoolExp = {
  _and?: InputMaybe<Array<ApplicationBoolExp>>;
  _not?: InputMaybe<ApplicationBoolExp>;
  _or?: InputMaybe<Array<ApplicationBoolExp>>;
  application?: InputMaybe<StringComparisonExp>;
  applicationId?: InputMaybe<UuidComparisonExp>;
  group_applications?: InputMaybe<GroupApplicationBoolExp>;
  topUrl?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "application". */
export type ApplicationOrderBy = {
  application?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  topUrl?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "application" */
export enum ApplicationSelectColumn {
  /** column name */
  Application = "application",
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  TopUrl = "topUrl",
  /** column name */
  ValidFlag = "validFlag",
}

/** Streaming cursor of the table "application" */
export type ApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationStreamCursorValueInput = {
  application?: InputMaybe<Scalars["String"]>;
  applicationId?: InputMaybe<Scalars["uuid"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: "Category";
  categoryId: Scalars["uuid"];
  categoryName: Scalars["String"];
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  genre: Genre;
  genreId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  /** An array relationship */
  summary_category_by_groups: Array<SummaryCategoryByGroup>;
  /** An array relationship */
  transfer_income_category: Array<TransferCategory>;
  /** An array relationship */
  transfer_outcome_category: Array<TransferCategory>;
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "category" */
export type CategoryCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategorySummary_Category_By_GroupsArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryTransfer_Income_CategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryTransfer_Outcome_CategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** order by aggregate values of table "category" */
export type CategoryAggregateOrderBy = {
  avg?: InputMaybe<CategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CategoryMaxOrderBy>;
  min?: InputMaybe<CategoryMinOrderBy>;
  stddev?: InputMaybe<CategoryStddevOrderBy>;
  stddevPop?: InputMaybe<CategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CategoryStddevSampOrderBy>;
  sum?: InputMaybe<CategorySumOrderBy>;
  varPop?: InputMaybe<CategoryVarPopOrderBy>;
  varSamp?: InputMaybe<CategoryVarSampOrderBy>;
  variance?: InputMaybe<CategoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "category" */
export type CategoryArrRelInsertInput = {
  data: Array<CategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** order by avg() on columns of table "category" */
export type CategoryAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type CategoryBoolExp = {
  _and?: InputMaybe<Array<CategoryBoolExp>>;
  _not?: InputMaybe<CategoryBoolExp>;
  _or?: InputMaybe<Array<CategoryBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genre?: InputMaybe<GenreBoolExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  transfer_income_category?: InputMaybe<TransferCategoryBoolExp>;
  transfer_outcome_category?: InputMaybe<TransferCategoryBoolExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "category" */
export enum CategoryConstraint {
  /** unique or primary key constraint on columns "category_id" */
  CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "category" */
export type CategoryIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "category" */
export type CategoryInsertInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genre?: InputMaybe<GenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupArrRelInsertInput>;
  transfer_income_category?: InputMaybe<TransferCategoryArrRelInsertInput>;
  transfer_outcome_category?: InputMaybe<TransferCategoryArrRelInsertInput>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "category" */
export type CategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "category" */
export type CategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "category" */
export type CategoryMutationResponse = {
  __typename?: "CategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type CategoryObjRelInsertInput = {
  data: CategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** on_conflict condition type for table "category" */
export type CategoryOnConflict = {
  constraint: CategoryConstraint;
  updateColumns?: Array<CategoryUpdateColumn>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** Ordering options when selecting data from "category". */
export type CategoryOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genre?: InputMaybe<GenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateOrderBy>;
  transfer_income_categoryAggregate?: InputMaybe<TransferCategoryAggregateOrderBy>;
  transfer_outcome_categoryAggregate?: InputMaybe<TransferCategoryAggregateOrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: category */
export type CategoryPkColumnsInput = {
  categoryId: Scalars["uuid"];
};

/** select columns of table "category" */
export enum CategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "category" */
export type CategorySetInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "category" */
export type CategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "category" */
export type CategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "category" */
export type CategoryStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "category" */
export type CategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "category" */
export type CategorySumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "category" */
export enum CategoryUpdateColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

export type CategoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CategoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategorySetInput>;
  /** filter the rows which have to be updated */
  where: CategoryBoolExp;
};

/** order by varPop() on columns of table "category" */
export type CategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "category" */
export type CategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "category" */
export type CategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_detail" */
export type CreditCardDetail = {
  __typename?: "CreditCardDetail";
  amount: Scalars["numeric"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  credit_card_summary: CreditCardSummary;
  date: Scalars["date"];
  /** An object relationship */
  genre: Genre;
  genreId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  memo?: Maybe<Scalars["String"]>;
  summaryId: Scalars["uuid"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** order by aggregate values of table "credit_card_detail" */
export type CreditCardDetailAggregateOrderBy = {
  avg?: InputMaybe<CreditCardDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CreditCardDetailMaxOrderBy>;
  min?: InputMaybe<CreditCardDetailMinOrderBy>;
  stddev?: InputMaybe<CreditCardDetailStddevOrderBy>;
  stddevPop?: InputMaybe<CreditCardDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CreditCardDetailStddevSampOrderBy>;
  sum?: InputMaybe<CreditCardDetailSumOrderBy>;
  varPop?: InputMaybe<CreditCardDetailVarPopOrderBy>;
  varSamp?: InputMaybe<CreditCardDetailVarSampOrderBy>;
  variance?: InputMaybe<CreditCardDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "credit_card_detail" */
export type CreditCardDetailArrRelInsertInput = {
  data: Array<CreditCardDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** order by avg() on columns of table "credit_card_detail" */
export type CreditCardDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "credit_card_detail". All fields are combined with a logical 'AND'. */
export type CreditCardDetailBoolExp = {
  _and?: InputMaybe<Array<CreditCardDetailBoolExp>>;
  _not?: InputMaybe<CreditCardDetailBoolExp>;
  _or?: InputMaybe<Array<CreditCardDetailBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  credit_card_summary?: InputMaybe<CreditCardSummaryBoolExp>;
  date?: InputMaybe<DateComparisonExp>;
  genre?: InputMaybe<GenreBoolExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  summaryId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "credit_card_detail" */
export enum CreditCardDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardDetailPkey = "credit_card_detail_pkey",
}

/** input type for incrementing numeric columns in table "credit_card_detail" */
export type CreditCardDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "credit_card_detail" */
export type CreditCardDetailInsertInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  credit_card_summary?: InputMaybe<CreditCardSummaryObjRelInsertInput>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<GenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "credit_card_detail" */
export type CreditCardDetailMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "credit_card_detail" */
export type CreditCardDetailMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "credit_card_detail" */
export type CreditCardDetailMutationResponse = {
  __typename?: "CreditCardDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<CreditCardDetail>;
};

/** on_conflict condition type for table "credit_card_detail" */
export type CreditCardDetailOnConflict = {
  constraint: CreditCardDetailConstraint;
  updateColumns?: Array<CreditCardDetailUpdateColumn>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** Ordering options when selecting data from "credit_card_detail". */
export type CreditCardDetailOrderBy = {
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  credit_card_summary?: InputMaybe<CreditCardSummaryOrderBy>;
  date?: InputMaybe<OrderBy>;
  genre?: InputMaybe<GenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: credit_card_detail */
export type CreditCardDetailPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "credit_card_detail" */
export enum CreditCardDetailSelectColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "credit_card_detail" */
export type CreditCardDetailSetInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by stddev() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "credit_card_detail" */
export type CreditCardDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardDetailStreamCursorValueInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by sum() on columns of table "credit_card_detail" */
export type CreditCardDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "credit_card_detail" */
export enum CreditCardDetailUpdateColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

export type CreditCardDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CreditCardDetailSetInput>;
  /** filter the rows which have to be updated */
  where: CreditCardDetailBoolExp;
};

/** order by varPop() on columns of table "credit_card_detail" */
export type CreditCardDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "credit_card_detail" */
export type CreditCardDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "credit_card_detail" */
export type CreditCardDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_summary" */
export type CreditCardSummary = {
  __typename?: "CreditCardSummary";
  /** An object relationship */
  account: Account;
  accountId: Scalars["uuid"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  /** An object relationship */
  import_file_history: ImportFileHistory;
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
};

/** columns and relationships of "credit_card_summary" */
export type CreditCardSummaryCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** order by aggregate values of table "credit_card_summary" */
export type CreditCardSummaryAggregateOrderBy = {
  avg?: InputMaybe<CreditCardSummaryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CreditCardSummaryMaxOrderBy>;
  min?: InputMaybe<CreditCardSummaryMinOrderBy>;
  stddev?: InputMaybe<CreditCardSummaryStddevOrderBy>;
  stddevPop?: InputMaybe<CreditCardSummaryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CreditCardSummaryStddevSampOrderBy>;
  sum?: InputMaybe<CreditCardSummarySumOrderBy>;
  varPop?: InputMaybe<CreditCardSummaryVarPopOrderBy>;
  varSamp?: InputMaybe<CreditCardSummaryVarSampOrderBy>;
  variance?: InputMaybe<CreditCardSummaryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "credit_card_summary" */
export type CreditCardSummaryArrRelInsertInput = {
  data: Array<CreditCardSummaryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** order by avg() on columns of table "credit_card_summary" */
export type CreditCardSummaryAvgOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "credit_card_summary". All fields are combined with a logical 'AND'. */
export type CreditCardSummaryBoolExp = {
  _and?: InputMaybe<Array<CreditCardSummaryBoolExp>>;
  _not?: InputMaybe<CreditCardSummaryBoolExp>;
  _or?: InputMaybe<Array<CreditCardSummaryBoolExp>>;
  account?: InputMaybe<AccountBoolExp>;
  accountId?: InputMaybe<UuidComparisonExp>;
  count?: InputMaybe<IntComparisonExp>;
  creditCard?: InputMaybe<StringComparisonExp>;
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  import_file_history?: InputMaybe<ImportFileHistoryBoolExp>;
  totalAmount?: InputMaybe<NumericComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "credit_card_summary" */
export enum CreditCardSummaryConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardSummaryPkey = "credit_card_summary_pkey",
}

/** input type for inserting data into table "credit_card_summary" */
export type CreditCardSummaryInsertInput = {
  account?: InputMaybe<AccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["uuid"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  import_file_history?: InputMaybe<ImportFileHistoryObjRelInsertInput>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by max() on columns of table "credit_card_summary" */
export type CreditCardSummaryMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "credit_card_summary" */
export type CreditCardSummaryMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "credit_card_summary" */
export type CreditCardSummaryMutationResponse = {
  __typename?: "CreditCardSummaryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<CreditCardSummary>;
};

/** input type for inserting object relation for remote table "credit_card_summary" */
export type CreditCardSummaryObjRelInsertInput = {
  data: CreditCardSummaryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** on_conflict condition type for table "credit_card_summary" */
export type CreditCardSummaryOnConflict = {
  constraint: CreditCardSummaryConstraint;
  updateColumns?: Array<CreditCardSummaryUpdateColumn>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** Ordering options when selecting data from "credit_card_summary". */
export type CreditCardSummaryOrderBy = {
  account?: InputMaybe<AccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  import_file_history?: InputMaybe<ImportFileHistoryOrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** select columns of table "credit_card_summary" */
export enum CreditCardSummarySelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Count = "count",
  /** column name */
  CreditCard = "creditCard",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  TotalAmount = "totalAmount",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

/** order by stddev() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "credit_card_summary" */
export type CreditCardSummaryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardSummaryStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by sum() on columns of table "credit_card_summary" */
export type CreditCardSummarySumOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountView = {
  __typename?: "CreditCardSummaryTotalByAccountView";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Boolean expression to filter rows from the table "credit_card_summary_total_by_account_view". All fields are combined with a logical 'AND'. */
export type CreditCardSummaryTotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewBoolExp>>;
  _not?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "credit_card_summary_total_by_account_view". */
export type CreditCardSummaryTotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "credit_card_summary_total_by_account_view" */
export enum CreditCardSummaryTotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardSummaryTotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardSummaryTotalByAccountViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** placeholder for update columns of table "credit_card_summary" (current role has no relevant permissions) */
export enum CreditCardSummaryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "daily_detail" */
export type DailyDetail = {
  __typename?: "DailyDetail";
  /** An object relationship */
  account: Account;
  accountId: Scalars["uuid"];
  amount: Scalars["numeric"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  date: Scalars["date"];
  /** An object relationship */
  genre: Genre;
  genreId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  memo?: Maybe<Scalars["String"]>;
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** order by aggregate values of table "daily_detail" */
export type DailyDetailAggregateOrderBy = {
  avg?: InputMaybe<DailyDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DailyDetailMaxOrderBy>;
  min?: InputMaybe<DailyDetailMinOrderBy>;
  stddev?: InputMaybe<DailyDetailStddevOrderBy>;
  stddevPop?: InputMaybe<DailyDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<DailyDetailStddevSampOrderBy>;
  sum?: InputMaybe<DailyDetailSumOrderBy>;
  varPop?: InputMaybe<DailyDetailVarPopOrderBy>;
  varSamp?: InputMaybe<DailyDetailVarSampOrderBy>;
  variance?: InputMaybe<DailyDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "daily_detail" */
export type DailyDetailArrRelInsertInput = {
  data: Array<DailyDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** order by avg() on columns of table "daily_detail" */
export type DailyDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "daily_detail". All fields are combined with a logical 'AND'. */
export type DailyDetailBoolExp = {
  _and?: InputMaybe<Array<DailyDetailBoolExp>>;
  _not?: InputMaybe<DailyDetailBoolExp>;
  _or?: InputMaybe<Array<DailyDetailBoolExp>>;
  account?: InputMaybe<AccountBoolExp>;
  accountId?: InputMaybe<UuidComparisonExp>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genre?: InputMaybe<GenreBoolExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "daily_detail" */
export enum DailyDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  DailyDetailPkey = "daily_detail_pkey",
}

/** input type for incrementing numeric columns in table "daily_detail" */
export type DailyDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "daily_detail" */
export type DailyDetailInsertInput = {
  account?: InputMaybe<AccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<GenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "daily_detail" */
export type DailyDetailMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "daily_detail" */
export type DailyDetailMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "daily_detail" */
export type DailyDetailMutationResponse = {
  __typename?: "DailyDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<DailyDetail>;
};

/** on_conflict condition type for table "daily_detail" */
export type DailyDetailOnConflict = {
  constraint: DailyDetailConstraint;
  updateColumns?: Array<DailyDetailUpdateColumn>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** Ordering options when selecting data from "daily_detail". */
export type DailyDetailOrderBy = {
  account?: InputMaybe<AccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genre?: InputMaybe<GenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: daily_detail */
export type DailyDetailPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "daily_detail" */
export enum DailyDetailSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "daily_detail" */
export type DailyDetailSetInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by stddev() on columns of table "daily_detail" */
export type DailyDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "daily_detail" */
export type DailyDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "daily_detail" */
export type DailyDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "daily_detail" */
export type DailyDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DailyDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DailyDetailStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** order by sum() on columns of table "daily_detail" */
export type DailyDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "daily_detail" */
export enum DailyDetailUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

export type DailyDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DailyDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DailyDetailSetInput>;
  /** filter the rows which have to be updated */
  where: DailyDetailBoolExp;
};

/** order by varPop() on columns of table "daily_detail" */
export type DailyDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "daily_detail" */
export type DailyDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "daily_detail" */
export type DailyDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "daily_total_view" */
export type DailyTotalView = {
  __typename?: "DailyTotalView";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Boolean expression to filter rows from the table "daily_total_view". All fields are combined with a logical 'AND'. */
export type DailyTotalViewBoolExp = {
  _and?: InputMaybe<Array<DailyTotalViewBoolExp>>;
  _not?: InputMaybe<DailyTotalViewBoolExp>;
  _or?: InputMaybe<Array<DailyTotalViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "daily_total_view". */
export type DailyTotalViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "daily_total_view" */
export enum DailyTotalViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "daily_total_view" */
export type DailyTotalViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DailyTotalViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DailyTotalViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** columns and relationships of "genre" */
export type Genre = {
  __typename?: "Genre";
  /** An array relationship */
  categories: Array<Category>;
  /** An array relationship */
  creditCardDetails: Array<CreditCardDetail>;
  /** An array relationship */
  dailyDetails: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  genreId: Scalars["uuid"];
  genreName: Scalars["String"];
  genreType: Scalars["genre_type"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "genre" */
export type GenreCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** columns and relationships of "genre" */
export type GenreCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "genre" */
export type GenreDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** order by aggregate values of table "genre" */
export type GenreAggregateOrderBy = {
  avg?: InputMaybe<GenreAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GenreMaxOrderBy>;
  min?: InputMaybe<GenreMinOrderBy>;
  stddev?: InputMaybe<GenreStddevOrderBy>;
  stddevPop?: InputMaybe<GenreStddevPopOrderBy>;
  stddevSamp?: InputMaybe<GenreStddevSampOrderBy>;
  sum?: InputMaybe<GenreSumOrderBy>;
  varPop?: InputMaybe<GenreVarPopOrderBy>;
  varSamp?: InputMaybe<GenreVarSampOrderBy>;
  variance?: InputMaybe<GenreVarianceOrderBy>;
};

/** order by avg() on columns of table "genre" */
export type GenreAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "genre". All fields are combined with a logical 'AND'. */
export type GenreBoolExp = {
  _and?: InputMaybe<Array<GenreBoolExp>>;
  _not?: InputMaybe<GenreBoolExp>;
  _or?: InputMaybe<Array<GenreBoolExp>>;
  categories?: InputMaybe<CategoryBoolExp>;
  creditCardDetails?: InputMaybe<CreditCardDetailBoolExp>;
  dailyDetails?: InputMaybe<DailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  genreType?: InputMaybe<GenreTypeComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "genre" */
export enum GenreConstraint {
  /** unique or primary key constraint on columns "genre_id" */
  GenrePkey = "genre_pkey",
}

/** input type for incrementing numeric columns in table "genre" */
export type GenreIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "genre" */
export type GenreInsertInput = {
  categories?: InputMaybe<CategoryArrRelInsertInput>;
  creditCardDetails?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "genre" */
export type GenreMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "genre" */
export type GenreMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "genre" */
export type GenreMutationResponse = {
  __typename?: "GenreMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Genre>;
};

/** input type for inserting object relation for remote table "genre" */
export type GenreObjRelInsertInput = {
  data: GenreInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** on_conflict condition type for table "genre" */
export type GenreOnConflict = {
  constraint: GenreConstraint;
  updateColumns?: Array<GenreUpdateColumn>;
  where?: InputMaybe<GenreBoolExp>;
};

/** Ordering options when selecting data from "genre". */
export type GenreOrderBy = {
  categoriesAggregate?: InputMaybe<CategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: genre */
export type GenrePkColumnsInput = {
  genreId: Scalars["uuid"];
};

/** select columns of table "genre" */
export enum GenreSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "genre" */
export type GenreSetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "genre" */
export type GenreStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "genre" */
export type GenreStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "genre" */
export type GenreStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "genre" */
export type GenreStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GenreStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GenreStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "genre" */
export type GenreSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "genre_type". All fields are combined with logical 'AND'. */
export type GenreTypeComparisonExp = {
  _eq?: InputMaybe<Scalars["genre_type"]>;
  _gt?: InputMaybe<Scalars["genre_type"]>;
  _gte?: InputMaybe<Scalars["genre_type"]>;
  _in?: InputMaybe<Array<Scalars["genre_type"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["genre_type"]>;
  _lte?: InputMaybe<Scalars["genre_type"]>;
  _neq?: InputMaybe<Scalars["genre_type"]>;
  _nin?: InputMaybe<Array<Scalars["genre_type"]>>;
};

/** update columns of table "genre" */
export enum GenreUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  ValidFlag = "validFlag",
}

export type GenreUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GenreIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GenreSetInput>;
  /** filter the rows which have to be updated */
  where: GenreBoolExp;
};

/** order by varPop() on columns of table "genre" */
export type GenreVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "genre" */
export type GenreVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "genre" */
export type GenreVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: "Group";
  /** An array relationship */
  accounts: Array<Account>;
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An array relationship */
  categories: Array<Category>;
  /** An array relationship */
  creditCardDetails: Array<CreditCardDetail>;
  /** An array relationship */
  credit_card_summaries: Array<CreditCardSummary>;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  /** An array relationship */
  exchangeItems: Array<HelperKidsExchangeItem>;
  /** An array relationship */
  genres: Array<Genre>;
  groupId: Scalars["uuid"];
  groupName: Scalars["String"];
  /** An array relationship */
  group_applications: Array<GroupApplication>;
  /** An array relationship */
  helpItems: Array<HelperKidsHelpItem>;
  /** An array relationship */
  helpPointEarnedAchievements: Array<HelperKidsHelpPointEarnedAchievement>;
  /** An aggregate relationship */
  helpPointEarnedAchievementsAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** An array relationship */
  helpPointEarnedDetails: Array<HelperKidsHelpPointEarnedDetail>;
  /** An array relationship */
  helpPointExchangedAchievements: Array<HelperKidsHelpPointExchangedAchievement>;
  /** An aggregate relationship */
  helpPointExchangedAchievementsAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** An array relationship */
  helperKids: Array<HelperKidsHelperKid>;
  /** An array relationship */
  import_file_histories: Array<ImportFileHistory>;
  /** An array relationship */
  summary_category_by_groups: Array<SummaryCategoryByGroup>;
  /** An object relationship */
  transferCategory?: Maybe<TransferCategory>;
};

/** columns and relationships of "group" */
export type GroupAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

/** columns and relationships of "group" */
export type GroupAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCredit_Card_SummariesArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupExchangeItemsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGenresArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGroup_ApplicationsArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpItemsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpPointEarnedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpPointEarnedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpPointEarnedDetailsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpPointExchangedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelpPointExchangedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** columns and relationships of "group" */
export type GroupHelperKidsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

/** columns and relationships of "group" */
export type GroupImport_File_HistoriesArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupSummary_Category_By_GroupsArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** columns and relationships of "group_application" */
export type GroupApplication = {
  __typename?: "GroupApplication";
  /** An object relationship */
  application: Application;
  applicationId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupApplicationId: Scalars["uuid"];
  groupId: Scalars["uuid"];
};

/** order by aggregate values of table "group_application" */
export type GroupApplicationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupApplicationMaxOrderBy>;
  min?: InputMaybe<GroupApplicationMinOrderBy>;
};

/** Boolean expression to filter rows from the table "group_application". All fields are combined with a logical 'AND'. */
export type GroupApplicationBoolExp = {
  _and?: InputMaybe<Array<GroupApplicationBoolExp>>;
  _not?: InputMaybe<GroupApplicationBoolExp>;
  _or?: InputMaybe<Array<GroupApplicationBoolExp>>;
  application?: InputMaybe<ApplicationBoolExp>;
  applicationId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupApplicationId?: InputMaybe<UuidComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
};

/** order by max() on columns of table "group_application" */
export type GroupApplicationMaxOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "group_application" */
export type GroupApplicationMinOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "group_application". */
export type GroupApplicationOrderBy = {
  application?: InputMaybe<ApplicationOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** select columns of table "group_application" */
export enum GroupApplicationSelectColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupApplicationId = "groupApplicationId",
  /** column name */
  GroupId = "groupId",
}

/** Streaming cursor of the table "group_application" */
export type GroupApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupApplicationStreamCursorValueInput = {
  applicationId?: InputMaybe<Scalars["uuid"]>;
  groupApplicationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type GroupBoolExp = {
  _and?: InputMaybe<Array<GroupBoolExp>>;
  _not?: InputMaybe<GroupBoolExp>;
  _or?: InputMaybe<Array<GroupBoolExp>>;
  accounts?: InputMaybe<AccountBoolExp>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  categories?: InputMaybe<CategoryBoolExp>;
  creditCardDetails?: InputMaybe<CreditCardDetailBoolExp>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  exchangeItems?: InputMaybe<HelperKidsExchangeItemBoolExp>;
  genres?: InputMaybe<GenreBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  groupName?: InputMaybe<StringComparisonExp>;
  group_applications?: InputMaybe<GroupApplicationBoolExp>;
  helpItems?: InputMaybe<HelperKidsHelpItemBoolExp>;
  helpPointEarnedAchievements?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateBoolExp>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExp>;
  helperKids?: InputMaybe<HelperKidsHelperKidBoolExp>;
  import_file_histories?: InputMaybe<ImportFileHistoryBoolExp>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  transferCategory?: InputMaybe<TransferCategoryBoolExp>;
};

/** Ordering options when selecting data from "group". */
export type GroupOrderBy = {
  accountsAggregate?: InputMaybe<AccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<CategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  exchangeItemsAggregate?: InputMaybe<HelperKidsExchangeItemAggregateOrderBy>;
  genresAggregate?: InputMaybe<GenreAggregateOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupName?: InputMaybe<OrderBy>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  helpItemsAggregate?: InputMaybe<HelperKidsHelpItemAggregateOrderBy>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateOrderBy>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateOrderBy>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateOrderBy>;
  helperKidsAggregate?: InputMaybe<HelperKidsHelperKidAggregateOrderBy>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateOrderBy>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateOrderBy>;
  transferCategory?: InputMaybe<TransferCategoryOrderBy>;
};

/** columns and relationships of "group_role" */
export type GroupRole = {
  __typename?: "GroupRole";
  /** An array relationship */
  affiliations: Array<Affiliation>;
  groupRoleId: Scalars["uuid"];
  role: Scalars["String"];
};

/** columns and relationships of "group_role" */
export type GroupRoleAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type GroupRoleBoolExp = {
  _and?: InputMaybe<Array<GroupRoleBoolExp>>;
  _not?: InputMaybe<GroupRoleBoolExp>;
  _or?: InputMaybe<Array<GroupRoleBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  groupRoleId?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "group_role". */
export type GroupRoleOrderBy = {
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** select columns of table "group_role" */
export enum GroupRoleSelectColumn {
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  Role = "role",
}

/** Streaming cursor of the table "group_role" */
export type GroupRoleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupRoleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupRoleStreamCursorValueInput = {
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** select columns of table "group" */
export enum GroupSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupName = "groupName",
}

/** Streaming cursor of the table "group" */
export type GroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupName?: InputMaybe<Scalars["String"]>;
};

/** 交換品マスタ */
export type HelperKidsExchangeItem = {
  __typename?: "HelperKidsExchangeItem";
  /** ID */
  exchangeItemId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An array relationship */
  helpPointExchangedAchievements: Array<HelperKidsHelpPointExchangedAchievement>;
  /** An aggregate relationship */
  helpPointExchangedAchievementsAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 品名 */
  name: Scalars["String"];
  /** 交換ポイント */
  point: Scalars["Int"];
};

/** 交換品マスタ */
export type HelperKidsExchangeItemHelpPointExchangedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** 交換品マスタ */
export type HelperKidsExchangeItemHelpPointExchangedAchievementsAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

/** order by aggregate values of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsExchangeItemAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsExchangeItemMaxOrderBy>;
  min?: InputMaybe<HelperKidsExchangeItemMinOrderBy>;
  stddev?: InputMaybe<HelperKidsExchangeItemStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsExchangeItemStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsExchangeItemStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsExchangeItemSumOrderBy>;
  varPop?: InputMaybe<HelperKidsExchangeItemVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsExchangeItemVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsExchangeItemVarianceOrderBy>;
};

/** order by avg() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemAvgOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.exchange_item". All fields are combined with a logical 'AND'. */
export type HelperKidsExchangeItemBoolExp = {
  _and?: InputMaybe<Array<HelperKidsExchangeItemBoolExp>>;
  _not?: InputMaybe<HelperKidsExchangeItemBoolExp>;
  _or?: InputMaybe<Array<HelperKidsExchangeItemBoolExp>>;
  exchangeItemId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExp>;
  memo?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** order by max() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemMaxOrderBy = {
  /** ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** メモ */
  memo?: InputMaybe<OrderBy>;
  /** 品名 */
  name?: InputMaybe<OrderBy>;
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemMinOrderBy = {
  /** ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** メモ */
  memo?: InputMaybe<OrderBy>;
  /** 品名 */
  name?: InputMaybe<OrderBy>;
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "helper_kids.exchange_item". */
export type HelperKidsExchangeItemOrderBy = {
  exchangeItemId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateOrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.exchange_item" */
export enum HelperKidsExchangeItemSelectColumn {
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

/** order by stddev() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemStddevOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemStddevPopOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemStddevSampOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_exchange_item" */
export type HelperKidsExchangeItemStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsExchangeItemStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsExchangeItemStreamCursorValueInput = {
  /** ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 品名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemSumOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemVarPopOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemVarSampOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemVarianceOrderBy = {
  /** 交換ポイント */
  point?: InputMaybe<OrderBy>;
};

/** お手伝い項目マスタ */
export type HelperKidsHelpItem = {
  __typename?: "HelperKidsHelpItem";
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpItemId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedDetails: Array<HelperKidsHelpPointEarnedDetail>;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 項目名 */
  name: Scalars["String"];
  /** お手伝いポイント */
  point: Scalars["Int"];
};

/** お手伝い項目マスタ */
export type HelperKidsHelpItemHelpPointEarnedDetailsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** order by aggregate values of table "helper_kids.help_item" */
export type HelperKidsHelpItemAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpItemAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpItemMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpItemMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpItemStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpItemStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpItemStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpItemSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpItemVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpItemVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpItemVarianceOrderBy>;
};

/** order by avg() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemAvgOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_item". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpItemBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpItemBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpItemBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpItemBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpItemId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  memo?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** order by max() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemMaxOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** メモ */
  memo?: InputMaybe<OrderBy>;
  /** 項目名 */
  name?: InputMaybe<OrderBy>;
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemMinOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** メモ */
  memo?: InputMaybe<OrderBy>;
  /** 項目名 */
  name?: InputMaybe<OrderBy>;
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "helper_kids.help_item". */
export type HelperKidsHelpItemOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpItemId?: InputMaybe<OrderBy>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateOrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.help_item" */
export enum HelperKidsHelpItemSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

/** order by stddev() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemStddevOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemStddevPopOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemStddevSampOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_item" */
export type HelperKidsHelpItemStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpItemStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpItemStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 項目名 */
  name?: InputMaybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemSumOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemVarPopOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemVarSampOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "helper_kids.help_item" */
export type HelperKidsHelpItemVarianceOrderBy = {
  /** お手伝いポイント */
  point?: InputMaybe<OrderBy>;
};

/** お手伝いポイント獲得実績 */
export type HelperKidsHelpPointEarnedAchievement = {
  __typename?: "HelperKidsHelpPointEarnedAchievement";
  /** 獲得日時 */
  earnedDatetime: Scalars["timestamp"];
  /** 獲得ポイント */
  earnedPoint: Scalars["Int"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpPointEarnedAchievementId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedDetails: Array<HelperKidsHelpPointEarnedDetail>;
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
};

/** お手伝いポイント獲得実績 */
export type HelperKidsHelpPointEarnedAchievementHelpPointEarnedDetailsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** aggregated selection of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregate = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAggregate";
  aggregate?: Maybe<HelperKidsHelpPointEarnedAchievementAggregateFields>;
  nodes: Array<HelperKidsHelpPointEarnedAchievement>;
};

export type HelperKidsHelpPointEarnedAchievementAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAggregateFields";
  avg?: Maybe<HelperKidsHelpPointEarnedAchievementAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpPointEarnedAchievementMaxFields>;
  min?: Maybe<HelperKidsHelpPointEarnedAchievementMinFields>;
  stddev?: Maybe<HelperKidsHelpPointEarnedAchievementStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpPointEarnedAchievementStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpPointEarnedAchievementStddevSampFields>;
  sum?: Maybe<HelperKidsHelpPointEarnedAchievementSumFields>;
  varPop?: Maybe<HelperKidsHelpPointEarnedAchievementVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpPointEarnedAchievementVarSampFields>;
  variance?: Maybe<HelperKidsHelpPointEarnedAchievementVarianceFields>;
};

/** aggregate fields of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointEarnedAchievementAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointEarnedAchievementMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointEarnedAchievementMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointEarnedAchievementSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarianceOrderBy>;
};

/** aggregate avg on columns */
export type HelperKidsHelpPointEarnedAchievementAvgFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAvgFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAvgOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_earned_achievement". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointEarnedAchievementBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementBoolExp>>;
  earnedDatetime?: InputMaybe<TimestampComparisonExp>;
  earnedPoint?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedAchievementId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_earned_achievement" */
export enum HelperKidsHelpPointEarnedAchievementConstraint {
  /** unique or primary key constraint on columns "help_point_earned_achievement_id" */
  HelpPointEarnedAchievementPkey = "help_point_earned_achievement_pkey",
}

/** input type for inserting data into table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementInsertInput = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailArrRelInsertInput>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpPointEarnedAchievementMaxFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMaxFields";
  /** 獲得日時 */
  earnedDatetime?: Maybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMaxOrderBy = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<OrderBy>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelpPointEarnedAchievementMinFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMinFields";
  /** 獲得日時 */
  earnedDatetime?: Maybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMinOrderBy = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<OrderBy>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMutationResponse = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointEarnedAchievement>;
};

/** input type for inserting object relation for remote table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementObjRelInsertInput = {
  data: HelperKidsHelpPointEarnedAchievementInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** on_conflict condition type for table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementOnConflict = {
  constraint: HelperKidsHelpPointEarnedAchievementConstraint;
  updateColumns?: Array<HelperKidsHelpPointEarnedAchievementUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_earned_achievement". */
export type HelperKidsHelpPointEarnedAchievementOrderBy = {
  earnedDatetime?: InputMaybe<OrderBy>;
  earnedPoint?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateOrderBy>;
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.help_point_earned_achievement" */
export enum HelperKidsHelpPointEarnedAchievementSelectColumn {
  /** column name */
  EarnedDatetime = "earnedDatetime",
  /** column name */
  EarnedPoint = "earnedPoint",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointEarnedAchievementId = "helpPointEarnedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

/** aggregate stddev on columns */
export type HelperKidsHelpPointEarnedAchievementStddevFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpPointEarnedAchievementStddevPopFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevPopFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevPopOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpPointEarnedAchievementStddevSampFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevSampFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevSampOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointEarnedAchievementStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointEarnedAchievementStreamCursorValueInput = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpPointEarnedAchievementSumFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementSumFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementSumOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "helper_kids.help_point_earned_achievement" (current role has no relevant permissions) */
export enum HelperKidsHelpPointEarnedAchievementUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export type HelperKidsHelpPointEarnedAchievementVarPopFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarPopFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarPopOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpPointEarnedAchievementVarSampFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarSampFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarSampOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HelperKidsHelpPointEarnedAchievementVarianceFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarianceFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarianceOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** お手伝いポイント獲得明細 */
export type HelperKidsHelpPointEarnedDetail = {
  __typename?: "HelperKidsHelpPointEarnedDetail";
  /** 獲得実績ID */
  earnedAchievementId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An object relationship */
  helpItem: HelperKidsHelpItem;
  /** お手伝い項目件数 */
  helpItemCount: Scalars["Int"];
  /** お手伝い項目ID */
  helpItemId: Scalars["uuid"];
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint: Scalars["Int"];
  /** An object relationship */
  helpPointEarnedAchievement: HelperKidsHelpPointEarnedAchievement;
  /** ID */
  helpPointEarnedDetailId: Scalars["uuid"];
};

/** order by aggregate values of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointEarnedDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointEarnedDetailMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointEarnedDetailMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointEarnedDetailSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointEarnedDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointEarnedDetailVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointEarnedDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailArrRelInsertInput = {
  data: Array<HelperKidsHelpPointEarnedDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** order by avg() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAvgOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_earned_detail". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointEarnedDetailBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailBoolExp>>;
  earnedAchievementId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpItem?: InputMaybe<HelperKidsHelpItemBoolExp>;
  helpItemCount?: InputMaybe<IntComparisonExp>;
  helpItemId?: InputMaybe<UuidComparisonExp>;
  helpItemTotalPoint?: InputMaybe<IntComparisonExp>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  helpPointEarnedDetailId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_earned_detail" */
export enum HelperKidsHelpPointEarnedDetailConstraint {
  /** unique or primary key constraint on columns "help_point_earned_detail_id" */
  HelpPointEarnedDetailPkey = "help_point_earned_detail_pkey",
}

/** input type for inserting data into table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailInsertInput = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementObjRelInsertInput>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMaxOrderBy = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMinOrderBy = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMutationResponse = {
  __typename?: "HelperKidsHelpPointEarnedDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointEarnedDetail>;
};

/** on_conflict condition type for table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailOnConflict = {
  constraint: HelperKidsHelpPointEarnedDetailConstraint;
  updateColumns?: Array<HelperKidsHelpPointEarnedDetailUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_earned_detail". */
export type HelperKidsHelpPointEarnedDetailOrderBy = {
  earnedAchievementId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpItem?: InputMaybe<HelperKidsHelpItemOrderBy>;
  helpItemCount?: InputMaybe<OrderBy>;
  helpItemId?: InputMaybe<OrderBy>;
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementOrderBy>;
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.help_point_earned_detail" */
export enum HelperKidsHelpPointEarnedDetailSelectColumn {
  /** column name */
  EarnedAchievementId = "earnedAchievementId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemCount = "helpItemCount",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  HelpItemTotalPoint = "helpItemTotalPoint",
  /** column name */
  HelpPointEarnedDetailId = "helpPointEarnedDetailId",
}

/** order by stddev() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevPopOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevSampOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointEarnedDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointEarnedDetailStreamCursorValueInput = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<Scalars["uuid"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailSumOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "helper_kids.help_point_earned_detail" (current role has no relevant permissions) */
export enum HelperKidsHelpPointEarnedDetailUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarPopOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarSampOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarianceOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** お手伝いポイント交換実績 */
export type HelperKidsHelpPointExchangedAchievement = {
  __typename?: "HelperKidsHelpPointExchangedAchievement";
  /** 交換件数 */
  exchangeCount: Scalars["Int"];
  /** An object relationship */
  exchangeItem: HelperKidsExchangeItem;
  /** 交換品ID */
  exchangeItemId: Scalars["uuid"];
  /** 交換合計ポイント */
  exchangeTotalPoint: Scalars["Int"];
  /** 交換日時 */
  exchangedDatetime: Scalars["timestamp"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpPointExchangedAchievementId: Scalars["uuid"];
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
};

/** aggregated selection of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregate = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAggregate";
  aggregate?: Maybe<HelperKidsHelpPointExchangedAchievementAggregateFields>;
  nodes: Array<HelperKidsHelpPointExchangedAchievement>;
};

export type HelperKidsHelpPointExchangedAchievementAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAggregateFields";
  avg?: Maybe<HelperKidsHelpPointExchangedAchievementAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpPointExchangedAchievementMaxFields>;
  min?: Maybe<HelperKidsHelpPointExchangedAchievementMinFields>;
  stddev?: Maybe<HelperKidsHelpPointExchangedAchievementStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpPointExchangedAchievementStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpPointExchangedAchievementStddevSampFields>;
  sum?: Maybe<HelperKidsHelpPointExchangedAchievementSumFields>;
  varPop?: Maybe<HelperKidsHelpPointExchangedAchievementVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpPointExchangedAchievementVarSampFields>;
  variance?: Maybe<HelperKidsHelpPointExchangedAchievementVarianceFields>;
};

/** aggregate fields of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateFieldsCountArgs = {
  columns?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointExchangedAchievementAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointExchangedAchievementMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointExchangedAchievementMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointExchangedAchievementSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarianceOrderBy>;
};

/** aggregate avg on columns */
export type HelperKidsHelpPointExchangedAchievementAvgFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAvgFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAvgOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_exchanged_achievement". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointExchangedAchievementBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementBoolExp>>;
  exchangeCount?: InputMaybe<IntComparisonExp>;
  exchangeItem?: InputMaybe<HelperKidsExchangeItemBoolExp>;
  exchangeItemId?: InputMaybe<UuidComparisonExp>;
  exchangeTotalPoint?: InputMaybe<IntComparisonExp>;
  exchangedDatetime?: InputMaybe<TimestampComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointExchangedAchievementId?: InputMaybe<UuidComparisonExp>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_exchanged_achievement" */
export enum HelperKidsHelpPointExchangedAchievementConstraint {
  /** unique or primary key constraint on columns "help_point_exchanged_achievement_id" */
  HelpPointExchangedAchievementPkey = "help_point_exchanged_achievement_pkey",
}

/** input type for inserting data into table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementInsertInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpPointExchangedAchievementMaxFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMaxFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: Maybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMaxOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelpPointExchangedAchievementMinFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMinFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: Maybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMinOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMutationResponse = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointExchangedAchievement>;
};

/** on_conflict condition type for table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementOnConflict = {
  constraint: HelperKidsHelpPointExchangedAchievementConstraint;
  updateColumns?: Array<HelperKidsHelpPointExchangedAchievementUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_exchanged_achievement". */
export type HelperKidsHelpPointExchangedAchievementOrderBy = {
  exchangeCount?: InputMaybe<OrderBy>;
  exchangeItem?: InputMaybe<HelperKidsExchangeItemOrderBy>;
  exchangeItemId?: InputMaybe<OrderBy>;
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  exchangedDatetime?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.help_point_exchanged_achievement" */
export enum HelperKidsHelpPointExchangedAchievementSelectColumn {
  /** column name */
  ExchangeCount = "exchangeCount",
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  ExchangeTotalPoint = "exchangeTotalPoint",
  /** column name */
  ExchangedDatetime = "exchangedDatetime",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointExchangedAchievementId = "helpPointExchangedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

/** aggregate stddev on columns */
export type HelperKidsHelpPointExchangedAchievementStddevFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpPointExchangedAchievementStddevPopFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevPopFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevPopOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpPointExchangedAchievementStddevSampFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevSampFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevSampOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointExchangedAchievementStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointExchangedAchievementStreamCursorValueInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpPointExchangedAchievementSumFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementSumFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementSumOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "helper_kids.help_point_exchanged_achievement" (current role has no relevant permissions) */
export enum HelperKidsHelpPointExchangedAchievementUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export type HelperKidsHelpPointExchangedAchievementVarPopFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarPopFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarPopOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpPointExchangedAchievementVarSampFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarSampFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarSampOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HelperKidsHelpPointExchangedAchievementVarianceFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarianceFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarianceOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKid = {
  __typename?: "HelperKidsHelperKid";
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedAchievements: Array<HelperKidsHelpPointEarnedAchievement>;
  /** An aggregate relationship */
  helpPointEarnedAchievementsAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** An array relationship */
  helpPointExchangedAchievements: Array<HelperKidsHelpPointExchangedAchievement>;
  /** An aggregate relationship */
  helpPointExchangedAchievementsAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** ID */
  helperKidId: Scalars["uuid"];
  /** An array relationship */
  helperKidParents: Array<HelperKidsHelperKidParent>;
  /** An object relationship */
  helperKidPoint?: Maybe<HelperKidsHelperKidPoint>;
  /** 氏名 */
  name: Scalars["String"];
  /** 名前 接尾辞 */
  nameSuffix: Scalars["String"];
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointEarnedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointEarnedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointExchangedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointExchangedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelperKidParentsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

/** order by aggregate values of table "helper_kids.helper_kid" */
export type HelperKidsHelperKidAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelperKidMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelperKidMinOrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedAchievements?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateBoolExp>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  helperKidParents?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  helperKidPoint?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameSuffix?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "helper_kids.helper_kid" */
export type HelperKidsHelperKidMaxOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helperKidId?: InputMaybe<OrderBy>;
  /** 氏名 */
  name?: InputMaybe<OrderBy>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "helper_kids.helper_kid" */
export type HelperKidsHelperKidMinOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helperKidId?: InputMaybe<OrderBy>;
  /** 氏名 */
  name?: InputMaybe<OrderBy>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid". */
export type HelperKidsHelperKidOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateOrderBy>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentsAggregate?: InputMaybe<HelperKidsHelperKidParentAggregateOrderBy>;
  helperKidPoint?: InputMaybe<HelperKidsHelperKidPointOrderBy>;
  name?: InputMaybe<OrderBy>;
  nameSuffix?: InputMaybe<OrderBy>;
};

/** columns and relationships of "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParent = {
  __typename?: "HelperKidsHelperKidParent";
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  helperKidId: Scalars["uuid"];
  helperKidParentId: Scalars["uuid"];
  parentUserId: Scalars["uuid"];
  /** An object relationship */
  user: User;
};

/** order by aggregate values of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelperKidParentMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelperKidParentMinOrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid_parent". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidParentBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidParentBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidParentBoolExp>>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  helperKidParentId?: InputMaybe<UuidComparisonExp>;
  parentUserId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
};

/** order by max() on columns of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentMaxOrderBy = {
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentMinOrderBy = {
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid_parent". */
export type HelperKidsHelperKidParentOrderBy = {
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
};

/** select columns of table "helper_kids.helper_kid_parent" */
export enum HelperKidsHelperKidParentSelectColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  HelperKidParentId = "helperKidParentId",
  /** column name */
  ParentUserId = "parentUserId",
}

/** Streaming cursor of the table "helper_kids_helper_kid_parent" */
export type HelperKidsHelperKidParentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidParentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidParentStreamCursorValueInput = {
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  helperKidParentId?: InputMaybe<Scalars["uuid"]>;
  parentUserId?: InputMaybe<Scalars["uuid"]>;
};

/** お手伝いキッズポイント */
export type HelperKidsHelperKidPoint = {
  __typename?: "HelperKidsHelperKidPoint";
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
  /** 最後のお手伝い日時 */
  lastHelpDatetime: Scalars["timestamp"];
  /** ポイント */
  point: Scalars["Int"];
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid_point". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidPointBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidPointBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidPointBoolExp>>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  lastHelpDatetime?: InputMaybe<TimestampComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid_point". */
export type HelperKidsHelperKidPointOrderBy = {
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  lastHelpDatetime?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** select columns of table "helper_kids.helper_kid_point" */
export enum HelperKidsHelperKidPointSelectColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  LastHelpDatetime = "lastHelpDatetime",
  /** column name */
  Point = "point",
}

/** Streaming cursor of the table "helper_kids_helper_kid_point" */
export type HelperKidsHelperKidPointStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidPointStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidPointStreamCursorValueInput = {
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** select columns of table "helper_kids.helper_kid" */
export enum HelperKidsHelperKidSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  Name = "name",
  /** column name */
  NameSuffix = "nameSuffix",
}

/** Streaming cursor of the table "helper_kids_helper_kid" */
export type HelperKidsHelperKidStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 氏名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "import_file_history" */
export type ImportFileHistory = {
  __typename?: "ImportFileHistory";
  /** An object relationship */
  credit_card_summary?: Maybe<CreditCardSummary>;
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["uuid"];
  /** An object relationship */
  user: User;
};

/** order by aggregate values of table "import_file_history" */
export type ImportFileHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<ImportFileHistoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "import_file_history" */
export type ImportFileHistoryArrRelInsertInput = {
  data: Array<ImportFileHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** Boolean expression to filter rows from the table "import_file_history". All fields are combined with a logical 'AND'. */
export type ImportFileHistoryBoolExp = {
  _and?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  _not?: InputMaybe<ImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  credit_card_summary?: InputMaybe<CreditCardSummaryBoolExp>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  importDatetime?: InputMaybe<TimestampComparisonExp>;
  importUserId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "import_file_history" */
export enum ImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "import_file_history" */
export type ImportFileHistoryInsertInput = {
  credit_card_summary?: InputMaybe<CreditCardSummaryObjRelInsertInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
};

/** order by max() on columns of table "import_file_history" */
export type ImportFileHistoryMaxOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "import_file_history" */
export type ImportFileHistoryMinOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "import_file_history" */
export type ImportFileHistoryMutationResponse = {
  __typename?: "ImportFileHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<ImportFileHistory>;
};

/** input type for inserting object relation for remote table "import_file_history" */
export type ImportFileHistoryObjRelInsertInput = {
  data: ImportFileHistoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** on_conflict condition type for table "import_file_history" */
export type ImportFileHistoryOnConflict = {
  constraint: ImportFileHistoryConstraint;
  updateColumns?: Array<ImportFileHistoryUpdateColumn>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** Ordering options when selecting data from "import_file_history". */
export type ImportFileHistoryOrderBy = {
  credit_card_summary?: InputMaybe<CreditCardSummaryOrderBy>;
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
};

/** select columns of table "import_file_history" */
export enum ImportFileHistorySelectColumn {
  /** column name */
  FileName = "fileName",
  /** column name */
  FileType = "fileType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  ImportDatetime = "importDatetime",
  /** column name */
  ImportUserId = "importUserId",
}

/** Streaming cursor of the table "import_file_history" */
export type ImportFileHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImportFileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImportFileHistoryStreamCursorValueInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["uuid"]>;
};

/** placeholder for update columns of table "import_file_history" (current role has no relevant permissions) */
export enum ImportFileHistoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "iocome_type". All fields are combined with logical 'AND'. */
export type IocomeTypeComparisonExp = {
  _eq?: InputMaybe<Scalars["iocome_type"]>;
  _gt?: InputMaybe<Scalars["iocome_type"]>;
  _gte?: InputMaybe<Scalars["iocome_type"]>;
  _in?: InputMaybe<Array<Scalars["iocome_type"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["iocome_type"]>;
  _lte?: InputMaybe<Scalars["iocome_type"]>;
  _neq?: InputMaybe<Scalars["iocome_type"]>;
  _nin?: InputMaybe<Array<Scalars["iocome_type"]>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST",
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "summary_category_by_group" */
export type SummaryCategoryByGroup = {
  __typename?: "SummaryCategoryByGroup";
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
};

/** order by aggregate values of table "summary_category_by_group" */
export type SummaryCategoryByGroupAggregateOrderBy = {
  avg?: InputMaybe<SummaryCategoryByGroupAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SummaryCategoryByGroupMaxOrderBy>;
  min?: InputMaybe<SummaryCategoryByGroupMinOrderBy>;
  stddev?: InputMaybe<SummaryCategoryByGroupStddevOrderBy>;
  stddevPop?: InputMaybe<SummaryCategoryByGroupStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SummaryCategoryByGroupStddevSampOrderBy>;
  sum?: InputMaybe<SummaryCategoryByGroupSumOrderBy>;
  varPop?: InputMaybe<SummaryCategoryByGroupVarPopOrderBy>;
  varSamp?: InputMaybe<SummaryCategoryByGroupVarSampOrderBy>;
  variance?: InputMaybe<SummaryCategoryByGroupVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "summary_category_by_group" */
export type SummaryCategoryByGroupArrRelInsertInput = {
  data: Array<SummaryCategoryByGroupInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** order by avg() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "summary_category_by_group". All fields are combined with a logical 'AND'. */
export type SummaryCategoryByGroupBoolExp = {
  _and?: InputMaybe<Array<SummaryCategoryByGroupBoolExp>>;
  _not?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  _or?: InputMaybe<Array<SummaryCategoryByGroupBoolExp>>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "summary_category_by_group" */
export enum SummaryCategoryByGroupConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryCategoryByGroupPkey = "summary_category_by_group_pkey",
}

/** input type for inserting data into table "summary_category_by_group" */
export type SummaryCategoryByGroupInsertInput = {
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "summary_category_by_group" */
export type SummaryCategoryByGroupMutationResponse = {
  __typename?: "SummaryCategoryByGroupMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<SummaryCategoryByGroup>;
};

/** on_conflict condition type for table "summary_category_by_group" */
export type SummaryCategoryByGroupOnConflict = {
  constraint: SummaryCategoryByGroupConstraint;
  updateColumns?: Array<SummaryCategoryByGroupUpdateColumn>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** Ordering options when selecting data from "summary_category_by_group". */
export type SummaryCategoryByGroupOrderBy = {
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "summary_category_by_group" */
export enum SummaryCategoryByGroupSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** order by stddev() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "summary_category_by_group" */
export type SummaryCategoryByGroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SummaryCategoryByGroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SummaryCategoryByGroupStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
};

/** order by sum() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "summary_category_by_group" (current role has no relevant permissions) */
export enum SummaryCategoryByGroupUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** columns and relationships of "total_by_account_view" */
export type TotalByAccountView = {
  __typename?: "TotalByAccountView";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Boolean expression to filter rows from the table "total_by_account_view". All fields are combined with a logical 'AND'. */
export type TotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<TotalByAccountViewBoolExp>>;
  _not?: InputMaybe<TotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<TotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "total_by_account_view". */
export type TotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_account_view" */
export enum TotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "total_by_account_view" */
export type TotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByAccountViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** columns and relationships of "total_by_category_view" */
export type TotalByCategoryView = {
  __typename?: "TotalByCategoryView";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Boolean expression to filter rows from the table "total_by_category_view". All fields are combined with a logical 'AND'. */
export type TotalByCategoryViewBoolExp = {
  _and?: InputMaybe<Array<TotalByCategoryViewBoolExp>>;
  _not?: InputMaybe<TotalByCategoryViewBoolExp>;
  _or?: InputMaybe<Array<TotalByCategoryViewBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "total_by_category_view". */
export type TotalByCategoryViewOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_category_view" */
export enum TotalByCategoryViewSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "total_by_category_view" */
export type TotalByCategoryViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByCategoryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByCategoryViewStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** columns and relationships of "total_by_genre_view" */
export type TotalByGenreView = {
  __typename?: "TotalByGenreView";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Boolean expression to filter rows from the table "total_by_genre_view". All fields are combined with a logical 'AND'. */
export type TotalByGenreViewBoolExp = {
  _and?: InputMaybe<Array<TotalByGenreViewBoolExp>>;
  _not?: InputMaybe<TotalByGenreViewBoolExp>;
  _or?: InputMaybe<Array<TotalByGenreViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "total_by_genre_view". */
export type TotalByGenreViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_genre_view" */
export enum TotalByGenreViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "total_by_genre_view" */
export type TotalByGenreViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByGenreViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByGenreViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** 振替カテゴリ */
export type TransferCategory = {
  __typename?: "TransferCategory";
  /** An object relationship */
  category: Category;
  /** An object relationship */
  categoryByOutcomeCategoryId: Category;
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** 収入カテゴリID */
  incomeCategoryId: Scalars["uuid"];
  /** 支出カテゴリID */
  outcomeCategoryId: Scalars["uuid"];
};

/** order by aggregate values of table "transfer_category" */
export type TransferCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TransferCategoryMaxOrderBy>;
  min?: InputMaybe<TransferCategoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "transfer_category" */
export type TransferCategoryArrRelInsertInput = {
  data: Array<TransferCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
};

/** Boolean expression to filter rows from the table "transfer_category". All fields are combined with a logical 'AND'. */
export type TransferCategoryBoolExp = {
  _and?: InputMaybe<Array<TransferCategoryBoolExp>>;
  _not?: InputMaybe<TransferCategoryBoolExp>;
  _or?: InputMaybe<Array<TransferCategoryBoolExp>>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryByOutcomeCategoryId?: InputMaybe<CategoryBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  incomeCategoryId?: InputMaybe<UuidComparisonExp>;
  outcomeCategoryId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "transfer_category" */
export enum TransferCategoryConstraint {
  /** unique or primary key constraint on columns "group_id" */
  TransferCategoryPkey = "transfer_category_pkey",
}

/** input type for inserting data into table "transfer_category" */
export type TransferCategoryInsertInput = {
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryByOutcomeCategoryId?: InputMaybe<CategoryObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "transfer_category" */
export type TransferCategoryMaxOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<OrderBy>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "transfer_category" */
export type TransferCategoryMinOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<OrderBy>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "transfer_category" */
export type TransferCategoryMutationResponse = {
  __typename?: "TransferCategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<TransferCategory>;
};

/** on_conflict condition type for table "transfer_category" */
export type TransferCategoryOnConflict = {
  constraint: TransferCategoryConstraint;
  updateColumns?: Array<TransferCategoryUpdateColumn>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** Ordering options when selecting data from "transfer_category". */
export type TransferCategoryOrderBy = {
  category?: InputMaybe<CategoryOrderBy>;
  categoryByOutcomeCategoryId?: InputMaybe<CategoryOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** select columns of table "transfer_category" */
export enum TransferCategorySelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

/** Streaming cursor of the table "transfer_category" */
export type TransferCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TransferCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TransferCategoryStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<Scalars["uuid"]>;
};

/** placeholder for update columns of table "transfer_category" (current role has no relevant permissions) */
export enum TransferCategoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** ユーザ */
export type User = {
  __typename?: "User";
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  /** An array relationship */
  helperKidParents: Array<HelperKidsHelperKidParent>;
  /** An array relationship */
  import_file_histories: Array<ImportFileHistory>;
  userId: Scalars["uuid"];
  userName?: Maybe<Scalars["String"]>;
};

/** ユーザ */
export type UserAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** ユーザ */
export type UserCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** ユーザ */
export type UserDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** ユーザ */
export type UserHelperKidParentsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

/** ユーザ */
export type UserImport_File_HistoriesArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  helperKidParents?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  import_file_histories?: InputMaybe<ImportFileHistoryBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
  userName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "user_id" */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  import_file_histories?: InputMaybe<ImportFileHistoryArrRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: "UserMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  updateColumns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  helperKidParentsAggregate?: InputMaybe<HelperKidsHelperKidParentAggregateOrderBy>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateOrderBy>;
  userId?: InputMaybe<OrderBy>;
  userName?: InputMaybe<OrderBy>;
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  UserId = "userId",
  /** column name */
  UserName = "userName",
}

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "user" (current role has no relevant permissions) */
export enum UserUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type AccountTotalArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type CategoryTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type DailyDetailByDateArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GenreTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type HelperKidsHelpPointEarnedAchievementAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  predicate: IntComparisonExp;
};

export type HelperKidsHelpPointExchangedAchievementAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "daily_detail" */
  deleteDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** delete single row from the table: "daily_detail" */
  deleteDailyDetailByPk?: Maybe<DailyDetail>;
  /** delete data from the table: "summary_category_by_group" */
  deleteSummaryCategoryByGroup?: Maybe<SummaryCategoryByGroupMutationResponse>;
  /** delete single row from the table: "summary_category_by_group" */
  deleteSummaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** insert data into the table: "account" */
  insertAccount?: Maybe<AccountMutationResponse>;
  /** insert a single row into the table: "account" */
  insertAccountOne?: Maybe<Account>;
  /** insert data into the table: "category" */
  insertCategory?: Maybe<CategoryMutationResponse>;
  /** insert a single row into the table: "category" */
  insertCategoryOne?: Maybe<Category>;
  /** insert data into the table: "credit_card_detail" */
  insertCreditCardDetail?: Maybe<CreditCardDetailMutationResponse>;
  /** insert a single row into the table: "credit_card_detail" */
  insertCreditCardDetailOne?: Maybe<CreditCardDetail>;
  /** insert data into the table: "credit_card_summary" */
  insertCreditCardSummary?: Maybe<CreditCardSummaryMutationResponse>;
  /** insert a single row into the table: "credit_card_summary" */
  insertCreditCardSummaryOne?: Maybe<CreditCardSummary>;
  /** insert data into the table: "daily_detail" */
  insertDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** insert a single row into the table: "daily_detail" */
  insertDailyDetailOne?: Maybe<DailyDetail>;
  /** insert data into the table: "genre" */
  insertGenre?: Maybe<GenreMutationResponse>;
  /** insert a single row into the table: "genre" */
  insertGenreOne?: Maybe<Genre>;
  /** insert data into the table: "helper_kids.help_point_earned_achievement" */
  insertHelperKidsHelpPointEarnedAchievement?: Maybe<HelperKidsHelpPointEarnedAchievementMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_earned_achievement" */
  insertHelperKidsHelpPointEarnedAchievementOne?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** insert data into the table: "helper_kids.help_point_earned_detail" */
  insertHelperKidsHelpPointEarnedDetail?: Maybe<HelperKidsHelpPointEarnedDetailMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_earned_detail" */
  insertHelperKidsHelpPointEarnedDetailOne?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** insert data into the table: "helper_kids.help_point_exchanged_achievement" */
  insertHelperKidsHelpPointExchangedAchievement?: Maybe<HelperKidsHelpPointExchangedAchievementMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_exchanged_achievement" */
  insertHelperKidsHelpPointExchangedAchievementOne?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** insert data into the table: "import_file_history" */
  insertImportFileHistory?: Maybe<ImportFileHistoryMutationResponse>;
  /** insert a single row into the table: "import_file_history" */
  insertImportFileHistoryOne?: Maybe<ImportFileHistory>;
  /** insert data into the table: "summary_category_by_group" */
  insertSummaryCategoryByGroup?: Maybe<SummaryCategoryByGroupMutationResponse>;
  /** insert a single row into the table: "summary_category_by_group" */
  insertSummaryCategoryByGroupOne?: Maybe<SummaryCategoryByGroup>;
  /** insert data into the table: "transfer_category" */
  insertTransferCategory?: Maybe<TransferCategoryMutationResponse>;
  /** insert a single row into the table: "transfer_category" */
  insertTransferCategoryOne?: Maybe<TransferCategory>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "category" */
  updateCategory?: Maybe<CategoryMutationResponse>;
  /** update single row of the table: "category" */
  updateCategoryByPk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  updateCategoryMany?: Maybe<Array<Maybe<CategoryMutationResponse>>>;
  /** update data of the table: "credit_card_detail" */
  updateCreditCardDetail?: Maybe<CreditCardDetailMutationResponse>;
  /** update single row of the table: "credit_card_detail" */
  updateCreditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** update multiples rows of table: "credit_card_detail" */
  updateCreditCardDetailMany?: Maybe<
    Array<Maybe<CreditCardDetailMutationResponse>>
  >;
  /** update data of the table: "daily_detail" */
  updateDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** update single row of the table: "daily_detail" */
  updateDailyDetailByPk?: Maybe<DailyDetail>;
  /** update multiples rows of table: "daily_detail" */
  updateDailyDetailMany?: Maybe<Array<Maybe<DailyDetailMutationResponse>>>;
  /** update data of the table: "genre" */
  updateGenre?: Maybe<GenreMutationResponse>;
  /** update single row of the table: "genre" */
  updateGenreByPk?: Maybe<Genre>;
  /** update multiples rows of table: "genre" */
  updateGenreMany?: Maybe<Array<Maybe<GenreMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeleteDailyDetailArgs = {
  where: DailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByGroupArgs = {
  where: SummaryCategoryByGroupBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsertAccountArgs = {
  objects: Array<AccountInsertInput>;
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAccountOneArgs = {
  object: AccountInsertInput;
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryArgs = {
  objects: Array<CategoryInsertInput>;
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryOneArgs = {
  object: CategoryInsertInput;
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardDetailArgs = {
  objects: Array<CreditCardDetailInsertInput>;
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardDetailOneArgs = {
  object: CreditCardDetailInsertInput;
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardSummaryArgs = {
  objects: Array<CreditCardSummaryInsertInput>;
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardSummaryOneArgs = {
  object: CreditCardSummaryInsertInput;
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDailyDetailArgs = {
  objects: Array<DailyDetailInsertInput>;
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDailyDetailOneArgs = {
  object: DailyDetailInsertInput;
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGenreArgs = {
  objects: Array<GenreInsertInput>;
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGenreOneArgs = {
  object: GenreInsertInput;
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedAchievementArgs = {
  objects: Array<HelperKidsHelpPointEarnedAchievementInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedAchievementOneArgs = {
  object: HelperKidsHelpPointEarnedAchievementInsertInput;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedDetailArgs = {
  objects: Array<HelperKidsHelpPointEarnedDetailInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedDetailOneArgs = {
  object: HelperKidsHelpPointEarnedDetailInsertInput;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointExchangedAchievementArgs = {
  objects: Array<HelperKidsHelpPointExchangedAchievementInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointExchangedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointExchangedAchievementOneArgs =
  {
    object: HelperKidsHelpPointExchangedAchievementInsertInput;
    onConflict?: InputMaybe<HelperKidsHelpPointExchangedAchievementOnConflict>;
  };

/** mutation root */
export type Mutation_RootInsertImportFileHistoryArgs = {
  objects: Array<ImportFileHistoryInsertInput>;
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertImportFileHistoryOneArgs = {
  object: ImportFileHistoryInsertInput;
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByGroupArgs = {
  objects: Array<SummaryCategoryByGroupInsertInput>;
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByGroupOneArgs = {
  object: SummaryCategoryByGroupInsertInput;
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTransferCategoryArgs = {
  objects: Array<TransferCategoryInsertInput>;
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTransferCategoryOneArgs = {
  object: TransferCategoryInsertInput;
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateCategoryArgs = {
  _inc?: InputMaybe<CategoryIncInput>;
  _set?: InputMaybe<CategorySetInput>;
  where: CategoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCategoryByPkArgs = {
  _inc?: InputMaybe<CategoryIncInput>;
  _set?: InputMaybe<CategorySetInput>;
  pkColumns: CategoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCategoryManyArgs = {
  updates: Array<CategoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailArgs = {
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  _set?: InputMaybe<CreditCardDetailSetInput>;
  where: CreditCardDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailByPkArgs = {
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  _set?: InputMaybe<CreditCardDetailSetInput>;
  pkColumns: CreditCardDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailManyArgs = {
  updates: Array<CreditCardDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailArgs = {
  _inc?: InputMaybe<DailyDetailIncInput>;
  _set?: InputMaybe<DailyDetailSetInput>;
  where: DailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailByPkArgs = {
  _inc?: InputMaybe<DailyDetailIncInput>;
  _set?: InputMaybe<DailyDetailSetInput>;
  pkColumns: DailyDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailManyArgs = {
  updates: Array<DailyDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGenreArgs = {
  _inc?: InputMaybe<GenreIncInput>;
  _set?: InputMaybe<GenreSetInput>;
  where: GenreBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGenreByPkArgs = {
  _inc?: InputMaybe<GenreIncInput>;
  _set?: InputMaybe<GenreSetInput>;
  pkColumns: GenrePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGenreManyArgs = {
  updates: Array<GenreUpdates>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** execute function "account_total" which returns "total_by_account_view" */
  accountTotal: Array<TotalByAccountView>;
  /** fetch data from the table: "affiliation" */
  affiliation: Array<Affiliation>;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<Affiliation>;
  /** fetch data from the table: "application" */
  application: Array<Application>;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<Application>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** execute function "category_total_by_month" which returns "total_by_category_view" */
  categoryTotalByMonth: Array<TotalByCategoryView>;
  /** fetch data from the table: "credit_card_detail" */
  creditCardDetail: Array<CreditCardDetail>;
  /** fetch data from the table: "credit_card_detail" using primary key columns */
  creditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** fetch data from the table: "credit_card_summary" */
  creditCardSummary: Array<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary" using primary key columns */
  creditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountView: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch data from the table: "daily_detail" */
  dailyDetail: Array<DailyDetail>;
  /** execute function "daily_detail_by_date" which returns "daily_detail" */
  dailyDetailByDate: Array<DailyDetail>;
  /** fetch data from the table: "daily_detail" using primary key columns */
  dailyDetailByPk?: Maybe<DailyDetail>;
  /** fetch data from the table: "daily_total_view" */
  dailyTotalView: Array<DailyTotalView>;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch data from the table: "genre" using primary key columns */
  genreByPk?: Maybe<Genre>;
  /** execute function "genre_total_by_month" which returns "total_by_genre_view" */
  genreTotalByMonth: Array<TotalByGenreView>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<GroupApplication>;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<GroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<Group>;
  /** fetch data from the table: "group_role" */
  groupRole: Array<GroupRole>;
  /** fetch data from the table: "group_role" using primary key columns */
  groupRoleByPk?: Maybe<GroupRole>;
  /** fetch data from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItem: Array<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.exchange_item" using primary key columns */
  helperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.help_item" */
  helperKidsHelpItem: Array<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_item" using primary key columns */
  helperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievement: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" using primary key columns */
  helperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetail: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" using primary key columns */
  helperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievement: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" using primary key columns */
  helperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table: "helper_kids.helper_kid" */
  helperKidsHelperKid: Array<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid" using primary key columns */
  helperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParent: Array<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" using primary key columns */
  helperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPoint: Array<HelperKidsHelperKidPoint>;
  /** fetch data from the table: "helper_kids.helper_kid_point" using primary key columns */
  helperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** fetch data from the table: "import_file_history" */
  importFileHistory: Array<ImportFileHistory>;
  /** fetch data from the table: "import_file_history" using primary key columns */
  importFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** fetch data from the table: "summary_category_by_group" */
  summaryCategoryByGroup: Array<SummaryCategoryByGroup>;
  /** fetch data from the table: "summary_category_by_group" using primary key columns */
  summaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** fetch data from the table: "total_by_account_view" */
  totalByAccountView: Array<TotalByAccountView>;
  /** fetch data from the table: "total_by_category_view" */
  totalByCategoryView: Array<TotalByCategoryView>;
  /** fetch data from the table: "total_by_genre_view" */
  totalByGenreView: Array<TotalByGenreView>;
  /** fetch data from the table: "transfer_category" */
  transferCategory: Array<TransferCategory>;
  /** fetch data from the table: "transfer_category" using primary key columns */
  transferCategoryByPk?: Maybe<TransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

export type Query_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Query_RootAccountByPkArgs = {
  accountId: Scalars["uuid"];
};

export type Query_RootAccountTotalArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Query_RootAffiliationArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Query_RootAffiliationByPkArgs = {
  affiliationId: Scalars["uuid"];
};

export type Query_RootApplicationArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Query_RootApplicationByPkArgs = {
  applicationId: Scalars["uuid"];
};

export type Query_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Query_RootCategoryByPkArgs = {
  categoryId: Scalars["uuid"];
};

export type Query_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Query_RootCreditCardDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Query_RootCreditCardSummaryByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootCreditCardSummaryTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<
    Array<CreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Query_RootDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Query_RootGenreArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Query_RootGenreByPkArgs = {
  genreId: Scalars["uuid"];
};

export type Query_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Query_RootGroupArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Query_RootGroupApplicationArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Query_RootGroupApplicationByPkArgs = {
  groupApplicationId: Scalars["uuid"];
};

export type Query_RootGroupByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Query_RootGroupRoleArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Query_RootGroupRoleByPkArgs = {
  groupRoleId: Scalars["uuid"];
};

export type Query_RootHelperKidsExchangeItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Query_RootHelperKidsExchangeItemByPkArgs = {
  exchangeItemId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Query_RootHelperKidsHelpItemByPkArgs = {
  helpItemId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointEarnedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedAchievementAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedAchievementByPkArgs = {
  helpPointEarnedAchievementId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointEarnedDetailArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedDetailByPkArgs = {
  helpPointEarnedDetailId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointExchangedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointExchangedAchievementAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointExchangedAchievementByPkArgs = {
  helpPointExchangedAchievementId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Query_RootHelperKidsHelperKidByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidParentArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Query_RootHelperKidsHelperKidParentByPkArgs = {
  helperKidParentId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidPointArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Query_RootHelperKidsHelperKidPointByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Query_RootImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Query_RootImportFileHistoryByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSummaryCategoryByGroupArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Query_RootSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Query_RootTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Query_RootTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Query_RootTransferCategoryByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Query_RootUserByPkArgs = {
  userId: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  accountStream: Array<Account>;
  /** execute function "account_total" which returns "total_by_account_view" */
  accountTotal: Array<TotalByAccountView>;
  /** fetch data from the table: "affiliation" */
  affiliation: Array<Affiliation>;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<Affiliation>;
  /** fetch data from the table in a streaming manner: "affiliation" */
  affiliationStream: Array<Affiliation>;
  /** fetch data from the table: "application" */
  application: Array<Application>;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<Application>;
  /** fetch data from the table in a streaming manner: "application" */
  applicationStream: Array<Application>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  categoryStream: Array<Category>;
  /** execute function "category_total_by_month" which returns "total_by_category_view" */
  categoryTotalByMonth: Array<TotalByCategoryView>;
  /** fetch data from the table: "credit_card_detail" */
  creditCardDetail: Array<CreditCardDetail>;
  /** fetch data from the table: "credit_card_detail" using primary key columns */
  creditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** fetch data from the table in a streaming manner: "credit_card_detail" */
  creditCardDetailStream: Array<CreditCardDetail>;
  /** fetch data from the table: "credit_card_summary" */
  creditCardSummary: Array<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary" using primary key columns */
  creditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** fetch data from the table in a streaming manner: "credit_card_summary" */
  creditCardSummaryStream: Array<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountView: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch data from the table in a streaming manner: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountViewStream: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch data from the table: "daily_detail" */
  dailyDetail: Array<DailyDetail>;
  /** execute function "daily_detail_by_date" which returns "daily_detail" */
  dailyDetailByDate: Array<DailyDetail>;
  /** fetch data from the table: "daily_detail" using primary key columns */
  dailyDetailByPk?: Maybe<DailyDetail>;
  /** fetch data from the table in a streaming manner: "daily_detail" */
  dailyDetailStream: Array<DailyDetail>;
  /** fetch data from the table: "daily_total_view" */
  dailyTotalView: Array<DailyTotalView>;
  /** fetch data from the table in a streaming manner: "daily_total_view" */
  dailyTotalViewStream: Array<DailyTotalView>;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch data from the table: "genre" using primary key columns */
  genreByPk?: Maybe<Genre>;
  /** fetch data from the table in a streaming manner: "genre" */
  genreStream: Array<Genre>;
  /** execute function "genre_total_by_month" which returns "total_by_genre_view" */
  genreTotalByMonth: Array<TotalByGenreView>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<GroupApplication>;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<GroupApplication>;
  /** fetch data from the table in a streaming manner: "group_application" */
  groupApplicationStream: Array<GroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<Group>;
  /** fetch data from the table: "group_role" */
  groupRole: Array<GroupRole>;
  /** fetch data from the table: "group_role" using primary key columns */
  groupRoleByPk?: Maybe<GroupRole>;
  /** fetch data from the table in a streaming manner: "group_role" */
  groupRoleStream: Array<GroupRole>;
  /** fetch data from the table in a streaming manner: "group" */
  groupStream: Array<Group>;
  /** fetch data from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItem: Array<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.exchange_item" using primary key columns */
  helperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** fetch data from the table in a streaming manner: "helper_kids.exchange_item" */
  helperKidsExchangeItemStream: Array<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.help_item" */
  helperKidsHelpItem: Array<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_item" using primary key columns */
  helperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_item" */
  helperKidsHelpItemStream: Array<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievement: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" using primary key columns */
  helperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementStream: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetail: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" using primary key columns */
  helperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetailStream: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievement: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" using primary key columns */
  helperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementStream: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table: "helper_kids.helper_kid" */
  helperKidsHelperKid: Array<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid" using primary key columns */
  helperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParent: Array<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" using primary key columns */
  helperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParentStream: Array<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPoint: Array<HelperKidsHelperKidPoint>;
  /** fetch data from the table: "helper_kids.helper_kid_point" using primary key columns */
  helperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPointStream: Array<HelperKidsHelperKidPoint>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid" */
  helperKidsHelperKidStream: Array<HelperKidsHelperKid>;
  /** fetch data from the table: "import_file_history" */
  importFileHistory: Array<ImportFileHistory>;
  /** fetch data from the table: "import_file_history" using primary key columns */
  importFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** fetch data from the table in a streaming manner: "import_file_history" */
  importFileHistoryStream: Array<ImportFileHistory>;
  /** fetch data from the table: "summary_category_by_group" */
  summaryCategoryByGroup: Array<SummaryCategoryByGroup>;
  /** fetch data from the table: "summary_category_by_group" using primary key columns */
  summaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** fetch data from the table in a streaming manner: "summary_category_by_group" */
  summaryCategoryByGroupStream: Array<SummaryCategoryByGroup>;
  /** fetch data from the table: "total_by_account_view" */
  totalByAccountView: Array<TotalByAccountView>;
  /** fetch data from the table in a streaming manner: "total_by_account_view" */
  totalByAccountViewStream: Array<TotalByAccountView>;
  /** fetch data from the table: "total_by_category_view" */
  totalByCategoryView: Array<TotalByCategoryView>;
  /** fetch data from the table in a streaming manner: "total_by_category_view" */
  totalByCategoryViewStream: Array<TotalByCategoryView>;
  /** fetch data from the table: "total_by_genre_view" */
  totalByGenreView: Array<TotalByGenreView>;
  /** fetch data from the table in a streaming manner: "total_by_genre_view" */
  totalByGenreViewStream: Array<TotalByGenreView>;
  /** fetch data from the table: "transfer_category" */
  transferCategory: Array<TransferCategory>;
  /** fetch data from the table: "transfer_category" using primary key columns */
  transferCategoryByPk?: Maybe<TransferCategory>;
  /** fetch data from the table in a streaming manner: "transfer_category" */
  transferCategoryStream: Array<TransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
};

export type Subscription_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Subscription_RootAccountByPkArgs = {
  accountId: Scalars["uuid"];
};

export type Subscription_RootAccountStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<AccountStreamCursorInput>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Subscription_RootAccountTotalArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootAffiliationArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Subscription_RootAffiliationByPkArgs = {
  affiliationId: Scalars["uuid"];
};

export type Subscription_RootAffiliationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<AffiliationStreamCursorInput>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Subscription_RootApplicationArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootApplicationByPkArgs = {
  applicationId: Scalars["uuid"];
};

export type Subscription_RootApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<ApplicationStreamCursorInput>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Subscription_RootCategoryByPkArgs = {
  categoryId: Scalars["uuid"];
};

export type Subscription_RootCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CategoryStreamCursorInput>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Subscription_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Subscription_RootCreditCardDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootCreditCardDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CreditCardDetailStreamCursorInput>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Subscription_RootCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Subscription_RootCreditCardSummaryByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootCreditCardSummaryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CreditCardSummaryStreamCursorInput>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Subscription_RootCreditCardSummaryTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<
    Array<CreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Subscription_RootCreditCardSummaryTotalByAccountViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<
    InputMaybe<CreditCardSummaryTotalByAccountViewStreamCursorInput>
  >;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Subscription_RootDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDailyDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<DailyDetailStreamCursorInput>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Subscription_RootDailyTotalViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<DailyTotalViewStreamCursorInput>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Subscription_RootGenreArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Subscription_RootGenreByPkArgs = {
  genreId: Scalars["uuid"];
};

export type Subscription_RootGenreStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GenreStreamCursorInput>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Subscription_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootGroupArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootGroupApplicationArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupApplicationByPkArgs = {
  groupApplicationId: Scalars["uuid"];
};

export type Subscription_RootGroupApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupApplicationStreamCursorInput>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Subscription_RootGroupRoleArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Subscription_RootGroupRoleByPkArgs = {
  groupRoleId: Scalars["uuid"];
};

export type Subscription_RootGroupRoleStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupRoleStreamCursorInput>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Subscription_RootGroupStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupStreamCursorInput>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootHelperKidsExchangeItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Subscription_RootHelperKidsExchangeItemByPkArgs = {
  exchangeItemId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsExchangeItemStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsExchangeItemStreamCursorInput>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpItemByPkArgs = {
  helpItemId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpItemStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelpItemStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelpPointEarnedAchievementByPkArgs = {
  helpPointEarnedAchievementId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<
    InputMaybe<HelperKidsHelpPointEarnedAchievementStreamCursorInput>
  >;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailByPkArgs = {
  helpPointEarnedDetailId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelpPointEarnedDetailStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelpPointExchangedAchievementByPkArgs = {
  helpPointExchangedAchievementId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementStreamArgs =
  {
    batchSize: Scalars["Int"];
    cursor: Array<
      InputMaybe<HelperKidsHelpPointExchangedAchievementStreamCursorInput>
    >;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelperKidArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidParentArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidParentByPkArgs = {
  helperKidParentId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidParentStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidParentStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidPointArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidPointByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidPointStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidPointStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Subscription_RootImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Subscription_RootImportFileHistoryByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootImportFileHistoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<ImportFileHistoryStreamCursorInput>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Subscription_RootSummaryCategoryByGroupArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Subscription_RootSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSummaryCategoryByGroupStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<SummaryCategoryByGroupStreamCursorInput>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Subscription_RootTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootTotalByAccountViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByAccountViewStreamCursorInput>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootTotalByCategoryViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByCategoryViewStreamCursorInput>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootTotalByGenreViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByGenreViewStreamCursorInput>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Subscription_RootTransferCategoryByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Subscription_RootTransferCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TransferCategoryStreamCursorInput>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Subscription_RootUserByPkArgs = {
  userId: Scalars["uuid"];
};

export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

export type CreateAccountMutationVariables = Exact<{
  accountId: Scalars["uuid"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  groupId: Scalars["uuid"];
}>;

export type CreateAccountMutation = {
  __typename?: "mutation_root";
  insertAccount?: {
    __typename?: "AccountMutationResponse";
    returning: Array<{ __typename?: "Account"; accountId: any }>;
  } | null;
};

export type CreateCreditCardDetailMutationVariables = Exact<{
  id: Scalars["uuid"];
  date: Scalars["date"];
  genreId: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  categoryId: Scalars["uuid"];
  amount: Scalars["numeric"];
  memo: Scalars["String"];
  summaryId: Scalars["uuid"];
  userId: Scalars["uuid"];
  groupId: Scalars["uuid"];
}>;

export type CreateCreditCardDetailMutation = {
  __typename?: "mutation_root";
  insertCreditCardDetail?: {
    __typename?: "CreditCardDetailMutationResponse";
    returning: Array<{ __typename?: "CreditCardDetail"; id: any }>;
  } | null;
};

export type CreateCreditCardSummaryMutationVariables = Exact<{
  accountId: Scalars["uuid"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
}>;

export type CreateCreditCardSummaryMutation = {
  __typename?: "mutation_root";
  insertCreditCardSummary?: {
    __typename?: "CreditCardSummaryMutationResponse";
    returning: Array<{ __typename?: "CreditCardSummary"; id: any }>;
  } | null;
};

export type CreateDailyDetailMutationVariables = Exact<{
  accountId: Scalars["uuid"];
  amount: Scalars["numeric"];
  genreId: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  categoryId: Scalars["uuid"];
  date: Scalars["date"];
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  memo?: InputMaybe<Scalars["String"]>;
  userId: Scalars["uuid"];
}>;

export type CreateDailyDetailMutation = {
  __typename?: "mutation_root";
  insertDailyDetail?: {
    __typename?: "DailyDetailMutationResponse";
    returning: Array<{ __typename?: "DailyDetail"; id: any }>;
  } | null;
};

export type CreateImportFileHistoryMutationVariables = Exact<{
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["uuid"];
}>;

export type CreateImportFileHistoryMutation = {
  __typename?: "mutation_root";
  insertImportFileHistory?: {
    __typename?: "ImportFileHistoryMutationResponse";
    returning: Array<{ __typename?: "ImportFileHistory"; id: any }>;
  } | null;
};

export type CreateSummaryCategoryMutationVariables = Exact<{
  id: Scalars["uuid"];
  displayOrder: Scalars["Int"];
  categoryId: Scalars["uuid"];
  groupId: Scalars["uuid"];
}>;

export type CreateSummaryCategoryMutation = {
  __typename?: "mutation_root";
  insertSummaryCategoryByGroup?: {
    __typename?: "SummaryCategoryByGroupMutationResponse";
    returning: Array<{ __typename?: "SummaryCategoryByGroup"; id: any }>;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  userId: Scalars["uuid"];
  userName: Scalars["String"];
  email: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type CreateUserMutation = {
  __typename?: "mutation_root";
  insertUser?: {
    __typename?: "UserMutationResponse";
    returning: Array<{
      __typename?: "User";
      userId: any;
      email?: string | null;
    }>;
  } | null;
};

export type DeleteDailyDetailBySerialNoMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteDailyDetailBySerialNoMutation = {
  __typename?: "mutation_root";
  deleteDailyDetailByPk?: { __typename?: "DailyDetail"; id: any } | null;
};

export type DeleteSummaryCategoryMutationVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type DeleteSummaryCategoryMutation = {
  __typename?: "mutation_root";
  deleteSummaryCategoryByGroup?: {
    __typename?: "SummaryCategoryByGroupMutationResponse";
    returning: Array<{ __typename?: "SummaryCategoryByGroup"; id: any }>;
  } | null;
};

export type UpdateCategoryByIdMutationVariables = Exact<{
  categoryId: Scalars["uuid"];
  categoryName: Scalars["String"];
  genreId: Scalars["uuid"];
  displayOrder: Scalars["Int"];
  validFlag: Scalars["Boolean"];
}>;

export type UpdateCategoryByIdMutation = {
  __typename?: "mutation_root";
  updateCategoryByPk?: { __typename?: "Category"; id: any } | null;
};

export type UpdateCreditCardDetailByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  categoryId: Scalars["uuid"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateCreditCardDetailByIdMutation = {
  __typename?: "mutation_root";
  updateCreditCardDetailByPk?: {
    __typename?: "CreditCardDetail";
    id: any;
  } | null;
};

export type UpdateDailyDetailByIdMutationVariables = Exact<{
  id: Scalars["uuid"];
  date: Scalars["date"];
  genreId: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  categoryId: Scalars["uuid"];
  accountId: Scalars["uuid"];
  amount: Scalars["numeric"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateDailyDetailByIdMutation = {
  __typename?: "mutation_root";
  updateDailyDetailByPk?: { __typename?: "DailyDetail"; id: any } | null;
};

export type UpdateGenreByIdMutationVariables = Exact<{
  genreId: Scalars["uuid"];
  validFlag: Scalars["Boolean"];
  iocomeType: Scalars["iocome_type"];
  genreType: Scalars["genre_type"];
  genreName: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type UpdateGenreByIdMutation = {
  __typename?: "mutation_root";
  updateGenreByPk?: { __typename?: "Genre"; id: any } | null;
};

export type GetAccountBalanceListQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetAccountBalanceListQuery = {
  __typename?: "query_root";
  accountTotal: Array<{
    __typename?: "TotalByAccountView";
    accountId?: any | null;
    accountName?: string | null;
    total?: any | null;
    displayOrder?: number | null;
  }>;
};

export type GetAllCategoriesQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetAllCategoriesQuery = {
  __typename?: "query_root";
  categories: Array<{
    __typename?: "Category";
    categoryName: string;
    displayOrder: number;
    validFlag?: boolean | null;
    id: any;
    genre: { __typename?: "Genre"; genreId: any; genreName: string };
  }>;
};

export type GetAllCategoryListWithCriteriaQueryVariables = Exact<{
  validCategoryIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  validGenreIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  iocomeTypeIn?: InputMaybe<
    Array<Scalars["iocome_type"]> | Scalars["iocome_type"]
  >;
  categoryNotIn?: InputMaybe<Array<Scalars["uuid"]> | Scalars["uuid"]>;
}>;

export type GetAllCategoryListWithCriteriaQuery = {
  __typename?: "query_root";
  genres: Array<{
    __typename?: "Genre";
    iocomeType: any;
    validFlag?: boolean | null;
    displayOrder: number;
    id: any;
    name: string;
    type: any;
    categories: Array<{
      __typename?: "Category";
      validFlag?: boolean | null;
      displayOrder: number;
      id: any;
      name: string;
    }>;
  }>;
};

export type GetAllGenreQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetAllGenreQuery = {
  __typename?: "query_root";
  genre: Array<{
    __typename?: "Genre";
    genreName: string;
    genreType: any;
    iocomeType: any;
    validFlag?: boolean | null;
    displayOrder: number;
    id: any;
  }>;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "User";
    email?: string | null;
    id: any;
    name?: string | null;
    affiliation: Array<{
      __typename?: "Affiliation";
      group: { __typename?: "Group"; id: any; name: string };
    }>;
  }>;
};

export type GetApplicationByGroupIdQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetApplicationByGroupIdQuery = {
  __typename?: "query_root";
  group: Array<{
    __typename?: "GroupApplication";
    app: { __typename?: "Application"; topUrl: string; id: any; name: string };
  }>;
};

export type GetCategoryByIdQueryVariables = Exact<{
  categoryId: Scalars["uuid"];
}>;

export type GetCategoryByIdQuery = {
  __typename?: "query_root";
  category?: {
    __typename?: "Category";
    categoryName: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genre: { __typename?: "Genre"; genreId: any; iocomeType: any };
  } | null;
};

export type GetCategoryTotalByMonthQueryVariables = Exact<{
  fromDate?: InputMaybe<Scalars["date"]>;
  toDate?: InputMaybe<Scalars["date"]>;
  groupId: Scalars["uuid"];
}>;

export type GetCategoryTotalByMonthQuery = {
  __typename?: "query_root";
  categoryTotalByMonth: Array<{
    __typename?: "TotalByCategoryView";
    date?: any | null;
    iocomeType?: any | null;
    genreId?: any | null;
    genreName?: string | null;
    categoryId?: any | null;
    categoryName?: string | null;
    total?: any | null;
  }>;
};

export type GetCreditCardDetailByIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetCreditCardDetailByIdQuery = {
  __typename?: "query_root";
  creditCardDetailByPk?: {
    __typename?: "CreditCardDetail";
    id: any;
    date: any;
    amount: any;
    memo?: string | null;
    summaryId: any;
    category: {
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
      genre: {
        __typename?: "Genre";
        genreId: any;
        genreName: string;
        genreType: any;
        iocomeType: any;
      };
    };
  } | null;
};

export type GetCreditCardDetailBySummaryIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetCreditCardDetailBySummaryIdQuery = {
  __typename?: "query_root";
  creditCardSummaryByPk?: {
    __typename?: "CreditCardSummary";
    id: any;
    creditCardDetail: Array<{
      __typename?: "CreditCardDetail";
      id: any;
      date: any;
      memo?: string | null;
      amount: any;
      category: {
        __typename?: "Category";
        categoryId: any;
        categoryName: string;
        genreByGenreId: {
          __typename?: "Genre";
          genreId: any;
          genreName: string;
          genreType: any;
          iocomeType: any;
        };
      };
    }>;
  } | null;
};

export type GetCreditCardListQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetCreditCardListQuery = {
  __typename?: "query_root";
  allCreditCardSummariesList: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    creditCard: string;
    count: number;
    withdrawalDate: any;
    totalAmount: any;
    account: { __typename?: "Account"; id: any; name: string };
  }>;
};

export type GetCreditCardSummaryBetweenWithdrawalDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetCreditCardSummaryBetweenWithdrawalDateQuery = {
  __typename?: "query_root";
  allCreditCardSummariesList: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId: {
      __typename?: "Account";
      accountId: any;
      accountName: string;
    };
  }>;
};

export type GetCreditCardSummaryByAccountIdBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["uuid"];
}>;

export type GetCreditCardSummaryByAccountIdBetweenDateQuery = {
  __typename?: "query_root";
  allCreditCardSummariesList: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId: {
      __typename?: "Account";
      accountId: any;
      accountName: string;
    };
  }>;
};

export type GetDailyDetailByDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetDailyDetailByDateQuery = {
  __typename?: "query_root";
  dailyDetailByDateList: Array<{
    __typename?: "DailyDetail";
    id: any;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
      genreByGenreId: {
        __typename?: "Genre";
        genreId: any;
        genreName: string;
        genreType: any;
        iocomeType: any;
      };
    };
    accountByAccountId: {
      __typename?: "Account";
      accountId: any;
      accountName: string;
    };
    userByUserId: {
      __typename?: "User";
      userId: any;
      userName?: string | null;
    };
  }>;
};

export type GetDailyDetailByDateAccountIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["uuid"];
  groupId: Scalars["uuid"];
}>;

export type GetDailyDetailByDateAccountIdQuery = {
  __typename?: "query_root";
  dailyDetailByDateList: Array<{
    __typename?: "DailyDetail";
    id: any;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
      genreByGenreId: {
        __typename?: "Genre";
        genreId: any;
        genreName: string;
        genreType: any;
        iocomeType: any;
      };
    };
    accountByAccountId: {
      __typename?: "Account";
      accountId: any;
      accountName: string;
    };
    userByUserId: {
      __typename?: "User";
      userId: any;
      userName?: string | null;
    };
  }>;
};

export type GetDailyDetailByDateCategoryIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
  categoryId: Scalars["uuid"];
}>;

export type GetDailyDetailByDateCategoryIdQuery = {
  __typename?: "query_root";
  dailyDetailByDateList: Array<{
    __typename?: "DailyDetail";
    id: any;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
      genreByGenreId: {
        __typename?: "Genre";
        genreId: any;
        genreName: string;
        genreType: any;
        iocomeType: any;
      };
    };
    accountByAccountId: {
      __typename?: "Account";
      accountId: any;
      accountName: string;
    };
    userByUserId: {
      __typename?: "User";
      userId: any;
      userName?: string | null;
    };
  }>;
};

export type GetDailyDetailByDateGenreIdQueryVariables = Exact<{
  genreId: Scalars["uuid"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetDailyDetailByDateGenreIdQuery = {
  __typename?: "query_root";
  allCategoriesList: Array<{
    __typename?: "Category";
    dailyDetailsByCategoryIdList: Array<{
      __typename?: "DailyDetail";
      id: any;
      date: any;
      amount: any;
      memo?: string | null;
      categoryByCategoryId: {
        __typename?: "Category";
        categoryId: any;
        categoryName: string;
        genreByGenreId: {
          __typename?: "Genre";
          genreId: any;
          genreName: string;
          genreType: any;
          iocomeType: any;
        };
      };
      accountByAccountId: {
        __typename?: "Account";
        accountId: any;
        accountName: string;
      };
      userByUserId: {
        __typename?: "User";
        userId: any;
        userName?: string | null;
      };
    }>;
  }>;
};

export type GetGenreByIdQueryVariables = Exact<{
  genreId: Scalars["uuid"];
}>;

export type GetGenreByIdQuery = {
  __typename?: "query_root";
  genreById?: {
    __typename?: "Genre";
    genreName: string;
    genreType: any;
    iocomeType: any;
    validFlag?: boolean | null;
    displayOrder: number;
    id: any;
    categories: Array<{
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
    }>;
  } | null;
};

export type GetGenreTotalByMonthQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetGenreTotalByMonthQuery = {
  __typename?: "query_root";
  genreTotalByMonthList: Array<{
    __typename?: "TotalByGenreView";
    date?: any | null;
    iocomeType?: any | null;
    genreId?: any | null;
    genreName?: string | null;
    total?: any | null;
  }>;
};

export type GetSummaryCategoriesQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetSummaryCategoriesQuery = {
  __typename?: "query_root";
  categories: Array<{
    __typename?: "SummaryCategoryByGroup";
    id: any;
    groupId: any;
    displayOrder: number;
    category: {
      __typename?: "Category";
      id: any;
      name: string;
      genre: {
        __typename?: "Genre";
        iocomeType: any;
        id: any;
        name: string;
        type: any;
      };
    };
  }>;
};

export type GetSummaryCategoryBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetSummaryCategoryBetweenDateQuery = {
  __typename?: "query_root";
  summaryCategoryList: Array<{
    __typename?: "SummaryCategoryByGroup";
    category: {
      __typename?: "Category";
      name: string;
      id: any;
      genre: { __typename?: "Genre"; iocomeType: any };
      daily: Array<{ __typename?: "DailyDetail"; date: any; amount: any }>;
      creditCard: Array<{
        __typename?: "CreditCardDetail";
        date: any;
        amount: any;
      }>;
    };
  }>;
};

export type GetTotalBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["uuid"];
}>;

export type GetTotalBetweenDateQuery = {
  __typename?: "query_root";
  incomeTotalByDate: Array<{
    __typename?: "DailyTotalView";
    date?: any | null;
    iocomeType?: any | null;
    total?: any | null;
  }>;
  outcomeTotalByDate: Array<{
    __typename?: "DailyTotalView";
    date?: any | null;
    iocomeType?: any | null;
    total?: any | null;
  }>;
};

export type GetTransferCategoryByQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetTransferCategoryByQuery = {
  __typename?: "query_root";
  transferCategory?: {
    __typename?: "TransferCategory";
    incomeCategoryId: any;
    outcomeCategoryId: any;
    id: any;
  } | null;
};

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type GetUserByEmailQuery = {
  __typename?: "query_root";
  userByEmail: Array<{
    __typename?: "User";
    email?: string | null;
    id: any;
    name?: string | null;
    affiliation: Array<{
      __typename?: "Affiliation";
      group: { __typename?: "Group"; id: any; name: string };
      groupRole: { __typename?: "GroupRole"; role: string; id: any };
    }>;
  }>;
};

export type GetValidAccountsQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetValidAccountsQuery = {
  __typename?: "query_root";
  allAccountsList: Array<{
    __typename?: "Account";
    accountId: any;
    accountName: string;
  }>;
};

export type GetValidCategoryByGenreIdQueryVariables = Exact<{
  groupId: Scalars["uuid"];
  genreId?: InputMaybe<Scalars["uuid"]>;
}>;

export type GetValidCategoryByGenreIdQuery = {
  __typename?: "query_root";
  genreById: Array<{
    __typename?: "Genre";
    id: any;
    name: string;
    categories: Array<{
      __typename?: "Category";
      displayOrder: number;
      id: any;
      name: string;
    }>;
  }>;
};

export type GetValidGenreListByIocomeTypeQueryVariables = Exact<{
  iocomeType: Scalars["iocome_type"];
  groupId: Scalars["uuid"];
}>;

export type GetValidGenreListByIocomeTypeQuery = {
  __typename?: "query_root";
  allGenresList: Array<{
    __typename?: "Genre";
    genreId: any;
    genreName: string;
    genreType: any;
    iocomeType: any;
    displayOrder: number;
    categoriesByGenreIdList: Array<{
      __typename?: "Category";
      categoryId: any;
      categoryName: string;
      displayOrder: number;
    }>;
  }>;
};

export const CreateAccountDocument = gql`
  mutation CreateAccount(
    $accountId: uuid!
    $accountName: String!
    $displayOrder: Int!
    $groupId: uuid!
  ) {
    insertAccount(
      objects: {
        accountId: $accountId
        accountName: $accountName
        displayOrder: $displayOrder
        groupId: $groupId
        validFlag: true
      }
    ) {
      returning {
        accountId
      }
    }
  }
`;

export function useCreateAccountMutation() {
  return Urql.useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CreateAccountDocument);
}
export const CreateCreditCardDetailDocument = gql`
  mutation CreateCreditCardDetail(
    $id: uuid!
    $date: date!
    $genreId: uuid!
    $iocomeType: iocome_type!
    $categoryId: uuid!
    $amount: numeric!
    $memo: String!
    $summaryId: uuid!
    $userId: uuid!
    $groupId: uuid!
  ) {
    insertCreditCardDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        amount: $amount
        summaryId: $summaryId
        userId: $userId
        memo: $memo
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardDetailMutation() {
  return Urql.useMutation<
    CreateCreditCardDetailMutation,
    CreateCreditCardDetailMutationVariables
  >(CreateCreditCardDetailDocument);
}
export const CreateCreditCardSummaryDocument = gql`
  mutation CreateCreditCardSummary(
    $accountId: uuid!
    $count: Int!
    $creditCard: String!
    $groupId: uuid!
    $id: uuid!
    $totalAmount: numeric!
    $withdrawalDate: date!
  ) {
    insertCreditCardSummary(
      objects: {
        id: $id
        creditCard: $creditCard
        accountId: $accountId
        totalAmount: $totalAmount
        count: $count
        withdrawalDate: $withdrawalDate
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardSummaryMutation() {
  return Urql.useMutation<
    CreateCreditCardSummaryMutation,
    CreateCreditCardSummaryMutationVariables
  >(CreateCreditCardSummaryDocument);
}
export const CreateDailyDetailDocument = gql`
  mutation CreateDailyDetail(
    $accountId: uuid!
    $amount: numeric!
    $genreId: uuid!
    $iocomeType: iocome_type!
    $categoryId: uuid!
    $date: date!
    $groupId: uuid!
    $id: uuid!
    $memo: String
    $userId: uuid!
  ) {
    insertDailyDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        userId: $userId
        amount: $amount
        memo: $memo
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateDailyDetailMutation() {
  return Urql.useMutation<
    CreateDailyDetailMutation,
    CreateDailyDetailMutationVariables
  >(CreateDailyDetailDocument);
}
export const CreateImportFileHistoryDocument = gql`
  mutation CreateImportFileHistory(
    $fileName: String!
    $fileType: String!
    $groupId: uuid!
    $id: uuid!
    $importDatetime: timestamp!
    $importUserId: uuid!
  ) {
    insertImportFileHistory(
      objects: {
        id: $id
        fileType: $fileType
        fileName: $fileName
        importUserId: $importUserId
        importDatetime: $importDatetime
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateImportFileHistoryMutation() {
  return Urql.useMutation<
    CreateImportFileHistoryMutation,
    CreateImportFileHistoryMutationVariables
  >(CreateImportFileHistoryDocument);
}
export const CreateSummaryCategoryDocument = gql`
  mutation CreateSummaryCategory(
    $id: uuid!
    $displayOrder: Int!
    $categoryId: uuid!
    $groupId: uuid!
  ) {
    insertSummaryCategoryByGroup(
      objects: {
        id: $id
        categoryId: $categoryId
        groupId: $groupId
        displayOrder: $displayOrder
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateSummaryCategoryMutation() {
  return Urql.useMutation<
    CreateSummaryCategoryMutation,
    CreateSummaryCategoryMutationVariables
  >(CreateSummaryCategoryDocument);
}
export const CreateUserDocument = gql`
  mutation CreateUser(
    $userId: uuid!
    $userName: String!
    $email: String!
    $displayOrder: Int!
  ) {
    insertUser(
      objects: {
        userId: $userId
        userName: $userName
        email: $email
        displayOrder: $displayOrder
      }
    ) {
      returning {
        userId
        email
      }
    }
  }
`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
  );
}
export const DeleteDailyDetailBySerialNoDocument = gql`
  mutation DeleteDailyDetailBySerialNo($id: uuid!) {
    deleteDailyDetailByPk(id: $id) {
      id
    }
  }
`;

export function useDeleteDailyDetailBySerialNoMutation() {
  return Urql.useMutation<
    DeleteDailyDetailBySerialNoMutation,
    DeleteDailyDetailBySerialNoMutationVariables
  >(DeleteDailyDetailBySerialNoDocument);
}
export const DeleteSummaryCategoryDocument = gql`
  mutation DeleteSummaryCategory($groupId: uuid!) {
    deleteSummaryCategoryByGroup(where: { groupId: { _eq: $groupId } }) {
      returning {
        id
      }
    }
  }
`;

export function useDeleteSummaryCategoryMutation() {
  return Urql.useMutation<
    DeleteSummaryCategoryMutation,
    DeleteSummaryCategoryMutationVariables
  >(DeleteSummaryCategoryDocument);
}
export const UpdateCategoryByIdDocument = gql`
  mutation UpdateCategoryById(
    $categoryId: uuid!
    $categoryName: String!
    $genreId: uuid!
    $displayOrder: Int!
    $validFlag: Boolean!
  ) {
    updateCategoryByPk(
      pkColumns: { categoryId: $categoryId }
      _set: {
        categoryName: $categoryName
        genreId: $genreId
        displayOrder: $displayOrder
        validFlag: $validFlag
      }
    ) {
      id: categoryId
    }
  }
`;

export function useUpdateCategoryByIdMutation() {
  return Urql.useMutation<
    UpdateCategoryByIdMutation,
    UpdateCategoryByIdMutationVariables
  >(UpdateCategoryByIdDocument);
}
export const UpdateCreditCardDetailByIdDocument = gql`
  mutation UpdateCreditCardDetailById(
    $id: uuid!
    $categoryId: uuid!
    $memo: String
  ) {
    updateCreditCardDetailByPk(
      pkColumns: { id: $id }
      _set: { categoryId: $categoryId, memo: $memo }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardDetailByIdMutation() {
  return Urql.useMutation<
    UpdateCreditCardDetailByIdMutation,
    UpdateCreditCardDetailByIdMutationVariables
  >(UpdateCreditCardDetailByIdDocument);
}
export const UpdateDailyDetailByIdDocument = gql`
  mutation UpdateDailyDetailById(
    $id: uuid!
    $date: date!
    $genreId: uuid!
    $iocomeType: iocome_type!
    $categoryId: uuid!
    $accountId: uuid!
    $amount: numeric!
    $memo: String
  ) {
    updateDailyDetailByPk(
      _set: {
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        amount: $amount
        memo: $memo
      }
      pkColumns: { id: $id }
    ) {
      id
    }
  }
`;

export function useUpdateDailyDetailByIdMutation() {
  return Urql.useMutation<
    UpdateDailyDetailByIdMutation,
    UpdateDailyDetailByIdMutationVariables
  >(UpdateDailyDetailByIdDocument);
}
export const UpdateGenreByIdDocument = gql`
  mutation UpdateGenreById(
    $genreId: uuid!
    $validFlag: Boolean!
    $iocomeType: iocome_type!
    $genreType: genre_type!
    $genreName: String!
    $displayOrder: Int!
  ) {
    updateGenreByPk(
      pkColumns: { genreId: $genreId }
      _set: {
        genreName: $genreName
        genreType: $genreType
        iocomeType: $iocomeType
        validFlag: $validFlag
        displayOrder: $displayOrder
      }
    ) {
      id: genreId
    }
  }
`;

export function useUpdateGenreByIdMutation() {
  return Urql.useMutation<
    UpdateGenreByIdMutation,
    UpdateGenreByIdMutationVariables
  >(UpdateGenreByIdDocument);
}
export const GetAccountBalanceListDocument = gql`
  query GetAccountBalanceList(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    accountTotal(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      accountId
      accountName
      total
      displayOrder
    }
  }
`;

export function useGetAccountBalanceListQuery(
  options: Omit<
    Urql.UseQueryArgs<GetAccountBalanceListQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetAccountBalanceListQuery,
    GetAccountBalanceListQueryVariables
  >({ query: GetAccountBalanceListDocument, ...options });
}
export const GetAllCategoriesDocument = gql`
  query GetAllCategories($groupId: uuid!) {
    categories: category(
      where: { groupId: { _eq: $groupId } }
      orderBy: [{ genre: { displayOrder: ASC } }, { displayOrder: ASC }]
    ) {
      id: categoryId
      categoryName
      displayOrder
      validFlag
      genre {
        genreId
        genreName
      }
    }
  }
`;

export function useGetAllCategoriesQuery(
  options: Omit<Urql.UseQueryArgs<GetAllCategoriesQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>({
    query: GetAllCategoriesDocument,
    ...options,
  });
}
export const GetAllCategoryListWithCriteriaDocument = gql`
  query GetAllCategoryListWithCriteria(
    $validCategoryIn: [Boolean!] = [true, false]
    $validGenreIn: [Boolean!] = [true, false]
    $iocomeTypeIn: [iocome_type!] = [INCOME, OUTCOME]
    $categoryNotIn: [uuid!] = []
  ) {
    genres: genre(
      where: {
        validFlag: { _in: $validCategoryIn }
        _and: { iocomeType: { _in: $iocomeTypeIn } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id: genreId
      name: genreName
      type: genreType
      iocomeType
      validFlag
      displayOrder
      categories(
        where: {
          validFlag: { _in: $validGenreIn }
          _and: { categoryId: { _nin: $categoryNotIn } }
        }
        orderBy: { displayOrder: ASC }
      ) {
        id: categoryId
        name: categoryName
        validFlag
        displayOrder
      }
    }
  }
`;

export function useGetAllCategoryListWithCriteriaQuery(
  options?: Omit<
    Urql.UseQueryArgs<GetAllCategoryListWithCriteriaQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetAllCategoryListWithCriteriaQuery,
    GetAllCategoryListWithCriteriaQueryVariables
  >({ query: GetAllCategoryListWithCriteriaDocument, ...options });
}
export const GetAllGenreDocument = gql`
  query GetAllGenre($groupId: uuid!) @cached {
    genre(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id: genreId
      genreName
      genreType
      iocomeType
      validFlag
      displayOrder
    }
  }
`;

export function useGetAllGenreQuery(
  options: Omit<Urql.UseQueryArgs<GetAllGenreQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllGenreQuery, GetAllGenreQueryVariables>({
    query: GetAllGenreDocument,
    ...options,
  });
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users: user(orderBy: { displayOrder: ASC }) {
      id: userId
      name: userName
      email
      affiliation: affiliations {
        group {
          id: groupId
          name: groupName
        }
      }
    }
  }
`;

export function useGetAllUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
    ...options,
  });
}
export const GetApplicationByGroupIdDocument = gql`
  query getApplicationByGroupId($groupId: uuid!) {
    group: groupApplication(where: { groupId: { _eq: $groupId } }) {
      app: application {
        id: applicationId
        name: application
        topUrl
      }
    }
  }
`;

export function useGetApplicationByGroupIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetApplicationByGroupIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetApplicationByGroupIdQuery,
    GetApplicationByGroupIdQueryVariables
  >({ query: GetApplicationByGroupIdDocument, ...options });
}
export const GetCategoryByIdDocument = gql`
  query GetCategoryById($categoryId: uuid!) {
    category: categoryByPk(categoryId: $categoryId) {
      categoryName
      validFlag
      displayOrder
      genre {
        genreId
        iocomeType
      }
    }
  }
`;

export function useGetCategoryByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetCategoryByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>({
    query: GetCategoryByIdDocument,
    ...options,
  });
}
export const GetCategoryTotalByMonthDocument = gql`
  query GetCategoryTotalByMonth(
    $fromDate: date
    $toDate: date
    $groupId: uuid!
  ) {
    categoryTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      categoryId
      categoryName
      total
    }
  }
`;

export function useGetCategoryTotalByMonthQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCategoryTotalByMonthQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCategoryTotalByMonthQuery,
    GetCategoryTotalByMonthQueryVariables
  >({ query: GetCategoryTotalByMonthDocument, ...options });
}
export const GetCreditCardDetailByIdDocument = gql`
  query GetCreditCardDetailById($id: uuid!) {
    creditCardDetailByPk(id: $id) {
      id
      date
      amount
      memo
      summaryId
      category {
        categoryId
        categoryName
        genre {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetCreditCardDetailByIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailByIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardDetailByIdQuery,
    GetCreditCardDetailByIdQueryVariables
  >({ query: GetCreditCardDetailByIdDocument, ...options });
}
export const GetCreditCardDetailBySummaryIdDocument = gql`
  query GetCreditCardDetailBySummaryId($id: uuid!) {
    creditCardSummaryByPk(id: $id) {
      id
      creditCardDetail: credit_card_details(orderBy: { date: ASC }) {
        id
        date
        memo
        amount
        category {
          categoryId
          categoryName
          genreByGenreId: genre {
            genreId
            genreName
            genreType
            iocomeType
          }
        }
      }
    }
  }
`;

export function useGetCreditCardDetailBySummaryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailBySummaryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardDetailBySummaryIdQuery,
    GetCreditCardDetailBySummaryIdQueryVariables
  >({ query: GetCreditCardDetailBySummaryIdDocument, ...options });
}
export const GetCreditCardListDocument = gql`
  query GetCreditCardList($groupId: uuid!) {
    allCreditCardSummariesList: creditCardSummary(
      where: { groupId: { _eq: $groupId } }
      orderBy: { withdrawalDate: DESC }
    ) {
      id
      creditCard
      account {
        id: accountId
        name: accountName
      }
      count
      withdrawalDate
      totalAmount
    }
  }
`;

export function useGetCreditCardListQuery(
  options: Omit<Urql.UseQueryArgs<GetCreditCardListQueryVariables>, "query">,
) {
  return Urql.useQuery<GetCreditCardListQuery, GetCreditCardListQueryVariables>(
    { query: GetCreditCardListDocument, ...options },
  );
}
export const GetCreditCardSummaryBetweenWithdrawalDateDocument = gql`
  query GetCreditCardSummaryBetweenWithdrawalDate(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    allCreditCardSummariesList: creditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { groupId: { _eq: $groupId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId: account {
        accountId
        accountName
      }
    }
  }
`;

export function useGetCreditCardSummaryBetweenWithdrawalDateQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardSummaryBetweenWithdrawalDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardSummaryBetweenWithdrawalDateQuery,
    GetCreditCardSummaryBetweenWithdrawalDateQueryVariables
  >({ query: GetCreditCardSummaryBetweenWithdrawalDateDocument, ...options });
}
export const GetCreditCardSummaryByAccountIdBetweenDateDocument = gql`
  query GetCreditCardSummaryByAccountIdBetweenDate(
    $fromDate: date!
    $toDate: date!
    $accountId: uuid!
  ) {
    allCreditCardSummariesList: creditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { accountId: { _eq: $accountId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId: account {
        accountId
        accountName
      }
    }
  }
`;

export function useGetCreditCardSummaryByAccountIdBetweenDateQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardSummaryByAccountIdBetweenDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardSummaryByAccountIdBetweenDateQuery,
    GetCreditCardSummaryByAccountIdBetweenDateQueryVariables
  >({ query: GetCreditCardSummaryByAccountIdBetweenDateDocument, ...options });
}
export const GetDailyDetailByDateDocument = gql`
  query GetDailyDetailByDate(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId
        categoryName
        genreByGenreId: genre {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId
        accountName
      }
      userByUserId: user {
        userId
        userName
      }
    }
  }
`;

export function useGetDailyDetailByDateQuery(
  options: Omit<Urql.UseQueryArgs<GetDailyDetailByDateQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDailyDetailByDateQuery,
    GetDailyDetailByDateQueryVariables
  >({ query: GetDailyDetailByDateDocument, ...options });
}
export const GetDailyDetailByDateAccountIdDocument = gql`
  query GetDailyDetailByDateAccountId(
    $fromDate: date!
    $toDate: date!
    $accountId: uuid!
    $groupId: uuid!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { group_id: $groupId, from_date: $fromDate, to_date: $toDate }
      where: { accountId: { _eq: $accountId } }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId
        categoryName
        genreByGenreId: genre {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId
        accountName
      }
      userByUserId: user {
        userId
        userName
      }
    }
  }
`;

export function useGetDailyDetailByDateAccountIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyDetailByDateAccountIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetDailyDetailByDateAccountIdQuery,
    GetDailyDetailByDateAccountIdQueryVariables
  >({ query: GetDailyDetailByDateAccountIdDocument, ...options });
}
export const GetDailyDetailByDateCategoryIdDocument = gql`
  query GetDailyDetailByDateCategoryId(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
    $categoryId: uuid!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
      where: { categoryId: { _eq: $categoryId } }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId
        categoryName
        genreByGenreId: genre {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId
        accountName
      }
      userByUserId: user {
        userId
        userName
      }
    }
  }
`;

export function useGetDailyDetailByDateCategoryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyDetailByDateCategoryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetDailyDetailByDateCategoryIdQuery,
    GetDailyDetailByDateCategoryIdQueryVariables
  >({ query: GetDailyDetailByDateCategoryIdDocument, ...options });
}
export const GetDailyDetailByDateGenreIdDocument = gql`
  query GetDailyDetailByDateGenreId(
    $genreId: uuid!
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    allCategoriesList: category(where: { genreId: { _eq: $genreId } }) {
      dailyDetailsByCategoryIdList: daily_details(
        where: {
          date: { _gte: $fromDate }
          _and: {
            date: { _lte: $toDate }
            _and: { groupId: { _eq: $groupId } }
          }
        }
      ) {
        id
        date
        amount
        memo
        categoryByCategoryId: category {
          categoryId
          categoryName
          genreByGenreId: genre {
            genreId
            genreName
            genreType
            iocomeType
          }
        }
        accountByAccountId: account {
          accountId
          accountName
        }
        userByUserId: user {
          userId
          userName
        }
      }
    }
  }
`;

export function useGetDailyDetailByDateGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyDetailByDateGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetDailyDetailByDateGenreIdQuery,
    GetDailyDetailByDateGenreIdQueryVariables
  >({ query: GetDailyDetailByDateGenreIdDocument, ...options });
}
export const GetGenreByIdDocument = gql`
  query GetGenreById($genreId: uuid!) {
    genreById: genreByPk(genreId: $genreId) {
      id: genreId
      genreName
      genreType
      iocomeType
      validFlag
      displayOrder
      categories(where: { validFlag: { _eq: true } }) {
        categoryId
        categoryName
      }
    }
  }
`;

export function useGetGenreByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetGenreByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetGenreByIdQuery, GetGenreByIdQueryVariables>({
    query: GetGenreByIdDocument,
    ...options,
  });
}
export const GetGenreTotalByMonthDocument = gql`
  query GetGenreTotalByMonth(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    genreTotalByMonthList: genreTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      total
    }
  }
`;

export function useGetGenreTotalByMonthQuery(
  options: Omit<Urql.UseQueryArgs<GetGenreTotalByMonthQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetGenreTotalByMonthQuery,
    GetGenreTotalByMonthQueryVariables
  >({ query: GetGenreTotalByMonthDocument, ...options });
}
export const GetSummaryCategoriesDocument = gql`
  query GetSummaryCategories($groupId: uuid!) {
    categories: summaryCategoryByGroup(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id
      groupId
      displayOrder
      category: category {
        id: categoryId
        name: categoryName
        genre: genre {
          id: genreId
          name: genreName
          type: genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetSummaryCategoriesQuery(
  options: Omit<Urql.UseQueryArgs<GetSummaryCategoriesQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetSummaryCategoriesQuery,
    GetSummaryCategoriesQueryVariables
  >({ query: GetSummaryCategoriesDocument, ...options });
}
export const GetSummaryCategoryBetweenDateDocument = gql`
  query GetSummaryCategoryBetweenDate(
    $fromDate: date!
    $toDate: date!
    $groupId: uuid!
  ) {
    summaryCategoryList: summaryCategoryByGroup(
      orderBy: { displayOrder: ASC }
      where: { groupId: { _eq: $groupId } }
    ) {
      category {
        name: categoryName
        id: categoryId
        genre {
          iocomeType
        }
        daily: daily_details(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
        creditCard: credit_card_details(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
      }
    }
  }
`;

export function useGetSummaryCategoryBetweenDateQuery(
  options: Omit<
    Urql.UseQueryArgs<GetSummaryCategoryBetweenDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetSummaryCategoryBetweenDateQuery,
    GetSummaryCategoryBetweenDateQueryVariables
  >({ query: GetSummaryCategoryBetweenDateDocument, ...options });
}
export const GetTotalBetweenDateDocument = gql`
  query GetTotalBetweenDate($fromDate: date!, $toDate: date!, $groupId: uuid!) {
    incomeTotalByDate: dailyTotalView(
      where: {
        iocomeType: { _eq: INCOME }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
    outcomeTotalByDate: dailyTotalView(
      where: {
        iocomeType: { _eq: OUTCOME }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
  }
`;

export function useGetTotalBetweenDateQuery(
  options: Omit<Urql.UseQueryArgs<GetTotalBetweenDateQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetTotalBetweenDateQuery,
    GetTotalBetweenDateQueryVariables
  >({ query: GetTotalBetweenDateDocument, ...options });
}
export const GetTransferCategoryByDocument = gql`
  query GetTransferCategoryBy($groupId: uuid!) {
    transferCategory: transferCategoryByPk(groupId: $groupId) {
      id: groupId
      incomeCategoryId
      outcomeCategoryId
    }
  }
`;

export function useGetTransferCategoryByQuery(
  options: Omit<
    Urql.UseQueryArgs<GetTransferCategoryByQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetTransferCategoryByQuery,
    GetTransferCategoryByQueryVariables
  >({ query: GetTransferCategoryByDocument, ...options });
}
export const GetUserByEmailDocument = gql`
  query GetUserByEmail($email: String!) {
    userByEmail: user(where: { email: { _eq: $email } }) {
      email
      id: userId
      name: userName
      affiliation: affiliations {
        group: group {
          id: groupId
          name: groupName
        }
        groupRole: group_role {
          id: groupRoleId
          role
        }
      }
    }
  }
`;

export function useGetUserByEmailQuery(
  options: Omit<Urql.UseQueryArgs<GetUserByEmailQueryVariables>, "query">,
) {
  return Urql.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>({
    query: GetUserByEmailDocument,
    ...options,
  });
}
export const GetValidAccountsDocument = gql`
  query GetValidAccounts($groupId: uuid!) {
    allAccountsList: account(
      where: { validFlag: { _eq: true }, _and: { groupId: { _eq: $groupId } } }
      orderBy: { displayOrder: ASC }
    ) {
      accountId
      accountName
    }
  }
`;

export function useGetValidAccountsQuery(
  options: Omit<Urql.UseQueryArgs<GetValidAccountsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetValidAccountsQuery, GetValidAccountsQueryVariables>({
    query: GetValidAccountsDocument,
    ...options,
  });
}
export const GetValidCategoryByGenreIdDocument = gql`
  query GetValidCategoryByGenreId($groupId: uuid!, $genreId: uuid) {
    genreById: genre(
      where: {
        groupId: { _eq: $groupId }
        _and: { validFlag: { _eq: true }, _and: { genreId: { _eq: $genreId } } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id: genreId
      name: genreName
      categories(where: { validFlag: { _eq: true } }) {
        id: categoryId
        name: categoryName
        displayOrder
      }
    }
  }
`;

export function useGetValidCategoryByGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetValidCategoryByGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetValidCategoryByGenreIdQuery,
    GetValidCategoryByGenreIdQueryVariables
  >({ query: GetValidCategoryByGenreIdDocument, ...options });
}
export const GetValidGenreListByIocomeTypeDocument = gql`
  query GetValidGenreListByIocomeType(
    $iocomeType: iocome_type!
    $groupId: uuid!
  ) {
    allGenresList: genre(
      where: {
        validFlag: { _eq: true }
        iocomeType: { _eq: $iocomeType }
        groupId: { _eq: $groupId }
      }
      orderBy: { displayOrder: ASC }
    ) {
      genreId
      genreName
      genreType
      iocomeType
      displayOrder
      categoriesByGenreIdList: categories(
        orderBy: { displayOrder: ASC }
        where: { validFlag: { _eq: true } }
      ) {
        categoryId
        categoryName
        displayOrder
      }
    }
  }
`;

export function useGetValidGenreListByIocomeTypeQuery(
  options: Omit<
    Urql.UseQueryArgs<GetValidGenreListByIocomeTypeQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetValidGenreListByIocomeTypeQuery,
    GetValidGenreListByIocomeTypeQueryVariables
  >({ query: GetValidGenreListByIocomeTypeDocument, ...options });
}
