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
};

export type Account = Node & {
  __typename?: "Account";
  accountId: Scalars["String"];
  accountName: Scalars["String"];
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
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailsByCategoryIdList: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** Reads a single `Genre` that is related to this `Category`. */
  genreByGenreId?: Maybe<Genre>;
  genreId: Scalars["String"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

export type CategoryDailyDetailsByCategoryIdListArgs = {
  condition?: InputMaybe<DailyDetailCondition>;
  filter?: InputMaybe<DailyDetailFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailsOrderBy>>;
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
  /** Creates a single `DailyDetail`. */
  createDailyDetail?: Maybe<CreateDailyDetailPayload>;
  /** Creates a single `Genre`. */
  createGenre?: Maybe<CreateGenrePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccountByAccountId?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByCategoryId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `DailyDetail` using its globally unique id. */
  deleteDailyDetail?: Maybe<DeleteDailyDetailPayload>;
  /** Deletes a single `DailyDetail` using a unique key. */
  deleteDailyDetailBySerialNo?: Maybe<DeleteDailyDetailPayload>;
  /** Deletes a single `Genre` using its globally unique id. */
  deleteGenre?: Maybe<DeleteGenrePayload>;
  /** Deletes a single `Genre` using a unique key. */
  deleteGenreByGenreId?: Maybe<DeleteGenrePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUserId?: Maybe<DeleteUserPayload>;
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByAccountId?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByCategoryId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `DailyDetail` using its globally unique id and a patch. */
  updateDailyDetail?: Maybe<UpdateDailyDetailPayload>;
  /** Updates a single `DailyDetail` using a unique key and a patch. */
  updateDailyDetailBySerialNo?: Maybe<UpdateDailyDetailPayload>;
  /** Updates a single `Genre` using its globally unique id and a patch. */
  updateGenre?: Maybe<UpdateGenrePayload>;
  /** Updates a single `Genre` using a unique key and a patch. */
  updateGenreByGenreId?: Maybe<UpdateGenrePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUserId?: Maybe<UpdateUserPayload>;
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
export type MutationCreateDailyDetailArgs = {
  input: CreateDailyDetailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
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
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUserIdArgs = {
  input: DeleteUserByUserIdInput;
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
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUserIdArgs = {
  input: UpdateUserByUserIdInput;
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
  /** Reads a set of `DailyDetail`. */
  allDailyDetailsList?: Maybe<Array<DailyDetail>>;
  /** Reads a set of `DailyTotalView`. */
  allDailyTotalViewsList?: Maybe<Array<DailyTotalView>>;
  /** Reads a set of `Genre`. */
  allGenresList?: Maybe<Array<Genre>>;
  /** Reads a set of `TotalByAccountView`. */
  allTotalByAccountViewsList?: Maybe<Array<TotalByAccountView>>;
  /** Reads a set of `TotalByCategoryView`. */
  allTotalByCategoryViewsList?: Maybe<Array<TotalByCategoryView>>;
  /** Reads a set of `User`. */
  allUsersList?: Maybe<Array<User>>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryByCategoryId?: Maybe<Category>;
  /** Reads and enables pagination through a set of `TotalByCategoryView`. */
  categoryTotalByMonthList?: Maybe<Array<Maybe<TotalByCategoryView>>>;
  /** Reads a single `DailyDetail` using its globally unique `ID`. */
  dailyDetail?: Maybe<DailyDetail>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailByDateList?: Maybe<Array<Maybe<DailyDetail>>>;
  dailyDetailBySerialNo?: Maybe<DailyDetail>;
  /** Reads and enables pagination through a set of `DailyTotalView`. */
  dailyTotalViewByDateIocomeTypeList?: Maybe<Array<Maybe<DailyTotalView>>>;
  /** Reads a single `Genre` using its globally unique `ID`. */
  genre?: Maybe<Genre>;
  genreByGenreId?: Maybe<Genre>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByUserId?: Maybe<User>;
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
  offset?: InputMaybe<Scalars["Int"]>;
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
export type QueryAllUsersListArgs = {
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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
export type QueryDailyTotalViewByDateIocomeTypeListArgs = {
  date?: InputMaybe<Scalars["Date"]>;
  filter?: InputMaybe<DailyTotalViewFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  iocomeType?: InputMaybe<IocomeType>;
  offset?: InputMaybe<Scalars["Int"]>;
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
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByUserIdArgs = {
  userId: Scalars["String"];
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

export type TotalByAccountView = {
  __typename?: "TotalByAccountView";
  accountId?: Maybe<Scalars["String"]>;
  accountName?: Maybe<Scalars["String"]>;
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

export type User = Node & {
  __typename?: "User";
  /** Reads and enables pagination through a set of `Account`. */
  accountsByOwnerUserIdList: Array<Account>;
  /** Reads and enables pagination through a set of `DailyDetail`. */
  dailyDetailsByUserIdList: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  userId: Scalars["String"];
  userName: Scalars["String"];
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

export type GetAccountBalanceListQueryVariables = Exact<{
  [key: string]: never;
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

export type GetDailyTotalByDateIocomeTypeQueryVariables = Exact<{
  iocomeType: IocomeType;
  date: Scalars["Date"];
}>;

export type GetDailyTotalByDateIocomeTypeQuery = {
  __typename?: "Query";
  dailyTotalViewByDateIocomeTypeList?: Array<{
    __typename?: "DailyTotalView";
    date?: any | null;
    iocomeType?: IocomeType | null;
    total?: any | null;
  } | null> | null;
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
  }> | null;
};

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
export const GetAccountBalanceListDocument = gql`
  query GetAccountBalanceList {
    accountTotalList {
      accountId
      accountName
      total
      displayOrder
    }
  }
`;

export function useGetAccountBalanceListQuery(
  options?: Omit<
    Urql.UseQueryArgs<GetAccountBalanceListQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetAccountBalanceListQuery,
    GetAccountBalanceListQueryVariables
  >({ query: GetAccountBalanceListDocument, ...options });
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
export const GetDailyTotalByDateIocomeTypeDocument = gql`
  query GetDailyTotalByDateIocomeType($iocomeType: IocomeType!, $date: Date!) {
    dailyTotalViewByDateIocomeTypeList(date: $date, iocomeType: $iocomeType) {
      date
      iocomeType
      total
    }
  }
`;

export function useGetDailyTotalByDateIocomeTypeQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyTotalByDateIocomeTypeQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    GetDailyTotalByDateIocomeTypeQuery,
    GetDailyTotalByDateIocomeTypeQueryVariables
  >({ query: GetDailyTotalByDateIocomeTypeDocument, ...options });
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
