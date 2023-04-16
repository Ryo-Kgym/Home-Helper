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
  BigFloat: any;
  Date: any;
  Datetime: any;
  UUID: any;
};

export type Account = Node & {
  __typename?: "Account";
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  /** Reads and enables pagination through a set of `CreditCardSummary`. */
  creditCardSummariesByAccountIdList: Array<CreditCardSummary>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailsByAccountIdList: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  ownerUserId: Scalars["String"];
  /** Reads a single `User` that is related to this `Account`. */
  userByOwnerUserId?: Maybe<User>;
  validFlag?: Maybe<Scalars["Boolean"]>;
};

export type AccountCreditCardSummariesByAccountIdListArgs = {
  condition?: InputMaybe<CreditCardSummaryCondition>;
  filter?: InputMaybe<CreditCardSummaryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummariesOrderBy>>;
};

export type AccountDailyDetailsByAccountIdListArgs = {
  condition?: InputMaybe<DailyDetailCondition>;
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailsOrderBy>>;
};

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `accountName` field. */
  accountName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `ownerUserId` field. */
  ownerUserId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `validFlag` field. */
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `accountName` field. */
  accountName?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `ownerUserId` field. */
  ownerUserId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `Account` */
export type AccountInput = {
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  ownerUserId: Scalars["String"];
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  accountId?: InputMaybe<Scalars["String"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  ownerUserId?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  AccountNameAsc = "ACCOUNT_NAME_ASC",
  AccountNameDesc = "ACCOUNT_NAME_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  Natural = "NATURAL",
  OwnerUserIdAsc = "OWNER_USER_ID_ASC",
  OwnerUserIdDesc = "OWNER_USER_ID_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  ValidFlagAsc = "VALID_FLAG_ASC",
  ValidFlagDesc = "VALID_FLAG_DESC",
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["BigFloat"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["BigFloat"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["BigFloat"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["BigFloat"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["BigFloat"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["BigFloat"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["BigFloat"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["BigFloat"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["BigFloat"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["BigFloat"]>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Boolean"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Boolean"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Boolean"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Boolean"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Boolean"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Boolean"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Boolean"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Boolean"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Boolean"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  CategoryNameAsc = "CATEGORY_NAME_ASC",
  CategoryNameDesc = "CATEGORY_NAME_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  GenreIdAsc = "GENRE_ID_ASC",
  GenreIdDesc = "GENRE_ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  ValidFlagAsc = "VALID_FLAG_ASC",
  ValidFlagDesc = "VALID_FLAG_DESC",
}

export type Category = Node & {
  __typename?: "Category";
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  /** Reads and enables pagination through a set of `CreditCardDetail`. */
  creditCardDetailsByCategoryIdList: Array<CreditCardDetail>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailsByCategoryIdList: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** Reads a single `Genre` that is related to this `Category`. */
  genreByGenreId?: Maybe<Genre>;
  genreId: Scalars["String"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** Reads and enables pagination through a set of `SummaryCategory`. */
  summaryCategoriesByCategoryIdList: Array<SummaryCategory>;
  validFlag?: Maybe<Scalars["Boolean"]>;
  /** Reads and enables pagination through a set of `YearlySummaryCategory`. */
  yearlySummaryCategoriesByCategoryIdList: Array<YearlySummaryCategory>;
};

export type CategoryCreditCardDetailsByCategoryIdListArgs = {
  condition?: InputMaybe<CreditCardDetailCondition>;
  filter?: InputMaybe<CreditCardDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailsOrderBy>>;
};

export type CategoryDailyDetailsByCategoryIdListArgs = {
  condition?: InputMaybe<DailyDetailCondition>;
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailsOrderBy>>;
};

export type CategorySummaryCategoriesByCategoryIdListArgs = {
  condition?: InputMaybe<SummaryCategoryCondition>;
  filter?: InputMaybe<SummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoriesOrderBy>>;
};

export type CategoryYearlySummaryCategoriesByCategoryIdListArgs = {
  condition?: InputMaybe<YearlySummaryCategoryCondition>;
  filter?: InputMaybe<YearlySummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<YearlySummaryCategoriesOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `categoryName` field. */
  categoryName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `genreId` field. */
  genreId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `validFlag` field. */
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `categoryName` field. */
  categoryName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `genreId` field. */
  genreId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryId?: InputMaybe<Scalars["String"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /** The `Account` to be created by this mutation. */
  account: AccountInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  __typename?: "CreateAccountPayload";
  /** The `Account` that was created by this mutation. */
  account?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Account`. */
  userByOwnerUserId?: Maybe<User>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: "CreateCategoryPayload";
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Reads a single `Genre` that is related to this `Category`. */
  genreByGenreId?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `CreditCardDetail` mutation. */
export type CreateCreditCardDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `CreditCardDetail` to be created by this mutation. */
  creditCardDetail: CreditCardDetailInput;
};

/** The output of our create `CreditCardDetail` mutation. */
export type CreateCreditCardDetailPayload = {
  __typename?: "CreateCreditCardDetailPayload";
  /** Reads a single `Category` that is related to this `CreditCardDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardDetail` that was created by this mutation. */
  creditCardDetail?: Maybe<CreditCardDetail>;
  /** Reads a single `CreditCardSummary` that is related to this `CreditCardDetail`. */
  creditCardSummaryBySummaryId?: Maybe<CreditCardSummary>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `CreditCardSummary` mutation. */
export type CreateCreditCardSummaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `CreditCardSummary` to be created by this mutation. */
  creditCardSummary: CreditCardSummaryInput;
};

/** The output of our create `CreditCardSummary` mutation. */
export type CreateCreditCardSummaryPayload = {
  __typename?: "CreateCreditCardSummaryPayload";
  /** Reads a single `Account` that is related to this `CreditCardSummary`. */
  accountByAccountId?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardSummary` that was created by this mutation. */
  creditCardSummary?: Maybe<CreditCardSummary>;
  /** Reads a single `ImportFileHistory` that is related to this `CreditCardSummary`. */
  importFileHistoryById?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `DailyDetail` mutation. */
export type CreateDailyDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `DailyDetail` to be created by this mutation. */
  dailyDetail: DailyDetailInput;
};

/** The output of our create `DailyDetail` mutation. */
export type CreateDailyDetailPayload = {
  __typename?: "CreateDailyDetailPayload";
  /** Reads a single `Account` that is related to this `DailyDetail`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads a single `Category` that is related to this `DailyDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `DailyDetail` that was created by this mutation. */
  dailyDetail?: Maybe<DailyDetail>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DailyDetail`. */
  userByUserId?: Maybe<User>;
};

/** All input for the create `Genre` mutation. */
export type CreateGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `Genre` to be created by this mutation. */
  genre: GenreInput;
};

/** The output of our create `Genre` mutation. */
export type CreateGenrePayload = {
  __typename?: "CreateGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Genre` that was created by this mutation. */
  genre?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `ImportFileHistory` mutation. */
export type CreateImportFileHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `ImportFileHistory` to be created by this mutation. */
  importFileHistory: ImportFileHistoryInput;
};

/** The output of our create `ImportFileHistory` mutation. */
export type CreateImportFileHistoryPayload = {
  __typename?: "CreateImportFileHistoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `ImportFileHistory` that was created by this mutation. */
  importFileHistory?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `SummaryCategory` mutation. */
export type CreateSummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `SummaryCategory` to be created by this mutation. */
  summaryCategory: SummaryCategoryInput;
};

/** The output of our create `SummaryCategory` mutation. */
export type CreateSummaryCategoryPayload = {
  __typename?: "CreateSummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `SummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SummaryCategory` that was created by this mutation. */
  summaryCategory?: Maybe<SummaryCategory>;
  /** Reads a single `User` that is related to this `SummaryCategory`. */
  userByUserId?: Maybe<User>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: "CreateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
};

/** All input for the create `YearlySummaryCategory` mutation. */
export type CreateYearlySummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `YearlySummaryCategory` to be created by this mutation. */
  yearlySummaryCategory: YearlySummaryCategoryInput;
};

/** The output of our create `YearlySummaryCategory` mutation. */
export type CreateYearlySummaryCategoryPayload = {
  __typename?: "CreateYearlySummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `YearlySummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `YearlySummaryCategory`. */
  userByUserId?: Maybe<User>;
  /** The `YearlySummaryCategory` that was created by this mutation. */
  yearlySummaryCategory?: Maybe<YearlySummaryCategory>;
};

export type CreditCardDetail = Node & {
  __typename?: "CreditCardDetail";
  amount: Scalars["BigFloat"];
  /** Reads a single `Category` that is related to this `CreditCardDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars["String"];
  /** Reads a single `CreditCardSummary` that is related to this `CreditCardDetail`. */
  creditCardSummaryBySummaryId?: Maybe<CreditCardSummary>;
  date: Scalars["Date"];
  memo?: Maybe<Scalars["String"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  serialNo: Scalars["Int"];
  summaryId: Scalars["UUID"];
};

/**
 * A condition to be used against `CreditCardDetail` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CreditCardDetailCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars["BigFloat"]>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `serialNo` field. */
  serialNo?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `summaryId` field. */
  summaryId?: InputMaybe<Scalars["UUID"]>;
};

/** A filter to be used against `CreditCardDetail` object types. All fields are combined with a logical ‘and.’ */
export type CreditCardDetailFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CreditCardDetailFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `memo` field. */
  memo?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CreditCardDetailFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CreditCardDetailFilter>>;
  /** Filter by the object’s `serialNo` field. */
  serialNo?: InputMaybe<IntFilter>;
  /** Filter by the object’s `summaryId` field. */
  summaryId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `CreditCardDetail` */
export type CreditCardDetailInput = {
  amount: Scalars["BigFloat"];
  categoryId: Scalars["String"];
  date: Scalars["Date"];
  memo?: InputMaybe<Scalars["String"]>;
  serialNo?: InputMaybe<Scalars["Int"]>;
  summaryId: Scalars["UUID"];
};

/** Represents an update to a `CreditCardDetail`. Fields that are set will be updated. */
export type CreditCardDetailPatch = {
  amount?: InputMaybe<Scalars["BigFloat"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["Date"]>;
  memo?: InputMaybe<Scalars["String"]>;
  serialNo?: InputMaybe<Scalars["Int"]>;
  summaryId?: InputMaybe<Scalars["UUID"]>;
};

/** Methods to use when ordering `CreditCardDetail`. */
export enum CreditCardDetailsOrderBy {
  AmountAsc = "AMOUNT_ASC",
  AmountDesc = "AMOUNT_DESC",
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  MemoAsc = "MEMO_ASC",
  MemoDesc = "MEMO_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  SerialNoAsc = "SERIAL_NO_ASC",
  SerialNoDesc = "SERIAL_NO_DESC",
  SummaryIdAsc = "SUMMARY_ID_ASC",
  SummaryIdDesc = "SUMMARY_ID_DESC",
}

/** Methods to use when ordering `CreditCardSummary`. */
export enum CreditCardSummariesOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  CountAsc = "COUNT_ASC",
  CountDesc = "COUNT_DESC",
  CreditCardAsc = "CREDIT_CARD_ASC",
  CreditCardDesc = "CREDIT_CARD_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  TotalAmountAsc = "TOTAL_AMOUNT_ASC",
  TotalAmountDesc = "TOTAL_AMOUNT_DESC",
  WithdrawalDateAsc = "WITHDRAWAL_DATE_ASC",
  WithdrawalDateDesc = "WITHDRAWAL_DATE_DESC",
}

export type CreditCardSummary = Node & {
  __typename?: "CreditCardSummary";
  /** Reads a single `Account` that is related to this `CreditCardSummary`. */
  accountByAccountId?: Maybe<Account>;
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  /** Reads and enables pagination through a set of `CreditCardDetail`. */
  creditCardDetailsBySummaryIdList: Array<CreditCardDetail>;
  id: Scalars["UUID"];
  /** Reads a single `ImportFileHistory` that is related to this `CreditCardSummary`. */
  importFileHistoryById?: Maybe<ImportFileHistory>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  totalAmount: Scalars["BigFloat"];
  withdrawalDate: Scalars["Date"];
};

export type CreditCardSummaryCreditCardDetailsBySummaryIdListArgs = {
  condition?: InputMaybe<CreditCardDetailCondition>;
  filter?: InputMaybe<CreditCardDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailsOrderBy>>;
};

/**
 * A condition to be used against `CreditCardSummary` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CreditCardSummaryCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `count` field. */
  count?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `creditCard` field. */
  creditCard?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `totalAmount` field. */
  totalAmount?: InputMaybe<Scalars["BigFloat"]>;
  /** Checks for equality with the object’s `withdrawalDate` field. */
  withdrawalDate?: InputMaybe<Scalars["Date"]>;
};

/** A filter to be used against `CreditCardSummary` object types. All fields are combined with a logical ‘and.’ */
export type CreditCardSummaryFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CreditCardSummaryFilter>>;
  /** Filter by the object’s `count` field. */
  count?: InputMaybe<IntFilter>;
  /** Filter by the object’s `creditCard` field. */
  creditCard?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CreditCardSummaryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CreditCardSummaryFilter>>;
  /** Filter by the object’s `totalAmount` field. */
  totalAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `withdrawalDate` field. */
  withdrawalDate?: InputMaybe<DateFilter>;
};

/** An input for mutations affecting `CreditCardSummary` */
export type CreditCardSummaryInput = {
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  id: Scalars["UUID"];
  totalAmount: Scalars["BigFloat"];
  withdrawalDate: Scalars["Date"];
};

/** Represents an update to a `CreditCardSummary`. Fields that are set will be updated. */
export type CreditCardSummaryPatch = {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  totalAmount?: InputMaybe<Scalars["BigFloat"]>;
  withdrawalDate?: InputMaybe<Scalars["Date"]>;
};

export type CreditCardSummaryTotalByAccountView = {
  __typename?: "CreditCardSummaryTotalByAccountView";
  accountId?: Maybe<Scalars["String"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  iocomeType?: Maybe<IocomeType>;
  total?: Maybe<Scalars["BigFloat"]>;
};

/**
 * A condition to be used against `CreditCardSummaryTotalByAccountView` object
 * types. All fields are tested for equality and combined with a logical ‘and.’
 */
export type CreditCardSummaryTotalByAccountViewCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `accountName` field. */
  accountName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `total` field. */
  total?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `CreditCardSummaryTotalByAccountView` object types. All fields are combined with a logical ‘and.’ */
export type CreditCardSummaryTotalByAccountViewFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `accountName` field. */
  accountName?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewFilter>>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CreditCardSummaryTotalByAccountViewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewFilter>>;
  /** Filter by the object’s `total` field. */
  total?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `CreditCardSummaryTotalByAccountView`. */
export enum CreditCardSummaryTotalByAccountViewsOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  AccountNameAsc = "ACCOUNT_NAME_ASC",
  AccountNameDesc = "ACCOUNT_NAME_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  TotalAsc = "TOTAL_ASC",
  TotalDesc = "TOTAL_DESC",
}

export type DailyDetail = Node & {
  __typename?: "DailyDetail";
  /** Reads a single `Account` that is related to this `DailyDetail`. */
  accountByAccountId?: Maybe<Account>;
  accountId: Scalars["String"];
  amount: Scalars["BigFloat"];
  /** Reads a single `Category` that is related to this `DailyDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars["String"];
  date: Scalars["Date"];
  memo?: Maybe<Scalars["String"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  serialNo: Scalars["Int"];
  /** Reads a single `User` that is related to this `DailyDetail`. */
  userByUserId?: Maybe<User>;
  userId: Scalars["String"];
};

/**
 * A condition to be used against `DailyDetail` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DailyDetailCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars["BigFloat"]>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `serialNo` field. */
  serialNo?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `DailyDetail` object types. All fields are combined with a logical ‘and.’ */
export type DailyDetailFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<DailyDetailFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `memo` field. */
  memo?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<DailyDetailFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<DailyDetailFilter>>;
  /** Filter by the object’s `serialNo` field. */
  serialNo?: InputMaybe<IntFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `DailyDetail` */
export type DailyDetailInput = {
  accountId: Scalars["String"];
  amount: Scalars["BigFloat"];
  categoryId: Scalars["String"];
  date: Scalars["Date"];
  memo?: InputMaybe<Scalars["String"]>;
  serialNo?: InputMaybe<Scalars["Int"]>;
  userId: Scalars["String"];
};

/** Represents an update to a `DailyDetail`. Fields that are set will be updated. */
export type DailyDetailPatch = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["BigFloat"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["Date"]>;
  memo?: InputMaybe<Scalars["String"]>;
  serialNo?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** Methods to use when ordering `DailyDetail`. */
export enum DailyDetailsOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  AmountAsc = "AMOUNT_ASC",
  AmountDesc = "AMOUNT_DESC",
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  MemoAsc = "MEMO_ASC",
  MemoDesc = "MEMO_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  SerialNoAsc = "SERIAL_NO_ASC",
  SerialNoDesc = "SERIAL_NO_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
}

export type DailyTotalView = {
  __typename?: "DailyTotalView";
  date?: Maybe<Scalars["Date"]>;
  iocomeType?: Maybe<IocomeType>;
  total?: Maybe<Scalars["BigFloat"]>;
};

/**
 * A condition to be used against `DailyTotalView` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DailyTotalViewCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `total` field. */
  total?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `DailyTotalView` object types. All fields are combined with a logical ‘and.’ */
export type DailyTotalViewFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<DailyTotalViewFilter>>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<DailyTotalViewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<DailyTotalViewFilter>>;
  /** Filter by the object’s `total` field. */
  total?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `DailyTotalView`. */
export enum DailyTotalViewsOrderBy {
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  TotalAsc = "TOTAL_ASC",
  TotalDesc = "TOTAL_DESC",
}

/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Date"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Date"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Date"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Date"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Date"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Date"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Date"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Date"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Date"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Date"]>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Datetime"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Datetime"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Datetime"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Datetime"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Datetime"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Datetime"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Datetime"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Datetime"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Datetime"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Datetime"]>>;
};

/** All input for the `deleteAccountByAccountId` mutation. */
export type DeleteAccountByAccountIdInput = {
  accountId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Account` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: "DeleteAccountPayload";
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedAccountId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Account`. */
  userByOwnerUserId?: Maybe<User>;
};

/** All input for the `deleteCategoryByCategoryId` mutation. */
export type DeleteCategoryByCategoryIdInput = {
  categoryId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: "DeleteCategoryPayload";
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedCategoryId?: Maybe<Scalars["ID"]>;
  /** Reads a single `Genre` that is related to this `Category`. */
  genreByGenreId?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCreditCardDetailBySerialNo` mutation. */
export type DeleteCreditCardDetailBySerialNoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  serialNo: Scalars["Int"];
};

/** All input for the `deleteCreditCardDetail` mutation. */
export type DeleteCreditCardDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `CreditCardDetail` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `CreditCardDetail` mutation. */
export type DeleteCreditCardDetailPayload = {
  __typename?: "DeleteCreditCardDetailPayload";
  /** Reads a single `Category` that is related to this `CreditCardDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardDetail` that was deleted by this mutation. */
  creditCardDetail?: Maybe<CreditCardDetail>;
  /** Reads a single `CreditCardSummary` that is related to this `CreditCardDetail`. */
  creditCardSummaryBySummaryId?: Maybe<CreditCardSummary>;
  deletedCreditCardDetailId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCreditCardSummaryById` mutation. */
export type DeleteCreditCardSummaryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
};

/** All input for the `deleteCreditCardSummary` mutation. */
export type DeleteCreditCardSummaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `CreditCardSummary` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `CreditCardSummary` mutation. */
export type DeleteCreditCardSummaryPayload = {
  __typename?: "DeleteCreditCardSummaryPayload";
  /** Reads a single `Account` that is related to this `CreditCardSummary`. */
  accountByAccountId?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardSummary` that was deleted by this mutation. */
  creditCardSummary?: Maybe<CreditCardSummary>;
  deletedCreditCardSummaryId?: Maybe<Scalars["ID"]>;
  /** Reads a single `ImportFileHistory` that is related to this `CreditCardSummary`. */
  importFileHistoryById?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteDailyDetailBySerialNo` mutation. */
export type DeleteDailyDetailBySerialNoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  serialNo: Scalars["Int"];
};

/** All input for the `deleteDailyDetail` mutation. */
export type DeleteDailyDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `DailyDetail` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `DailyDetail` mutation. */
export type DeleteDailyDetailPayload = {
  __typename?: "DeleteDailyDetailPayload";
  /** Reads a single `Account` that is related to this `DailyDetail`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads a single `Category` that is related to this `DailyDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `DailyDetail` that was deleted by this mutation. */
  dailyDetail?: Maybe<DailyDetail>;
  deletedDailyDetailId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DailyDetail`. */
  userByUserId?: Maybe<User>;
};

/** All input for the `deleteGenreByGenreId` mutation. */
export type DeleteGenreByGenreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  genreId: Scalars["String"];
};

/** All input for the `deleteGenre` mutation. */
export type DeleteGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Genre` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `Genre` mutation. */
export type DeleteGenrePayload = {
  __typename?: "DeleteGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedGenreId?: Maybe<Scalars["ID"]>;
  /** The `Genre` that was deleted by this mutation. */
  genre?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteImportFileHistoryById` mutation. */
export type DeleteImportFileHistoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
};

/** All input for the `deleteImportFileHistory` mutation. */
export type DeleteImportFileHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `ImportFileHistory` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `ImportFileHistory` mutation. */
export type DeleteImportFileHistoryPayload = {
  __typename?: "DeleteImportFileHistoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedImportFileHistoryId?: Maybe<Scalars["ID"]>;
  /** The `ImportFileHistory` that was deleted by this mutation. */
  importFileHistory?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteSummaryCategoryById` mutation. */
export type DeleteSummaryCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
};

/** All input for the `deleteSummaryCategory` mutation. */
export type DeleteSummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `SummaryCategory` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `SummaryCategory` mutation. */
export type DeleteSummaryCategoryPayload = {
  __typename?: "DeleteSummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `SummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedSummaryCategoryId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SummaryCategory` that was deleted by this mutation. */
  summaryCategory?: Maybe<SummaryCategory>;
  /** Reads a single `User` that is related to this `SummaryCategory`. */
  userByUserId?: Maybe<User>;
};

/** All input for the `deleteUserByUserId` mutation. */
export type DeleteUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: "DeleteUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedUserId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
};

/** All input for the `deleteYearlySummaryCategoryById` mutation. */
export type DeleteYearlySummaryCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
};

/** All input for the `deleteYearlySummaryCategory` mutation. */
export type DeleteYearlySummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `YearlySummaryCategory` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `YearlySummaryCategory` mutation. */
export type DeleteYearlySummaryCategoryPayload = {
  __typename?: "DeleteYearlySummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `YearlySummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedYearlySummaryCategoryId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `YearlySummaryCategory`. */
  userByUserId?: Maybe<User>;
  /** The `YearlySummaryCategory` that was deleted by this mutation. */
  yearlySummaryCategory?: Maybe<YearlySummaryCategory>;
};

export type Genre = Node & {
  __typename?: "Genre";
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByGenreIdList: Array<Category>;
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  genreName: Scalars["String"];
  genreType: GenreType;
  iocomeType: IocomeType;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

export type GenreCategoriesByGenreIdListArgs = {
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** A condition to be used against `Genre` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GenreCondition = {
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `genreId` field. */
  genreId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `genreName` field. */
  genreName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `genreType` field. */
  genreType?: InputMaybe<GenreType>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `validFlag` field. */
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** A filter to be used against `Genre` object types. All fields are combined with a logical ‘and.’ */
export type GenreFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GenreFilter>>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `genreId` field. */
  genreId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `genreName` field. */
  genreName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `genreType` field. */
  genreType?: InputMaybe<GenreTypeFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GenreFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GenreFilter>>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `Genre` */
export type GenreInput = {
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  genreName: Scalars["String"];
  genreType: GenreType;
  iocomeType: IocomeType;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `Genre`. Fields that are set will be updated. */
export type GenrePatch = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<GenreType>;
  iocomeType?: InputMaybe<IocomeType>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

export enum GenreType {
  Fixed = "FIXED",
  Fluctuation = "FLUCTUATION",
}

/** A filter to be used against GenreType fields. All fields are combined with a logical ‘and.’ */
export type GenreTypeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<GenreType>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<GenreType>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<GenreType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<GenreType>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<GenreType>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<GenreType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<GenreType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<GenreType>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<GenreType>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<GenreType>>;
};

/** Methods to use when ordering `Genre`. */
export enum GenresOrderBy {
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  GenreIdAsc = "GENRE_ID_ASC",
  GenreIdDesc = "GENRE_ID_DESC",
  GenreNameAsc = "GENRE_NAME_ASC",
  GenreNameDesc = "GENRE_NAME_DESC",
  GenreTypeAsc = "GENRE_TYPE_ASC",
  GenreTypeDesc = "GENRE_TYPE_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  ValidFlagAsc = "VALID_FLAG_ASC",
  ValidFlagDesc = "VALID_FLAG_DESC",
}

/** Methods to use when ordering `ImportFileHistory`. */
export enum ImportFileHistoriesOrderBy {
  FileNameAsc = "FILE_NAME_ASC",
  FileNameDesc = "FILE_NAME_DESC",
  FileTypeAsc = "FILE_TYPE_ASC",
  FileTypeDesc = "FILE_TYPE_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  ImportDatetimeAsc = "IMPORT_DATETIME_ASC",
  ImportDatetimeDesc = "IMPORT_DATETIME_DESC",
  ImportUserIdAsc = "IMPORT_USER_ID_ASC",
  ImportUserIdDesc = "IMPORT_USER_ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type ImportFileHistory = Node & {
  __typename?: "ImportFileHistory";
  /** Reads a single `CreditCardSummary` that is related to this `ImportFileHistory`. */
  creditCardSummaryById?: Maybe<CreditCardSummary>;
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  id: Scalars["UUID"];
  importDatetime: Scalars["Datetime"];
  importUserId: Scalars["String"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/**
 * A condition to be used against `ImportFileHistory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ImportFileHistoryCondition = {
  /** Checks for equality with the object’s `fileName` field. */
  fileName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `fileType` field. */
  fileType?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `importDatetime` field. */
  importDatetime?: InputMaybe<Scalars["Datetime"]>;
  /** Checks for equality with the object’s `importUserId` field. */
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `ImportFileHistory` object types. All fields are combined with a logical ‘and.’ */
export type ImportFileHistoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ImportFileHistoryFilter>>;
  /** Filter by the object’s `fileName` field. */
  fileName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fileType` field. */
  fileType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `importDatetime` field. */
  importDatetime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `importUserId` field. */
  importUserId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ImportFileHistoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ImportFileHistoryFilter>>;
};

/** An input for mutations affecting `ImportFileHistory` */
export type ImportFileHistoryInput = {
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  id: Scalars["UUID"];
  importDatetime: Scalars["Datetime"];
  importUserId: Scalars["String"];
};

/** Represents an update to a `ImportFileHistory`. Fields that are set will be updated. */
export type ImportFileHistoryPatch = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  importDatetime?: InputMaybe<Scalars["Datetime"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Int"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Int"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Int"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Int"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Int"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Int"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Int"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Int"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Int"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export enum IocomeType {
  Income = "INCOME",
  Outcome = "OUTCOME",
}

/** A filter to be used against IocomeType fields. All fields are combined with a logical ‘and.’ */
export type IocomeTypeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<IocomeType>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<IocomeType>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<IocomeType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<IocomeType>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<IocomeType>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<IocomeType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<IocomeType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<IocomeType>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<IocomeType>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<IocomeType>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `CreditCardDetail`. */
  createCreditCardDetail?: Maybe<CreateCreditCardDetailPayload>;
  /** Creates a single `CreditCardSummary`. */
  createCreditCardSummary?: Maybe<CreateCreditCardSummaryPayload>;
  /** Creates a single `DailyDetail`. */
  createDailyDetail?: Maybe<CreateDailyDetailPayload>;
  /** Creates a single `Genre`. */
  createGenre?: Maybe<CreateGenrePayload>;
  /** Creates a single `ImportFileHistory`. */
  createImportFileHistory?: Maybe<CreateImportFileHistoryPayload>;
  /** Creates a single `SummaryCategory`. */
  createSummaryCategory?: Maybe<CreateSummaryCategoryPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `YearlySummaryCategory`. */
  createYearlySummaryCategory?: Maybe<CreateYearlySummaryCategoryPayload>;
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccountByAccountId?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByCategoryId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `CreditCardDetail` using its globally unique id. */
  deleteCreditCardDetail?: Maybe<DeleteCreditCardDetailPayload>;
  /** Deletes a single `CreditCardDetail` using a unique key. */
  deleteCreditCardDetailBySerialNo?: Maybe<DeleteCreditCardDetailPayload>;
  /** Deletes a single `CreditCardSummary` using its globally unique id. */
  deleteCreditCardSummary?: Maybe<DeleteCreditCardSummaryPayload>;
  /** Deletes a single `CreditCardSummary` using a unique key. */
  deleteCreditCardSummaryById?: Maybe<DeleteCreditCardSummaryPayload>;
  /** Deletes a single `DailyDetail` using its globally unique id. */
  deleteDailyDetail?: Maybe<DeleteDailyDetailPayload>;
  /** Deletes a single `DailyDetail` using a unique key. */
  deleteDailyDetailBySerialNo?: Maybe<DeleteDailyDetailPayload>;
  /** Deletes a single `Genre` using its globally unique id. */
  deleteGenre?: Maybe<DeleteGenrePayload>;
  /** Deletes a single `Genre` using a unique key. */
  deleteGenreByGenreId?: Maybe<DeleteGenrePayload>;
  /** Deletes a single `ImportFileHistory` using its globally unique id. */
  deleteImportFileHistory?: Maybe<DeleteImportFileHistoryPayload>;
  /** Deletes a single `ImportFileHistory` using a unique key. */
  deleteImportFileHistoryById?: Maybe<DeleteImportFileHistoryPayload>;
  /** Deletes a single `SummaryCategory` using its globally unique id. */
  deleteSummaryCategory?: Maybe<DeleteSummaryCategoryPayload>;
  /** Deletes a single `SummaryCategory` using a unique key. */
  deleteSummaryCategoryById?: Maybe<DeleteSummaryCategoryPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUserId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `YearlySummaryCategory` using its globally unique id. */
  deleteYearlySummaryCategory?: Maybe<DeleteYearlySummaryCategoryPayload>;
  /** Deletes a single `YearlySummaryCategory` using a unique key. */
  deleteYearlySummaryCategoryById?: Maybe<DeleteYearlySummaryCategoryPayload>;
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByAccountId?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByCategoryId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `CreditCardDetail` using its globally unique id and a patch. */
  updateCreditCardDetail?: Maybe<UpdateCreditCardDetailPayload>;
  /** Updates a single `CreditCardDetail` using a unique key and a patch. */
  updateCreditCardDetailBySerialNo?: Maybe<UpdateCreditCardDetailPayload>;
  /** Updates a single `CreditCardSummary` using its globally unique id and a patch. */
  updateCreditCardSummary?: Maybe<UpdateCreditCardSummaryPayload>;
  /** Updates a single `CreditCardSummary` using a unique key and a patch. */
  updateCreditCardSummaryById?: Maybe<UpdateCreditCardSummaryPayload>;
  /** Updates a single `DailyDetail` using its globally unique id and a patch. */
  updateDailyDetail?: Maybe<UpdateDailyDetailPayload>;
  /** Updates a single `DailyDetail` using a unique key and a patch. */
  updateDailyDetailBySerialNo?: Maybe<UpdateDailyDetailPayload>;
  /** Updates a single `Genre` using its globally unique id and a patch. */
  updateGenre?: Maybe<UpdateGenrePayload>;
  /** Updates a single `Genre` using a unique key and a patch. */
  updateGenreByGenreId?: Maybe<UpdateGenrePayload>;
  /** Updates a single `ImportFileHistory` using its globally unique id and a patch. */
  updateImportFileHistory?: Maybe<UpdateImportFileHistoryPayload>;
  /** Updates a single `ImportFileHistory` using a unique key and a patch. */
  updateImportFileHistoryById?: Maybe<UpdateImportFileHistoryPayload>;
  /** Updates a single `SummaryCategory` using its globally unique id and a patch. */
  updateSummaryCategory?: Maybe<UpdateSummaryCategoryPayload>;
  /** Updates a single `SummaryCategory` using a unique key and a patch. */
  updateSummaryCategoryById?: Maybe<UpdateSummaryCategoryPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUserId?: Maybe<UpdateUserPayload>;
  /** Updates a single `YearlySummaryCategory` using its globally unique id and a patch. */
  updateYearlySummaryCategory?: Maybe<UpdateYearlySummaryCategoryPayload>;
  /** Updates a single `YearlySummaryCategory` using a unique key and a patch. */
  updateYearlySummaryCategoryById?: Maybe<UpdateYearlySummaryCategoryPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCreditCardDetailArgs = {
  input: CreateCreditCardDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCreditCardSummaryArgs = {
  input: CreateCreditCardSummaryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDailyDetailArgs = {
  input: CreateDailyDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateImportFileHistoryArgs = {
  input: CreateImportFileHistoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSummaryCategoryArgs = {
  input: CreateSummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateYearlySummaryCategoryArgs = {
  input: CreateYearlySummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByAccountIdArgs = {
  input: DeleteAccountByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByCategoryIdArgs = {
  input: DeleteCategoryByCategoryIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCreditCardDetailArgs = {
  input: DeleteCreditCardDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCreditCardDetailBySerialNoArgs = {
  input: DeleteCreditCardDetailBySerialNoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCreditCardSummaryArgs = {
  input: DeleteCreditCardSummaryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCreditCardSummaryByIdArgs = {
  input: DeleteCreditCardSummaryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDailyDetailArgs = {
  input: DeleteDailyDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDailyDetailBySerialNoArgs = {
  input: DeleteDailyDetailBySerialNoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGenreArgs = {
  input: DeleteGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGenreByGenreIdArgs = {
  input: DeleteGenreByGenreIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteImportFileHistoryArgs = {
  input: DeleteImportFileHistoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteImportFileHistoryByIdArgs = {
  input: DeleteImportFileHistoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSummaryCategoryArgs = {
  input: DeleteSummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSummaryCategoryByIdArgs = {
  input: DeleteSummaryCategoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUserIdArgs = {
  input: DeleteUserByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYearlySummaryCategoryArgs = {
  input: DeleteYearlySummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYearlySummaryCategoryByIdArgs = {
  input: DeleteYearlySummaryCategoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByAccountIdArgs = {
  input: UpdateAccountByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByCategoryIdArgs = {
  input: UpdateCategoryByCategoryIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCreditCardDetailArgs = {
  input: UpdateCreditCardDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCreditCardDetailBySerialNoArgs = {
  input: UpdateCreditCardDetailBySerialNoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCreditCardSummaryArgs = {
  input: UpdateCreditCardSummaryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCreditCardSummaryByIdArgs = {
  input: UpdateCreditCardSummaryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDailyDetailArgs = {
  input: UpdateDailyDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDailyDetailBySerialNoArgs = {
  input: UpdateDailyDetailBySerialNoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGenreArgs = {
  input: UpdateGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGenreByGenreIdArgs = {
  input: UpdateGenreByGenreIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateImportFileHistoryArgs = {
  input: UpdateImportFileHistoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateImportFileHistoryByIdArgs = {
  input: UpdateImportFileHistoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSummaryCategoryArgs = {
  input: UpdateSummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSummaryCategoryByIdArgs = {
  input: UpdateSummaryCategoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUserIdArgs = {
  input: UpdateUserByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYearlySummaryCategoryArgs = {
  input: UpdateYearlySummaryCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYearlySummaryCategoryByIdArgs = {
  input: UpdateYearlySummaryCategoryByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query";
  /** Reads a single `Account` using its globally unique `ID`. */
  account?: Maybe<Account>;
  accountByAccountId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `TotalByAccountView`. */
  accountTotalList?: Maybe<Array<Maybe<TotalByAccountView>>>;
  /** Reads a set of `Account`. */
  allAccountsList?: Maybe<Array<Account>>;
  /** Reads a set of `Category`. */
  allCategoriesList?: Maybe<Array<Category>>;
  /** Reads a set of `CreditCardDetail`. */
  allCreditCardDetailsList?: Maybe<Array<CreditCardDetail>>;
  /** Reads a set of `CreditCardSummary`. */
  allCreditCardSummariesList?: Maybe<Array<CreditCardSummary>>;
  /** Reads a set of `CreditCardSummaryTotalByAccountView`. */
  allCreditCardSummaryTotalByAccountViewsList?: Maybe<
    Array<CreditCardSummaryTotalByAccountView>
  >;
  /** Reads a set of `DailyDetail`. */
  allDailyDetailsList?: Maybe<Array<DailyDetail>>;
  /** Reads a set of `DailyTotalView`. */
  allDailyTotalViewsList?: Maybe<Array<DailyTotalView>>;
  /** Reads a set of `Genre`. */
  allGenresList?: Maybe<Array<Genre>>;
  /** Reads a set of `ImportFileHistory`. */
  allImportFileHistoriesList?: Maybe<Array<ImportFileHistory>>;
  /** Reads a set of `SummaryCategory`. */
  allSummaryCategoriesList?: Maybe<Array<SummaryCategory>>;
  /** Reads a set of `TotalByAccountView`. */
  allTotalByAccountViewsList?: Maybe<Array<TotalByAccountView>>;
  /** Reads a set of `TotalByCategoryView`. */
  allTotalByCategoryViewsList?: Maybe<Array<TotalByCategoryView>>;
  /** Reads a set of `TotalByGenreView`. */
  allTotalByGenreViewsList?: Maybe<Array<TotalByGenreView>>;
  /** Reads a set of `User`. */
  allUsersList?: Maybe<Array<User>>;
  /** Reads a set of `YearlySummaryCategory`. */
  allYearlySummaryCategoriesList?: Maybe<Array<YearlySummaryCategory>>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryByCategoryId?: Maybe<Category>;
  /** Reads and enables pagination through a set of `TotalByCategoryView`. */
  categoryTotalByMonthList?: Maybe<Array<Maybe<TotalByCategoryView>>>;
  /** Reads a single `CreditCardDetail` using its globally unique `ID`. */
  creditCardDetail?: Maybe<CreditCardDetail>;
  creditCardDetailBySerialNo?: Maybe<CreditCardDetail>;
  /** Reads a single `CreditCardSummary` using its globally unique `ID`. */
  creditCardSummary?: Maybe<CreditCardSummary>;
  creditCardSummaryById?: Maybe<CreditCardSummary>;
  /** Reads a single `DailyDetail` using its globally unique `ID`. */
  dailyDetail?: Maybe<DailyDetail>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailByDateList?: Maybe<Array<Maybe<DailyDetail>>>;
  dailyDetailBySerialNo?: Maybe<DailyDetail>;
  /** Reads a single `Genre` using its globally unique `ID`. */
  genre?: Maybe<Genre>;
  genreByGenreId?: Maybe<Genre>;
  /** Reads and enables pagination through a set of `TotalByGenreView`. */
  genreTotalByMonthList?: Maybe<Array<Maybe<TotalByGenreView>>>;
  /** Reads a single `ImportFileHistory` using its globally unique `ID`. */
  importFileHistory?: Maybe<ImportFileHistory>;
  importFileHistoryById?: Maybe<ImportFileHistory>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `SummaryCategory` using its globally unique `ID`. */
  summaryCategory?: Maybe<SummaryCategory>;
  summaryCategoryById?: Maybe<SummaryCategory>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByUserId?: Maybe<User>;
  /** Reads a single `YearlySummaryCategory` using its globally unique `ID`. */
  yearlySummaryCategory?: Maybe<YearlySummaryCategory>;
  yearlySummaryCategoryById?: Maybe<YearlySummaryCategory>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountByAccountIdArgs = {
  accountId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountTotalListArgs = {
  filter?: InputMaybe<TotalByAccountViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  fromDate?: InputMaybe<Scalars["Date"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  toDate?: InputMaybe<Scalars["Date"]>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsListArgs = {
  condition?: InputMaybe<AccountCondition>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllCategoriesListArgs = {
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllCreditCardDetailsListArgs = {
  condition?: InputMaybe<CreditCardDetailCondition>;
  filter?: InputMaybe<CreditCardDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllCreditCardSummariesListArgs = {
  condition?: InputMaybe<CreditCardSummaryCondition>;
  filter?: InputMaybe<CreditCardSummaryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummariesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllCreditCardSummaryTotalByAccountViewsListArgs = {
  condition?: InputMaybe<CreditCardSummaryTotalByAccountViewCondition>;
  filter?: InputMaybe<CreditCardSummaryTotalByAccountViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllDailyDetailsListArgs = {
  condition?: InputMaybe<DailyDetailCondition>;
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllDailyTotalViewsListArgs = {
  condition?: InputMaybe<DailyTotalViewCondition>;
  filter?: InputMaybe<DailyTotalViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllGenresListArgs = {
  condition?: InputMaybe<GenreCondition>;
  filter?: InputMaybe<GenreFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenresOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllImportFileHistoriesListArgs = {
  condition?: InputMaybe<ImportFileHistoryCondition>;
  filter?: InputMaybe<ImportFileHistoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllSummaryCategoriesListArgs = {
  condition?: InputMaybe<SummaryCategoryCondition>;
  filter?: InputMaybe<SummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllTotalByAccountViewsListArgs = {
  condition?: InputMaybe<TotalByAccountViewCondition>;
  filter?: InputMaybe<TotalByAccountViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllTotalByCategoryViewsListArgs = {
  condition?: InputMaybe<TotalByCategoryViewCondition>;
  filter?: InputMaybe<TotalByCategoryViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllTotalByGenreViewsListArgs = {
  condition?: InputMaybe<TotalByGenreViewCondition>;
  filter?: InputMaybe<TotalByGenreViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersListArgs = {
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllYearlySummaryCategoriesListArgs = {
  condition?: InputMaybe<YearlySummaryCategoryCondition>;
  filter?: InputMaybe<YearlySummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<YearlySummaryCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByCategoryIdArgs = {
  categoryId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryTotalByMonthListArgs = {
  filter?: InputMaybe<TotalByCategoryViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  fromDate?: InputMaybe<Scalars["Date"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  toDate?: InputMaybe<Scalars["Date"]>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCreditCardDetailArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCreditCardDetailBySerialNoArgs = {
  serialNo: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCreditCardSummaryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCreditCardSummaryByIdArgs = {
  id: Scalars["UUID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDailyDetailArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDailyDetailByDateListArgs = {
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  fromDate?: InputMaybe<Scalars["Date"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  toDate?: InputMaybe<Scalars["Date"]>;
};

/** The root query type which gives access points into the data universe. */
export type QueryDailyDetailBySerialNoArgs = {
  serialNo: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGenreArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGenreByGenreIdArgs = {
  genreId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGenreTotalByMonthListArgs = {
  filter?: InputMaybe<TotalByGenreViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  fromDate?: InputMaybe<Scalars["Date"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  toDate?: InputMaybe<Scalars["Date"]>;
};

/** The root query type which gives access points into the data universe. */
export type QueryImportFileHistoryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryImportFileHistoryByIdArgs = {
  id: Scalars["UUID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QuerySummaryCategoryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QuerySummaryCategoryByIdArgs = {
  id: Scalars["UUID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByUserIdArgs = {
  userId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryYearlySummaryCategoryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryYearlySummaryCategoryByIdArgs = {
  id: Scalars["UUID"];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["String"]>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars["String"]>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars["String"]>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars["String"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["String"]>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars["String"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["String"]>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars["String"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["String"]>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["String"]>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars["String"]>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars["String"]>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars["String"]>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["String"]>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars["String"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["String"]>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars["String"]>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars["String"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["String"]>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars["String"]>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars["String"]>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars["String"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["String"]>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars["String"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars["String"]>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars["String"]>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars["String"]>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars["String"]>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars["String"]>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars["String"]>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars["String"]>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars["String"]>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars["String"]>;
};

/** Methods to use when ordering `SummaryCategory`. */
export enum SummaryCategoriesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
}

export type SummaryCategory = Node & {
  __typename?: "SummaryCategory";
  /** Reads a single `Category` that is related to this `SummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  id: Scalars["UUID"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** Reads a single `User` that is related to this `SummaryCategory`. */
  userByUserId?: Maybe<User>;
  userId: Scalars["String"];
};

/**
 * A condition to be used against `SummaryCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SummaryCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `SummaryCategory` object types. All fields are combined with a logical ‘and.’ */
export type SummaryCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SummaryCategoryFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SummaryCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SummaryCategoryFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `SummaryCategory` */
export type SummaryCategoryInput = {
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  id: Scalars["UUID"];
  userId: Scalars["String"];
};

/** Represents an update to a `SummaryCategory`. Fields that are set will be updated. */
export type SummaryCategoryPatch = {
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type TotalByAccountView = {
  __typename?: "TotalByAccountView";
  accountId?: Maybe<Scalars["String"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  iocomeType?: Maybe<IocomeType>;
  total?: Maybe<Scalars["BigFloat"]>;
};

/**
 * A condition to be used against `TotalByAccountView` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TotalByAccountViewCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `accountName` field. */
  accountName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `total` field. */
  total?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `TotalByAccountView` object types. All fields are combined with a logical ‘and.’ */
export type TotalByAccountViewFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `accountName` field. */
  accountName?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TotalByAccountViewFilter>>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TotalByAccountViewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TotalByAccountViewFilter>>;
  /** Filter by the object’s `total` field. */
  total?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `TotalByAccountView`. */
export enum TotalByAccountViewsOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  AccountNameAsc = "ACCOUNT_NAME_ASC",
  AccountNameDesc = "ACCOUNT_NAME_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  TotalAsc = "TOTAL_ASC",
  TotalDesc = "TOTAL_DESC",
}

export type TotalByCategoryView = {
  __typename?: "TotalByCategoryView";
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<IocomeType>;
  total?: Maybe<Scalars["BigFloat"]>;
};

/**
 * A condition to be used against `TotalByCategoryView` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type TotalByCategoryViewCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `categoryName` field. */
  categoryName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `genreId` field. */
  genreId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `genreName` field. */
  genreName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `total` field. */
  total?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `TotalByCategoryView` object types. All fields are combined with a logical ‘and.’ */
export type TotalByCategoryViewFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TotalByCategoryViewFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `categoryName` field. */
  categoryName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `genreId` field. */
  genreId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `genreName` field. */
  genreName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TotalByCategoryViewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TotalByCategoryViewFilter>>;
  /** Filter by the object’s `total` field. */
  total?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `TotalByCategoryView`. */
export enum TotalByCategoryViewsOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  CategoryNameAsc = "CATEGORY_NAME_ASC",
  CategoryNameDesc = "CATEGORY_NAME_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  GenreIdAsc = "GENRE_ID_ASC",
  GenreIdDesc = "GENRE_ID_DESC",
  GenreNameAsc = "GENRE_NAME_ASC",
  GenreNameDesc = "GENRE_NAME_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  TotalAsc = "TOTAL_ASC",
  TotalDesc = "TOTAL_DESC",
}

export type TotalByGenreView = {
  __typename?: "TotalByGenreView";
  date?: Maybe<Scalars["Date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<IocomeType>;
  total?: Maybe<Scalars["BigFloat"]>;
};

/**
 * A condition to be used against `TotalByGenreView` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TotalByGenreViewCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `genreId` field. */
  genreId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `genreName` field. */
  genreName?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeType>;
  /** Checks for equality with the object’s `total` field. */
  total?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `TotalByGenreView` object types. All fields are combined with a logical ‘and.’ */
export type TotalByGenreViewFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TotalByGenreViewFilter>>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `genreId` field. */
  genreId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `genreName` field. */
  genreName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `iocomeType` field. */
  iocomeType?: InputMaybe<IocomeTypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TotalByGenreViewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TotalByGenreViewFilter>>;
  /** Filter by the object’s `total` field. */
  total?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `TotalByGenreView`. */
export enum TotalByGenreViewsOrderBy {
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  GenreIdAsc = "GENRE_ID_ASC",
  GenreIdDesc = "GENRE_ID_DESC",
  GenreNameAsc = "GENRE_NAME_ASC",
  GenreNameDesc = "GENRE_NAME_DESC",
  IocomeTypeAsc = "IOCOME_TYPE_ASC",
  IocomeTypeDesc = "IOCOME_TYPE_DESC",
  Natural = "NATURAL",
  TotalAsc = "TOTAL_ASC",
  TotalDesc = "TOTAL_DESC",
}

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["UUID"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["UUID"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["UUID"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["UUID"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["UUID"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["UUID"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["UUID"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["UUID"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["UUID"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["UUID"]>>;
};

/** All input for the `updateAccountByAccountId` mutation. */
export type UpdateAccountByAccountIdInput = {
  accountId: Scalars["String"];
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Account` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  __typename?: "UpdateAccountPayload";
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Account`. */
  userByOwnerUserId?: Maybe<User>;
};

/** All input for the `updateCategoryByCategoryId` mutation. */
export type UpdateCategoryByCategoryIdInput = {
  categoryId: Scalars["String"];
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: "UpdateCategoryPayload";
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Reads a single `Genre` that is related to this `Category`. */
  genreByGenreId?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCreditCardDetailBySerialNo` mutation. */
export type UpdateCreditCardDetailBySerialNoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `CreditCardDetail` being updated. */
  creditCardDetailPatch: CreditCardDetailPatch;
  serialNo: Scalars["Int"];
};

/** All input for the `updateCreditCardDetail` mutation. */
export type UpdateCreditCardDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `CreditCardDetail` being updated. */
  creditCardDetailPatch: CreditCardDetailPatch;
  /** The globally unique `ID` which will identify a single `CreditCardDetail` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `CreditCardDetail` mutation. */
export type UpdateCreditCardDetailPayload = {
  __typename?: "UpdateCreditCardDetailPayload";
  /** Reads a single `Category` that is related to this `CreditCardDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardDetail` that was updated by this mutation. */
  creditCardDetail?: Maybe<CreditCardDetail>;
  /** Reads a single `CreditCardSummary` that is related to this `CreditCardDetail`. */
  creditCardSummaryBySummaryId?: Maybe<CreditCardSummary>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCreditCardSummaryById` mutation. */
export type UpdateCreditCardSummaryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `CreditCardSummary` being updated. */
  creditCardSummaryPatch: CreditCardSummaryPatch;
  id: Scalars["UUID"];
};

/** All input for the `updateCreditCardSummary` mutation. */
export type UpdateCreditCardSummaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `CreditCardSummary` being updated. */
  creditCardSummaryPatch: CreditCardSummaryPatch;
  /** The globally unique `ID` which will identify a single `CreditCardSummary` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `CreditCardSummary` mutation. */
export type UpdateCreditCardSummaryPayload = {
  __typename?: "UpdateCreditCardSummaryPayload";
  /** Reads a single `Account` that is related to this `CreditCardSummary`. */
  accountByAccountId?: Maybe<Account>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `CreditCardSummary` that was updated by this mutation. */
  creditCardSummary?: Maybe<CreditCardSummary>;
  /** Reads a single `ImportFileHistory` that is related to this `CreditCardSummary`. */
  importFileHistoryById?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateDailyDetailBySerialNo` mutation. */
export type UpdateDailyDetailBySerialNoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `DailyDetail` being updated. */
  dailyDetailPatch: DailyDetailPatch;
  serialNo: Scalars["Int"];
};

/** All input for the `updateDailyDetail` mutation. */
export type UpdateDailyDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `DailyDetail` being updated. */
  dailyDetailPatch: DailyDetailPatch;
  /** The globally unique `ID` which will identify a single `DailyDetail` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `DailyDetail` mutation. */
export type UpdateDailyDetailPayload = {
  __typename?: "UpdateDailyDetailPayload";
  /** Reads a single `Account` that is related to this `DailyDetail`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads a single `Category` that is related to this `DailyDetail`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `DailyDetail` that was updated by this mutation. */
  dailyDetail?: Maybe<DailyDetail>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DailyDetail`. */
  userByUserId?: Maybe<User>;
};

/** All input for the `updateGenreByGenreId` mutation. */
export type UpdateGenreByGenreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  genreId: Scalars["String"];
  /** An object where the defined keys will be set on the `Genre` being updated. */
  genrePatch: GenrePatch;
};

/** All input for the `updateGenre` mutation. */
export type UpdateGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Genre` being updated. */
  genrePatch: GenrePatch;
  /** The globally unique `ID` which will identify a single `Genre` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `Genre` mutation. */
export type UpdateGenrePayload = {
  __typename?: "UpdateGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Genre` that was updated by this mutation. */
  genre?: Maybe<Genre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateImportFileHistoryById` mutation. */
export type UpdateImportFileHistoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
  /** An object where the defined keys will be set on the `ImportFileHistory` being updated. */
  importFileHistoryPatch: ImportFileHistoryPatch;
};

/** All input for the `updateImportFileHistory` mutation. */
export type UpdateImportFileHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `ImportFileHistory` being updated. */
  importFileHistoryPatch: ImportFileHistoryPatch;
  /** The globally unique `ID` which will identify a single `ImportFileHistory` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `ImportFileHistory` mutation. */
export type UpdateImportFileHistoryPayload = {
  __typename?: "UpdateImportFileHistoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `ImportFileHistory` that was updated by this mutation. */
  importFileHistory?: Maybe<ImportFileHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateSummaryCategoryById` mutation. */
export type UpdateSummaryCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
  /** An object where the defined keys will be set on the `SummaryCategory` being updated. */
  summaryCategoryPatch: SummaryCategoryPatch;
};

/** All input for the `updateSummaryCategory` mutation. */
export type UpdateSummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `SummaryCategory` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `SummaryCategory` being updated. */
  summaryCategoryPatch: SummaryCategoryPatch;
};

/** The output of our update `SummaryCategory` mutation. */
export type UpdateSummaryCategoryPayload = {
  __typename?: "UpdateSummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `SummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SummaryCategory` that was updated by this mutation. */
  summaryCategory?: Maybe<SummaryCategory>;
  /** Reads a single `User` that is related to this `SummaryCategory`. */
  userByUserId?: Maybe<User>;
};

/** All input for the `updateUserByUserId` mutation. */
export type UpdateUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: "UpdateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
};

/** All input for the `updateYearlySummaryCategoryById` mutation. */
export type UpdateYearlySummaryCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
  /** An object where the defined keys will be set on the `YearlySummaryCategory` being updated. */
  yearlySummaryCategoryPatch: YearlySummaryCategoryPatch;
};

/** All input for the `updateYearlySummaryCategory` mutation. */
export type UpdateYearlySummaryCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `YearlySummaryCategory` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `YearlySummaryCategory` being updated. */
  yearlySummaryCategoryPatch: YearlySummaryCategoryPatch;
};

/** The output of our update `YearlySummaryCategory` mutation. */
export type UpdateYearlySummaryCategoryPayload = {
  __typename?: "UpdateYearlySummaryCategoryPayload";
  /** Reads a single `Category` that is related to this `YearlySummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `YearlySummaryCategory`. */
  userByUserId?: Maybe<User>;
  /** The `YearlySummaryCategory` that was updated by this mutation. */
  yearlySummaryCategory?: Maybe<YearlySummaryCategory>;
};

export type User = Node & {
  __typename?: "User";
  /** Reads and enables pagination through a set of `Account`. */
  accountsByOwnerUserIdList: Array<Account>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailsByUserIdList: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** Reads and enables pagination through a set of `SummaryCategory`. */
  summaryCategoriesByUserIdList: Array<SummaryCategory>;
  userId: Scalars["String"];
  userName: Scalars["String"];
  /** Reads and enables pagination through a set of `YearlySummaryCategory`. */
  yearlySummaryCategoriesByUserIdList: Array<YearlySummaryCategory>;
};

export type UserAccountsByOwnerUserIdListArgs = {
  condition?: InputMaybe<AccountCondition>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type UserDailyDetailsByUserIdListArgs = {
  condition?: InputMaybe<DailyDetailCondition>;
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailsOrderBy>>;
};

export type UserSummaryCategoriesByUserIdListArgs = {
  condition?: InputMaybe<SummaryCategoryCondition>;
  filter?: InputMaybe<SummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoriesOrderBy>>;
};

export type UserYearlySummaryCategoriesByUserIdListArgs = {
  condition?: InputMaybe<YearlySummaryCategoryCondition>;
  filter?: InputMaybe<YearlySummaryCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<YearlySummaryCategoriesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `userName` field. */
  userName?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userName` field. */
  userName?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  displayOrder: Scalars["Int"];
  userId: Scalars["String"];
  userName: Scalars["String"];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
  UserNameAsc = "USER_NAME_ASC",
  UserNameDesc = "USER_NAME_DESC",
}

/** Methods to use when ordering `YearlySummaryCategory`. */
export enum YearlySummaryCategoriesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  DisplayOrderAsc = "DISPLAY_ORDER_ASC",
  DisplayOrderDesc = "DISPLAY_ORDER_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
}

export type YearlySummaryCategory = Node & {
  __typename?: "YearlySummaryCategory";
  /** Reads a single `Category` that is related to this `YearlySummaryCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  id: Scalars["UUID"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** Reads a single `User` that is related to this `YearlySummaryCategory`. */
  userByUserId?: Maybe<User>;
  userId: Scalars["String"];
};

/**
 * A condition to be used against `YearlySummaryCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type YearlySummaryCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `YearlySummaryCategory` object types. All fields are combined with a logical ‘and.’ */
export type YearlySummaryCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<YearlySummaryCategoryFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<YearlySummaryCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<YearlySummaryCategoryFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `YearlySummaryCategory` */
export type YearlySummaryCategoryInput = {
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  id: Scalars["UUID"];
  userId: Scalars["String"];
};

/** Represents an update to a `YearlySummaryCategory`. Fields that are set will be updated. */
export type YearlySummaryCategoryPatch = {
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type CreateCreditCardDetailMutationVariables = Exact<{
  date: Scalars["Date"];
  categoryId: Scalars["String"];
  amount: Scalars["BigFloat"];
  memo?: InputMaybe<Scalars["String"]>;
  summaryId: Scalars["UUID"];
}>;

export type CreateCreditCardDetailMutation = {
  __typename?: "Mutation";
  createCreditCardDetail?: {
    __typename?: "CreateCreditCardDetailPayload";
    creditCardDetail?: {
      __typename?: "CreditCardDetail";
      serialNo: number;
    } | null;
  } | null;
};

export type CreateCreditCardSummaryMutationVariables = Exact<{
  id: Scalars["UUID"];
  creditCard: Scalars["String"];
  accountId: Scalars["String"];
  totalAmount: Scalars["BigFloat"];
  count: Scalars["Int"];
  withdrawalDate: Scalars["Date"];
}>;

export type CreateCreditCardSummaryMutation = {
  __typename?: "Mutation";
  createCreditCardSummary?: {
    __typename?: "CreateCreditCardSummaryPayload";
    creditCardSummary?: { __typename?: "CreditCardSummary"; id: any } | null;
  } | null;
};

export type CreateDailyDetailMutationVariables = Exact<{
  date: Scalars["Date"];
  categoryId: Scalars["String"];
  accountId: Scalars["String"];
  userId: Scalars["String"];
  amount: Scalars["BigFloat"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type CreateDailyDetailMutation = {
  __typename?: "Mutation";
  createDailyDetail?: {
    __typename?: "CreateDailyDetailPayload";
    dailyDetail?: {
      __typename?: "DailyDetail";
      date: any;
      categoryId: string;
      accountId: string;
      userId: string;
      amount: any;
      memo?: string | null;
    } | null;
  } | null;
};

export type CreateImportFileHistoryMutationVariables = Exact<{
  id: Scalars["UUID"];
  fileType: Scalars["String"];
  fileName: Scalars["String"];
  importUserId: Scalars["String"];
  importDatetime: Scalars["Datetime"];
}>;

export type CreateImportFileHistoryMutation = {
  __typename?: "Mutation";
  createImportFileHistory?: {
    __typename?: "CreateImportFileHistoryPayload";
    importFileHistory?: { __typename?: "ImportFileHistory"; id: any } | null;
  } | null;
};

export type CreateSummaryCategoryMutationVariables = Exact<{
  id: Scalars["UUID"];
  userId: Scalars["String"];
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type CreateSummaryCategoryMutation = {
  __typename?: "Mutation";
  createSummaryCategory?: {
    __typename?: "CreateSummaryCategoryPayload";
    clientMutationId?: string | null;
  } | null;
};

export type DeleteDailyDetailBySerialNoMutationVariables = Exact<{
  serialNo: Scalars["Int"];
}>;

export type DeleteDailyDetailBySerialNoMutation = {
  __typename?: "Mutation";
  deleteDailyDetailBySerialNo?: {
    __typename?: "DeleteDailyDetailPayload";
    clientMutationId?: string | null;
  } | null;
};

export type DeleteSummaryCategoryByIdMutationVariables = Exact<{
  id: Scalars["UUID"];
}>;

export type DeleteSummaryCategoryByIdMutation = {
  __typename?: "Mutation";
  deleteSummaryCategoryById?: {
    __typename?: "DeleteSummaryCategoryPayload";
    clientMutationId?: string | null;
  } | null;
};

export type GetAccountBalanceListQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetAccountBalanceListQuery = {
  __typename?: "Query";
  accountTotalList?: Array<{
    __typename?: "TotalByAccountView";
    accountId?: string | null;
    accountName?: string | null;
    total?: any | null;
    displayOrder?: number | null;
  } | null> | null;
};

export type GetAllCategoryListWithCriteriaQueryVariables = Exact<{
  validCategoryIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  validGenreIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  iocomeTypeIn?: InputMaybe<Array<IocomeType> | IocomeType>;
  categoryNotIn?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetAllCategoryListWithCriteriaQuery = {
  __typename?: "Query";
  genres?: Array<{
    __typename?: "Genre";
    iocomeType: IocomeType;
    validFlag?: boolean | null;
    displayOrder: number;
    id: string;
    name: string;
    type: GenreType;
    categories: Array<{
      __typename?: "Category";
      validFlag?: boolean | null;
      displayOrder: number;
      id: string;
      name: string;
    }>;
  }> | null;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "Query";
  allUsersList?: Array<{
    __typename?: "User";
    userId: string;
    userName: string;
  }> | null;
};

export type GetCategoryTotalByMonthQueryVariables = Exact<{
  fromDate?: InputMaybe<Scalars["Date"]>;
  toDate?: InputMaybe<Scalars["Date"]>;
}>;

export type GetCategoryTotalByMonthQuery = {
  __typename?: "Query";
  categoryTotalByMonthList?: Array<{
    __typename?: "TotalByCategoryView";
    date?: any | null;
    iocomeType?: IocomeType | null;
    genreId?: string | null;
    genreName?: string | null;
    categoryId?: string | null;
    categoryName?: string | null;
    total?: any | null;
  } | null> | null;
};

export type GetCreditCardDetailBySerialNoQueryVariables = Exact<{
  serialNo: Scalars["Int"];
}>;

export type GetCreditCardDetailBySerialNoQuery = {
  __typename?: "Query";
  creditCardDetailBySerialNo?: {
    __typename?: "CreditCardDetail";
    serialNo: number;
    date: any;
    amount: any;
    memo?: string | null;
    summaryId: any;
    categoryByCategoryId?: {
      __typename?: "Category";
      categoryId: string;
      categoryName: string;
      genreByGenreId?: {
        __typename?: "Genre";
        genreId: string;
        genreName: string;
        genreType: GenreType;
        iocomeType: IocomeType;
      } | null;
    } | null;
  } | null;
};

export type GetCreditCardDetailBySummaryIdQueryVariables = Exact<{
  id: Scalars["UUID"];
}>;

export type GetCreditCardDetailBySummaryIdQuery = {
  __typename?: "Query";
  creditCardSummaryById?: {
    __typename?: "CreditCardSummary";
    id: any;
    creditCardDetailsBySummaryIdList: Array<{
      __typename?: "CreditCardDetail";
      serialNo: number;
      date: any;
      memo?: string | null;
      amount: any;
      categoryByCategoryId?: {
        __typename?: "Category";
        categoryId: string;
        categoryName: string;
        genreByGenreId?: {
          __typename?: "Genre";
          genreId: string;
          genreName: string;
          genreType: GenreType;
          iocomeType: IocomeType;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetCreditCardListQueryVariables = Exact<{ [key: string]: never }>;

export type GetCreditCardListQuery = {
  __typename?: "Query";
  allCreditCardSummariesList?: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    creditCard: string;
    count: number;
    withdrawalDate: any;
    totalAmount: any;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
    importFileHistoryById?: {
      __typename?: "ImportFileHistory";
      importDatetime: any;
      fileName: string;
      fileType: string;
    } | null;
  }> | null;
};

export type GetCreditCardSummaryBetweenWithdrawalDateQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetCreditCardSummaryBetweenWithdrawalDateQuery = {
  __typename?: "Query";
  allCreditCardSummariesList?: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
  }> | null;
};

export type GetCreditCardSummaryByAccountIdBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
  accountId: Scalars["String"];
}>;

export type GetCreditCardSummaryByAccountIdBetweenDateQuery = {
  __typename?: "Query";
  allCreditCardSummariesList?: Array<{
    __typename?: "CreditCardSummary";
    id: any;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
  }> | null;
};

export type GetDailyDetailByDateQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetDailyDetailByDateQuery = {
  __typename?: "Query";
  dailyDetailByDateList?: Array<{
    __typename?: "DailyDetail";
    serialNo: number;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId?: {
      __typename?: "Category";
      categoryId: string;
      categoryName: string;
      genreByGenreId?: {
        __typename?: "Genre";
        genreId: string;
        genreName: string;
        genreType: GenreType;
        iocomeType: IocomeType;
      } | null;
    } | null;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
    userByUserId?: {
      __typename?: "User";
      userId: string;
      userName: string;
    } | null;
  } | null> | null;
};

export type GetDailyDetailByDateAccountIdQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
  accountId: Scalars["String"];
}>;

export type GetDailyDetailByDateAccountIdQuery = {
  __typename?: "Query";
  dailyDetailByDateList?: Array<{
    __typename?: "DailyDetail";
    serialNo: number;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId?: {
      __typename?: "Category";
      categoryId: string;
      categoryName: string;
      genreByGenreId?: {
        __typename?: "Genre";
        genreId: string;
        genreName: string;
        genreType: GenreType;
        iocomeType: IocomeType;
      } | null;
    } | null;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
    userByUserId?: {
      __typename?: "User";
      userId: string;
      userName: string;
    } | null;
  } | null> | null;
};

export type GetDailyDetailByDateCategoryIdQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
  categoryId: Scalars["String"];
}>;

export type GetDailyDetailByDateCategoryIdQuery = {
  __typename?: "Query";
  dailyDetailByDateList?: Array<{
    __typename?: "DailyDetail";
    serialNo: number;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId?: {
      __typename?: "Category";
      categoryId: string;
      categoryName: string;
      genreByGenreId?: {
        __typename?: "Genre";
        genreId: string;
        genreName: string;
        genreType: GenreType;
        iocomeType: IocomeType;
      } | null;
    } | null;
    accountByAccountId?: {
      __typename?: "Account";
      accountId: string;
      accountName: string;
    } | null;
    userByUserId?: {
      __typename?: "User";
      userId: string;
      userName: string;
    } | null;
  } | null> | null;
};

export type GetDailyDetailByDateGenreIdQueryVariables = Exact<{
  genreId: Scalars["String"];
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetDailyDetailByDateGenreIdQuery = {
  __typename?: "Query";
  allCategoriesList?: Array<{
    __typename?: "Category";
    dailyDetailsByCategoryIdList: Array<{
      __typename?: "DailyDetail";
      serialNo: number;
      date: any;
      amount: any;
      memo?: string | null;
      categoryByCategoryId?: {
        __typename?: "Category";
        categoryId: string;
        categoryName: string;
        genreByGenreId?: {
          __typename?: "Genre";
          genreId: string;
          genreName: string;
          genreType: GenreType;
          iocomeType: IocomeType;
        } | null;
      } | null;
      accountByAccountId?: {
        __typename?: "Account";
        accountId: string;
        accountName: string;
      } | null;
      userByUserId?: {
        __typename?: "User";
        userId: string;
        userName: string;
      } | null;
    }>;
  }> | null;
};

export type GetGenreTotalByMonthQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetGenreTotalByMonthQuery = {
  __typename?: "Query";
  genreTotalByMonthList?: Array<{
    __typename?: "TotalByGenreView";
    date?: any | null;
    iocomeType?: IocomeType | null;
    genreId?: string | null;
    genreName?: string | null;
    total?: any | null;
  } | null> | null;
};

export type GetSummaryCategoriesByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSummaryCategoriesByUserIdQuery = {
  __typename?: "Query";
  categories?: Array<{
    __typename?: "SummaryCategory";
    id: any;
    userId: string;
    displayOrder: number;
    category?: {
      __typename?: "Category";
      id: string;
      name: string;
      genre?: {
        __typename?: "Genre";
        iocomeType: IocomeType;
        id: string;
        name: string;
        type: GenreType;
      } | null;
    } | null;
  }> | null;
};

export type GetTotalBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["Date"];
  toDate: Scalars["Date"];
}>;

export type GetTotalBetweenDateQuery = {
  __typename?: "Query";
  incomeTotalByDate?: Array<{
    __typename?: "DailyTotalView";
    date?: any | null;
    iocomeType?: IocomeType | null;
    total?: any | null;
  }> | null;
  outcomeTotalByDate?: Array<{
    __typename?: "DailyTotalView";
    date?: any | null;
    iocomeType?: IocomeType | null;
    total?: any | null;
  }> | null;
};

export type GetValidAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type GetValidAccountsQuery = {
  __typename?: "Query";
  allAccountsList?: Array<{
    __typename?: "Account";
    accountId: string;
    accountName: string;
  }> | null;
};

export type GetValidCategoryByGenreIdQueryVariables = Exact<{
  genreId: Scalars["String"];
}>;

export type GetValidCategoryByGenreIdQuery = {
  __typename?: "Query";
  allCategoriesList?: Array<{
    __typename?: "Category";
    categoryId: string;
    categoryName: string;
    displayOrder: number;
  }> | null;
};

export type GetValidGenreListByIocomeTypeQueryVariables = Exact<{
  iocomeType: IocomeType;
}>;

export type GetValidGenreListByIocomeTypeQuery = {
  __typename?: "Query";
  allGenresList?: Array<{
    __typename?: "Genre";
    genreId: string;
    genreName: string;
    genreType: GenreType;
    iocomeType: IocomeType;
    displayOrder: number;
    categoriesByGenreIdList: Array<{
      __typename?: "Category";
      categoryId: string;
      categoryName: string;
      displayOrder: number;
    }>;
  }> | null;
};

export type UpdateCreditCardDetailBySerialNoMutationVariables = Exact<{
  serialNo: Scalars["Int"];
  categoryId: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateCreditCardDetailBySerialNoMutation = {
  __typename?: "Mutation";
  updateCreditCardDetailBySerialNo?: {
    __typename?: "UpdateCreditCardDetailPayload";
    clientMutationId?: string | null;
  } | null;
};

export type UpdateDailyDetailBySerialNoMutationVariables = Exact<{
  serialNo: Scalars["Int"];
  date: Scalars["Date"];
  categoryId: Scalars["String"];
  accountId: Scalars["String"];
  amount: Scalars["BigFloat"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateDailyDetailBySerialNoMutation = {
  __typename?: "Mutation";
  updateDailyDetailBySerialNo?: {
    __typename?: "UpdateDailyDetailPayload";
    dailyDetail?: { __typename?: "DailyDetail"; serialNo: number } | null;
  } | null;
};

export const CreateCreditCardDetailDocument = gql`
  mutation CreateCreditCardDetail(
    $date: Date!
    $categoryId: String!
    $amount: BigFloat!
    $memo: String
    $summaryId: UUID!
  ) {
    createCreditCardDetail(
      input: {
        creditCardDetail: {
          date: $date
          categoryId: $categoryId
          amount: $amount
          summaryId: $summaryId
          memo: $memo
        }
      }
    ) {
      creditCardDetail {
        serialNo
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
    $id: UUID!
    $creditCard: String!
    $accountId: String!
    $totalAmount: BigFloat!
    $count: Int!
    $withdrawalDate: Date!
  ) {
    createCreditCardSummary(
      input: {
        creditCardSummary: {
          id: $id
          creditCard: $creditCard
          accountId: $accountId
          totalAmount: $totalAmount
          count: $count
          withdrawalDate: $withdrawalDate
        }
      }
    ) {
      creditCardSummary {
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
    $date: Date!
    $categoryId: String!
    $accountId: String!
    $userId: String!
    $amount: BigFloat!
    $memo: String
  ) {
    createDailyDetail(
      input: {
        dailyDetail: {
          date: $date
          categoryId: $categoryId
          accountId: $accountId
          userId: $userId
          amount: $amount
          memo: $memo
        }
      }
    ) {
      dailyDetail {
        date
        categoryId
        accountId
        userId
        amount
        memo
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
    $id: UUID!
    $fileType: String!
    $fileName: String!
    $importUserId: String!
    $importDatetime: Datetime!
  ) {
    createImportFileHistory(
      input: {
        importFileHistory: {
          id: $id
          fileName: $fileName
          fileType: $fileType
          importDatetime: $importDatetime
          importUserId: $importUserId
        }
      }
    ) {
      importFileHistory {
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
    $id: UUID!
    $userId: String!
    $categoryId: String!
    $displayOrder: Int!
  ) {
    createSummaryCategory(
      input: {
        summaryCategory: {
          id: $id
          userId: $userId
          categoryId: $categoryId
          displayOrder: $displayOrder
        }
      }
    ) {
      clientMutationId
    }
  }
`;

export function useCreateSummaryCategoryMutation() {
  return Urql.useMutation<
    CreateSummaryCategoryMutation,
    CreateSummaryCategoryMutationVariables
  >(CreateSummaryCategoryDocument);
}
export const DeleteDailyDetailBySerialNoDocument = gql`
  mutation DeleteDailyDetailBySerialNo($serialNo: Int!) {
    deleteDailyDetailBySerialNo(input: { serialNo: $serialNo }) {
      clientMutationId
    }
  }
`;

export function useDeleteDailyDetailBySerialNoMutation() {
  return Urql.useMutation<
    DeleteDailyDetailBySerialNoMutation,
    DeleteDailyDetailBySerialNoMutationVariables
  >(DeleteDailyDetailBySerialNoDocument);
}
export const DeleteSummaryCategoryByIdDocument = gql`
  mutation DeleteSummaryCategoryById($id: UUID!) {
    deleteSummaryCategoryById(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export function useDeleteSummaryCategoryByIdMutation() {
  return Urql.useMutation<
    DeleteSummaryCategoryByIdMutation,
    DeleteSummaryCategoryByIdMutationVariables
  >(DeleteSummaryCategoryByIdDocument);
}
export const GetAccountBalanceListDocument = gql`
  query GetAccountBalanceList($fromDate: Date!, $toDate: Date!) {
    accountTotalList(fromDate: $fromDate, toDate: $toDate) {
      accountId
      accountName
      total
      displayOrder
    }
  }
`;

export function useGetAccountBalanceListQuery(
  options: Omit<Urql.UseQueryArgs<GetAccountBalanceListQueryVariables>, "query">
) {
  return Urql.useQuery<
    GetAccountBalanceListQuery,
    GetAccountBalanceListQueryVariables
  >({ query: GetAccountBalanceListDocument, ...options });
}
export const GetAllCategoryListWithCriteriaDocument = gql`
  query GetAllCategoryListWithCriteria(
    $validCategoryIn: [Boolean!] = [true, false]
    $validGenreIn: [Boolean!] = [true, false]
    $iocomeTypeIn: [IocomeType!] = [INCOME, OUTCOME]
    $categoryNotIn: [String!] = ""
  ) {
    genres: allGenresList(
      filter: {
        validFlag: { in: $validCategoryIn }
        and: { iocomeType: { in: $iocomeTypeIn } }
      }
      orderBy: DISPLAY_ORDER_ASC
    ) {
      id: genreId
      name: genreName
      type: genreType
      iocomeType
      validFlag
      displayOrder
      categories: categoriesByGenreIdList(
        filter: {
          validFlag: { in: $validGenreIn }
          and: { categoryId: { notIn: $categoryNotIn } }
        }
        orderBy: DISPLAY_ORDER_ASC
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
  >
) {
  return Urql.useQuery<
    GetAllCategoryListWithCriteriaQuery,
    GetAllCategoryListWithCriteriaQueryVariables
  >({ query: GetAllCategoryListWithCriteriaDocument, ...options });
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    allUsersList {
      userId
      userName
    }
  }
`;

export function useGetAllUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, "query">
) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
    ...options,
  });
}
export const GetCategoryTotalByMonthDocument = gql`
  query GetCategoryTotalByMonth($fromDate: Date, $toDate: Date) {
    categoryTotalByMonthList(fromDate: $fromDate, toDate: $toDate) {
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
  options?: Omit<
    Urql.UseQueryArgs<GetCategoryTotalByMonthQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetCategoryTotalByMonthQuery,
    GetCategoryTotalByMonthQueryVariables
  >({ query: GetCategoryTotalByMonthDocument, ...options });
}
export const GetCreditCardDetailBySerialNoDocument = gql`
  query GetCreditCardDetailBySerialNo($serialNo: Int!) {
    creditCardDetailBySerialNo(serialNo: $serialNo) {
      serialNo
      date
      amount
      memo
      summaryId
      categoryByCategoryId {
        categoryId
        categoryName
        genreByGenreId {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetCreditCardDetailBySerialNoQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailBySerialNoQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetCreditCardDetailBySerialNoQuery,
    GetCreditCardDetailBySerialNoQueryVariables
  >({ query: GetCreditCardDetailBySerialNoDocument, ...options });
}
export const GetCreditCardDetailBySummaryIdDocument = gql`
  query GetCreditCardDetailBySummaryId($id: UUID!) {
    creditCardSummaryById(id: $id) {
      id
      creditCardDetailsBySummaryIdList(orderBy: DATE_ASC) {
        serialNo
        date
        memo
        amount
        categoryByCategoryId {
          categoryId
          categoryName
          genreByGenreId {
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
  >
) {
  return Urql.useQuery<
    GetCreditCardDetailBySummaryIdQuery,
    GetCreditCardDetailBySummaryIdQueryVariables
  >({ query: GetCreditCardDetailBySummaryIdDocument, ...options });
}
export const GetCreditCardListDocument = gql`
  query GetCreditCardList {
    allCreditCardSummariesList(orderBy: WITHDRAWAL_DATE_DESC) {
      id
      creditCard
      accountByAccountId {
        accountId
        accountName
      }
      count
      withdrawalDate
      totalAmount
      importFileHistoryById {
        importDatetime
        fileName
        fileType
      }
    }
  }
`;

export function useGetCreditCardListQuery(
  options?: Omit<Urql.UseQueryArgs<GetCreditCardListQueryVariables>, "query">
) {
  return Urql.useQuery<GetCreditCardListQuery, GetCreditCardListQueryVariables>(
    { query: GetCreditCardListDocument, ...options }
  );
}
export const GetCreditCardSummaryBetweenWithdrawalDateDocument = gql`
  query GetCreditCardSummaryBetweenWithdrawalDate(
    $fromDate: Date!
    $toDate: Date!
  ) {
    allCreditCardSummariesList(
      filter: {
        withdrawalDate: { greaterThanOrEqualTo: $fromDate }
        and: { withdrawalDate: { lessThanOrEqualTo: $toDate } }
      }
      orderBy: WITHDRAWAL_DATE_ASC
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId {
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
  >
) {
  return Urql.useQuery<
    GetCreditCardSummaryBetweenWithdrawalDateQuery,
    GetCreditCardSummaryBetweenWithdrawalDateQueryVariables
  >({ query: GetCreditCardSummaryBetweenWithdrawalDateDocument, ...options });
}
export const GetCreditCardSummaryByAccountIdBetweenDateDocument = gql`
  query GetCreditCardSummaryByAccountIdBetweenDate(
    $fromDate: Date!
    $toDate: Date!
    $accountId: String!
  ) {
    allCreditCardSummariesList(
      filter: {
        withdrawalDate: { greaterThanOrEqualTo: $fromDate }
        and: { withdrawalDate: { lessThanOrEqualTo: $toDate } }
      }
      orderBy: WITHDRAWAL_DATE_ASC
      condition: { accountId: $accountId }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId {
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
  >
) {
  return Urql.useQuery<
    GetCreditCardSummaryByAccountIdBetweenDateQuery,
    GetCreditCardSummaryByAccountIdBetweenDateQueryVariables
  >({ query: GetCreditCardSummaryByAccountIdBetweenDateDocument, ...options });
}
export const GetDailyDetailByDateDocument = gql`
  query GetDailyDetailByDate($fromDate: Date!, $toDate: Date!) {
    dailyDetailByDateList(fromDate: $fromDate, toDate: $toDate) {
      serialNo
      date
      amount
      memo
      categoryByCategoryId {
        categoryId
        categoryName
        genreByGenreId {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId {
        accountId
        accountName
      }
      userByUserId {
        userId
        userName
      }
    }
  }
`;

export function useGetDailyDetailByDateQuery(
  options: Omit<Urql.UseQueryArgs<GetDailyDetailByDateQueryVariables>, "query">
) {
  return Urql.useQuery<
    GetDailyDetailByDateQuery,
    GetDailyDetailByDateQueryVariables
  >({ query: GetDailyDetailByDateDocument, ...options });
}
export const GetDailyDetailByDateAccountIdDocument = gql`
  query GetDailyDetailByDateAccountId(
    $fromDate: Date!
    $toDate: Date!
    $accountId: String!
  ) {
    dailyDetailByDateList(
      fromDate: $fromDate
      toDate: $toDate
      filter: { accountId: { equalTo: $accountId } }
    ) {
      serialNo
      date
      amount
      memo
      categoryByCategoryId {
        categoryId
        categoryName
        genreByGenreId {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId {
        accountId
        accountName
      }
      userByUserId {
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
  >
) {
  return Urql.useQuery<
    GetDailyDetailByDateAccountIdQuery,
    GetDailyDetailByDateAccountIdQueryVariables
  >({ query: GetDailyDetailByDateAccountIdDocument, ...options });
}
export const GetDailyDetailByDateCategoryIdDocument = gql`
  query GetDailyDetailByDateCategoryId(
    $fromDate: Date!
    $toDate: Date!
    $categoryId: String!
  ) {
    dailyDetailByDateList(
      fromDate: $fromDate
      toDate: $toDate
      filter: { categoryId: { equalTo: $categoryId } }
    ) {
      serialNo
      date
      amount
      memo
      categoryByCategoryId {
        categoryId
        categoryName
        genreByGenreId {
          genreId
          genreName
          genreType
          iocomeType
        }
      }
      accountByAccountId {
        accountId
        accountName
      }
      userByUserId {
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
  >
) {
  return Urql.useQuery<
    GetDailyDetailByDateCategoryIdQuery,
    GetDailyDetailByDateCategoryIdQueryVariables
  >({ query: GetDailyDetailByDateCategoryIdDocument, ...options });
}
export const GetDailyDetailByDateGenreIdDocument = gql`
  query GetDailyDetailByDateGenreId(
    $genreId: String!
    $fromDate: Date!
    $toDate: Date!
  ) {
    allCategoriesList(condition: { genreId: $genreId }) {
      dailyDetailsByCategoryIdList(
        filter: {
          date: { greaterThanOrEqualTo: $fromDate }
          and: { date: { lessThanOrEqualTo: $toDate } }
        }
      ) {
        serialNo
        date
        amount
        memo
        categoryByCategoryId {
          categoryId
          categoryName
          genreByGenreId {
            genreId
            genreName
            genreType
            iocomeType
          }
        }
        accountByAccountId {
          accountId
          accountName
        }
        userByUserId {
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
  >
) {
  return Urql.useQuery<
    GetDailyDetailByDateGenreIdQuery,
    GetDailyDetailByDateGenreIdQueryVariables
  >({ query: GetDailyDetailByDateGenreIdDocument, ...options });
}
export const GetGenreTotalByMonthDocument = gql`
  query GetGenreTotalByMonth($fromDate: Date!, $toDate: Date!) {
    genreTotalByMonthList(fromDate: $fromDate, toDate: $toDate) {
      date
      iocomeType
      genreId
      genreName
      total
    }
  }
`;

export function useGetGenreTotalByMonthQuery(
  options: Omit<Urql.UseQueryArgs<GetGenreTotalByMonthQueryVariables>, "query">
) {
  return Urql.useQuery<
    GetGenreTotalByMonthQuery,
    GetGenreTotalByMonthQueryVariables
  >({ query: GetGenreTotalByMonthDocument, ...options });
}
export const GetSummaryCategoriesByUserIdDocument = gql`
  query GetSummaryCategoriesByUserId($userId: String!) {
    categories: allSummaryCategoriesList(
      condition: { userId: $userId }
      orderBy: DISPLAY_ORDER_ASC
    ) {
      id
      userId
      displayOrder
      category: categoryByCategoryId {
        id: categoryId
        name: categoryName
        genre: genreByGenreId {
          id: genreId
          name: genreName
          type: genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetSummaryCategoriesByUserIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetSummaryCategoriesByUserIdQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetSummaryCategoriesByUserIdQuery,
    GetSummaryCategoriesByUserIdQueryVariables
  >({ query: GetSummaryCategoriesByUserIdDocument, ...options });
}
export const GetTotalBetweenDateDocument = gql`
  query GetTotalBetweenDate($fromDate: Date!, $toDate: Date!) {
    incomeTotalByDate: allDailyTotalViewsList(
      condition: { iocomeType: INCOME }
      filter: {
        date: { greaterThanOrEqualTo: $fromDate }
        and: { date: { lessThanOrEqualTo: $toDate } }
      }
    ) {
      date
      iocomeType
      total
    }
    outcomeTotalByDate: allDailyTotalViewsList(
      condition: { iocomeType: OUTCOME }
      filter: {
        date: { greaterThanOrEqualTo: $fromDate }
        and: { date: { lessThanOrEqualTo: $toDate } }
      }
    ) {
      date
      iocomeType
      total
    }
  }
`;

export function useGetTotalBetweenDateQuery(
  options: Omit<Urql.UseQueryArgs<GetTotalBetweenDateQueryVariables>, "query">
) {
  return Urql.useQuery<
    GetTotalBetweenDateQuery,
    GetTotalBetweenDateQueryVariables
  >({ query: GetTotalBetweenDateDocument, ...options });
}
export const GetValidAccountsDocument = gql`
  query GetValidAccounts {
    allAccountsList(
      condition: { validFlag: true }
      orderBy: DISPLAY_ORDER_ASC
    ) {
      accountId
      accountName
    }
  }
`;

export function useGetValidAccountsQuery(
  options?: Omit<Urql.UseQueryArgs<GetValidAccountsQueryVariables>, "query">
) {
  return Urql.useQuery<GetValidAccountsQuery, GetValidAccountsQueryVariables>({
    query: GetValidAccountsDocument,
    ...options,
  });
}
export const GetValidCategoryByGenreIdDocument = gql`
  query GetValidCategoryByGenreId($genreId: String!) {
    allCategoriesList(
      condition: { genreId: $genreId, validFlag: true }
      orderBy: DISPLAY_ORDER_ASC
    ) {
      categoryId
      categoryName
      displayOrder
    }
  }
`;

export function useGetValidCategoryByGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetValidCategoryByGenreIdQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetValidCategoryByGenreIdQuery,
    GetValidCategoryByGenreIdQueryVariables
  >({ query: GetValidCategoryByGenreIdDocument, ...options });
}
export const GetValidGenreListByIocomeTypeDocument = gql`
  query GetValidGenreListByIocomeType($iocomeType: IocomeType!) {
    allGenresList(
      condition: { validFlag: true, iocomeType: $iocomeType }
      orderBy: DISPLAY_ORDER_ASC
    ) {
      genreId
      genreName
      genreType
      iocomeType
      displayOrder
      categoriesByGenreIdList(
        orderBy: DISPLAY_ORDER_ASC
        condition: { validFlag: true }
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
  >
) {
  return Urql.useQuery<
    GetValidGenreListByIocomeTypeQuery,
    GetValidGenreListByIocomeTypeQueryVariables
  >({ query: GetValidGenreListByIocomeTypeDocument, ...options });
}
export const UpdateCreditCardDetailBySerialNoDocument = gql`
  mutation UpdateCreditCardDetailBySerialNo(
    $serialNo: Int!
    $categoryId: String!
    $memo: String
  ) {
    updateCreditCardDetailBySerialNo(
      input: {
        creditCardDetailPatch: { categoryId: $categoryId, memo: $memo }
        serialNo: $serialNo
      }
    ) {
      clientMutationId
    }
  }
`;

export function useUpdateCreditCardDetailBySerialNoMutation() {
  return Urql.useMutation<
    UpdateCreditCardDetailBySerialNoMutation,
    UpdateCreditCardDetailBySerialNoMutationVariables
  >(UpdateCreditCardDetailBySerialNoDocument);
}
export const UpdateDailyDetailBySerialNoDocument = gql`
  mutation UpdateDailyDetailBySerialNo(
    $serialNo: Int!
    $date: Date!
    $categoryId: String!
    $accountId: String!
    $amount: BigFloat!
    $memo: String
  ) {
    updateDailyDetailBySerialNo(
      input: {
        dailyDetailPatch: {
          date: $date
          categoryId: $categoryId
          accountId: $accountId
          amount: $amount
          memo: $memo
        }
        serialNo: $serialNo
      }
    ) {
      dailyDetail {
        serialNo
      }
    }
  }
`;

export function useUpdateDailyDetailBySerialNoMutation() {
  return Urql.useMutation<
    UpdateDailyDetailBySerialNoMutation,
    UpdateDailyDetailBySerialNoMutationVariables
  >(UpdateDailyDetailBySerialNoDocument);
}
