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
};

export type AccountBalance = Node & {
  __typename?: "AccountBalance";
  accountId: Scalars["String"];
  balance?: Maybe<Scalars["BigFloat"]>;
  /** Reads a single `MAccount` that is related to this `AccountBalance`. */
  mAccountByAccountId?: Maybe<MAccount>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/**
 * A condition to be used against `AccountBalance` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AccountBalanceCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `balance` field. */
  balance?: InputMaybe<Scalars["BigFloat"]>;
};

/** A filter to be used against `AccountBalance` object types. All fields are combined with a logical ‘and.’ */
export type AccountBalanceFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AccountBalanceFilter>>;
  /** Filter by the object’s `balance` field. */
  balance?: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AccountBalanceFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AccountBalanceFilter>>;
};

/** An input for mutations affecting `AccountBalance` */
export type AccountBalanceInput = {
  accountId: Scalars["String"];
  balance?: InputMaybe<Scalars["BigFloat"]>;
};

/** Represents an update to a `AccountBalance`. Fields that are set will be updated. */
export type AccountBalancePatch = {
  accountId?: InputMaybe<Scalars["String"]>;
  balance?: InputMaybe<Scalars["BigFloat"]>;
};

/** Methods to use when ordering `AccountBalance`. */
export enum AccountBalancesOrderBy {
  AccountIdAsc = "ACCOUNT_ID_ASC",
  AccountIdDesc = "ACCOUNT_ID_DESC",
  BalanceAsc = "BALANCE_ASC",
  BalanceDesc = "BALANCE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
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

/** All input for the create `AccountBalance` mutation. */
export type CreateAccountBalanceInput = {
  /** The `AccountBalance` to be created by this mutation. */
  accountBalance: AccountBalanceInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** The output of our create `AccountBalance` mutation. */
export type CreateAccountBalancePayload = {
  __typename?: "CreateAccountBalancePayload";
  /** The `AccountBalance` that was created by this mutation. */
  accountBalance?: Maybe<AccountBalance>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Reads a single `MAccount` that is related to this `AccountBalance`. */
  mAccountByAccountId?: Maybe<MAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `MAccount` mutation. */
export type CreateMAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `MAccount` to be created by this mutation. */
  mAccount: MAccountInput;
};

/** The output of our create `MAccount` mutation. */
export type CreateMAccountPayload = {
  __typename?: "CreateMAccountPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MAccount` that was created by this mutation. */
  mAccount?: Maybe<MAccount>;
  /** Reads a single `MUser` that is related to this `MAccount`. */
  mUserByOwnerUserId?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `MCategory` mutation. */
export type CreateMCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `MCategory` to be created by this mutation. */
  mCategory: MCategoryInput;
};

/** The output of our create `MCategory` mutation. */
export type CreateMCategoryPayload = {
  __typename?: "CreateMCategoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MCategory` that was created by this mutation. */
  mCategory?: Maybe<MCategory>;
  /** Reads a single `MGenre` that is related to this `MCategory`. */
  mGenreByGenreId?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `MGenre` mutation. */
export type CreateMGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `MGenre` to be created by this mutation. */
  mGenre: MGenreInput;
};

/** The output of our create `MGenre` mutation. */
export type CreateMGenrePayload = {
  __typename?: "CreateMGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MGenre` that was created by this mutation. */
  mGenre?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `MUser` mutation. */
export type CreateMUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The `MUser` to be created by this mutation. */
  mUser: MUserInput;
};

/** The output of our create `MUser` mutation. */
export type CreateMUserPayload = {
  __typename?: "CreateMUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MUser` that was created by this mutation. */
  mUser?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteAccountBalanceByAccountId` mutation. */
export type DeleteAccountBalanceByAccountIdInput = {
  accountId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `deleteAccountBalance` mutation. */
export type DeleteAccountBalanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `AccountBalance` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `AccountBalance` mutation. */
export type DeleteAccountBalancePayload = {
  __typename?: "DeleteAccountBalancePayload";
  /** The `AccountBalance` that was deleted by this mutation. */
  accountBalance?: Maybe<AccountBalance>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedAccountBalanceId?: Maybe<Scalars["ID"]>;
  /** Reads a single `MAccount` that is related to this `AccountBalance`. */
  mAccountByAccountId?: Maybe<MAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteMAccountByAccountId` mutation. */
export type DeleteMAccountByAccountIdInput = {
  accountId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `deleteMAccount` mutation. */
export type DeleteMAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `MAccount` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `MAccount` mutation. */
export type DeleteMAccountPayload = {
  __typename?: "DeleteMAccountPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedMAccountId?: Maybe<Scalars["ID"]>;
  /** The `MAccount` that was deleted by this mutation. */
  mAccount?: Maybe<MAccount>;
  /** Reads a single `MUser` that is related to this `MAccount`. */
  mUserByOwnerUserId?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteMCategoryByCategoryId` mutation. */
export type DeleteMCategoryByCategoryIdInput = {
  categoryId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `deleteMCategory` mutation. */
export type DeleteMCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `MCategory` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `MCategory` mutation. */
export type DeleteMCategoryPayload = {
  __typename?: "DeleteMCategoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedMCategoryId?: Maybe<Scalars["ID"]>;
  /** The `MCategory` that was deleted by this mutation. */
  mCategory?: Maybe<MCategory>;
  /** Reads a single `MGenre` that is related to this `MCategory`. */
  mGenreByGenreId?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteMGenreByGenreId` mutation. */
export type DeleteMGenreByGenreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  genreId: Scalars["String"];
};

/** All input for the `deleteMGenre` mutation. */
export type DeleteMGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `MGenre` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `MGenre` mutation. */
export type DeleteMGenrePayload = {
  __typename?: "DeleteMGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedMGenreId?: Maybe<Scalars["ID"]>;
  /** The `MGenre` that was deleted by this mutation. */
  mGenre?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteMUserByUserId` mutation. */
export type DeleteMUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
};

/** All input for the `deleteMUser` mutation. */
export type DeleteMUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `MUser` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `MUser` mutation. */
export type DeleteMUserPayload = {
  __typename?: "DeleteMUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedMUserId?: Maybe<Scalars["ID"]>;
  /** The `MUser` that was deleted by this mutation. */
  mUser?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
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

export type MAccount = Node & {
  __typename?: "MAccount";
  /** Reads a single `AccountBalance` that is related to this `MAccount`. */
  accountBalanceByAccountId?: Maybe<AccountBalance>;
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  /** Reads a single `MUser` that is related to this `MAccount`. */
  mUserByOwnerUserId?: Maybe<MUser>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  ownerUserId: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/**
 * A condition to be used against `MAccount` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MAccountCondition = {
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

/** A filter to be used against `MAccount` object types. All fields are combined with a logical ‘and.’ */
export type MAccountFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `accountName` field. */
  accountName?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MAccountFilter>>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MAccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MAccountFilter>>;
  /** Filter by the object’s `ownerUserId` field. */
  ownerUserId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `MAccount` */
export type MAccountInput = {
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  ownerUserId: Scalars["String"];
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `MAccount`. Fields that are set will be updated. */
export type MAccountPatch = {
  accountId?: InputMaybe<Scalars["String"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  ownerUserId?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Methods to use when ordering `MAccount`. */
export enum MAccountsOrderBy {
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

/** Methods to use when ordering `MCategory`. */
export enum MCategoriesOrderBy {
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

export type MCategory = Node & {
  __typename?: "MCategory";
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  /** Reads a single `MGenre` that is related to this `MCategory`. */
  mGenreByGenreId?: Maybe<MGenre>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/**
 * A condition to be used against `MCategory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MCategoryCondition = {
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

/** A filter to be used against `MCategory` object types. All fields are combined with a logical ‘and.’ */
export type MCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MCategoryFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `categoryName` field. */
  categoryName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Filter by the object’s `genreId` field. */
  genreId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MCategoryFilter>>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `MCategory` */
export type MCategoryInput = {
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `MCategory`. Fields that are set will be updated. */
export type MCategoryPatch = {
  categoryId?: InputMaybe<Scalars["String"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

export type MGenre = Node & {
  __typename?: "MGenre";
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  genreName: Scalars["String"];
  genreType: GenreType;
  iocomeType: IocomeType;
  /** Reads and enables pagination through a set of `MCategory`. */
  mCategoriesByGenreIdList: Array<MCategory>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

export type MGenreMCategoriesByGenreIdListArgs = {
  condition?: InputMaybe<MCategoryCondition>;
  filter?: InputMaybe<MCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MCategoriesOrderBy>>;
};

/** A condition to be used against `MGenre` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MGenreCondition = {
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

/** A filter to be used against `MGenre` object types. All fields are combined with a logical ‘and.’ */
export type MGenreFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MGenreFilter>>;
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
  not?: InputMaybe<MGenreFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MGenreFilter>>;
  /** Filter by the object’s `validFlag` field. */
  validFlag?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `MGenre` */
export type MGenreInput = {
  displayOrder: Scalars["Int"];
  genreId: Scalars["String"];
  genreName: Scalars["String"];
  genreType: GenreType;
  iocomeType: IocomeType;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents an update to a `MGenre`. Fields that are set will be updated. */
export type MGenrePatch = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<GenreType>;
  iocomeType?: InputMaybe<IocomeType>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Methods to use when ordering `MGenre`. */
export enum MGenresOrderBy {
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

export type MUser = Node & {
  __typename?: "MUser";
  displayOrder: Scalars["Int"];
  /** Reads and enables pagination through a set of `MAccount`. */
  mAccountsByOwnerUserIdList: Array<MAccount>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  userId: Scalars["String"];
  userName: Scalars["String"];
};

export type MUserMAccountsByOwnerUserIdListArgs = {
  condition?: InputMaybe<MAccountCondition>;
  filter?: InputMaybe<MAccountFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MAccountsOrderBy>>;
};

/** A condition to be used against `MUser` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MUserCondition = {
  /** Checks for equality with the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["String"]>;
  /** Checks for equality with the object’s `userName` field. */
  userName?: InputMaybe<Scalars["String"]>;
};

/** A filter to be used against `MUser` object types. All fields are combined with a logical ‘and.’ */
export type MUserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MUserFilter>>;
  /** Filter by the object’s `displayOrder` field. */
  displayOrder?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MUserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MUserFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userName` field. */
  userName?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `MUser` */
export type MUserInput = {
  displayOrder: Scalars["Int"];
  userId: Scalars["String"];
  userName: Scalars["String"];
};

/** Represents an update to a `MUser`. Fields that are set will be updated. */
export type MUserPatch = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** Methods to use when ordering `MUser`. */
export enum MUsersOrderBy {
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  /** Creates a single `AccountBalance`. */
  createAccountBalance?: Maybe<CreateAccountBalancePayload>;
  /** Creates a single `MAccount`. */
  createMAccount?: Maybe<CreateMAccountPayload>;
  /** Creates a single `MCategory`. */
  createMCategory?: Maybe<CreateMCategoryPayload>;
  /** Creates a single `MGenre`. */
  createMGenre?: Maybe<CreateMGenrePayload>;
  /** Creates a single `MUser`. */
  createMUser?: Maybe<CreateMUserPayload>;
  /** Deletes a single `AccountBalance` using its globally unique id. */
  deleteAccountBalance?: Maybe<DeleteAccountBalancePayload>;
  /** Deletes a single `AccountBalance` using a unique key. */
  deleteAccountBalanceByAccountId?: Maybe<DeleteAccountBalancePayload>;
  /** Deletes a single `MAccount` using its globally unique id. */
  deleteMAccount?: Maybe<DeleteMAccountPayload>;
  /** Deletes a single `MAccount` using a unique key. */
  deleteMAccountByAccountId?: Maybe<DeleteMAccountPayload>;
  /** Deletes a single `MCategory` using its globally unique id. */
  deleteMCategory?: Maybe<DeleteMCategoryPayload>;
  /** Deletes a single `MCategory` using a unique key. */
  deleteMCategoryByCategoryId?: Maybe<DeleteMCategoryPayload>;
  /** Deletes a single `MGenre` using its globally unique id. */
  deleteMGenre?: Maybe<DeleteMGenrePayload>;
  /** Deletes a single `MGenre` using a unique key. */
  deleteMGenreByGenreId?: Maybe<DeleteMGenrePayload>;
  /** Deletes a single `MUser` using its globally unique id. */
  deleteMUser?: Maybe<DeleteMUserPayload>;
  /** Deletes a single `MUser` using a unique key. */
  deleteMUserByUserId?: Maybe<DeleteMUserPayload>;
  /** Updates a single `AccountBalance` using its globally unique id and a patch. */
  updateAccountBalance?: Maybe<UpdateAccountBalancePayload>;
  /** Updates a single `AccountBalance` using a unique key and a patch. */
  updateAccountBalanceByAccountId?: Maybe<UpdateAccountBalancePayload>;
  /** Updates a single `MAccount` using its globally unique id and a patch. */
  updateMAccount?: Maybe<UpdateMAccountPayload>;
  /** Updates a single `MAccount` using a unique key and a patch. */
  updateMAccountByAccountId?: Maybe<UpdateMAccountPayload>;
  /** Updates a single `MCategory` using its globally unique id and a patch. */
  updateMCategory?: Maybe<UpdateMCategoryPayload>;
  /** Updates a single `MCategory` using a unique key and a patch. */
  updateMCategoryByCategoryId?: Maybe<UpdateMCategoryPayload>;
  /** Updates a single `MGenre` using its globally unique id and a patch. */
  updateMGenre?: Maybe<UpdateMGenrePayload>;
  /** Updates a single `MGenre` using a unique key and a patch. */
  updateMGenreByGenreId?: Maybe<UpdateMGenrePayload>;
  /** Updates a single `MUser` using its globally unique id and a patch. */
  updateMUser?: Maybe<UpdateMUserPayload>;
  /** Updates a single `MUser` using a unique key and a patch. */
  updateMUserByUserId?: Maybe<UpdateMUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountBalanceArgs = {
  input: CreateAccountBalanceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMAccountArgs = {
  input: CreateMAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMCategoryArgs = {
  input: CreateMCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMGenreArgs = {
  input: CreateMGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMUserArgs = {
  input: CreateMUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountBalanceArgs = {
  input: DeleteAccountBalanceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountBalanceByAccountIdArgs = {
  input: DeleteAccountBalanceByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMAccountArgs = {
  input: DeleteMAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMAccountByAccountIdArgs = {
  input: DeleteMAccountByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMCategoryArgs = {
  input: DeleteMCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMCategoryByCategoryIdArgs = {
  input: DeleteMCategoryByCategoryIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMGenreArgs = {
  input: DeleteMGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMGenreByGenreIdArgs = {
  input: DeleteMGenreByGenreIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMUserArgs = {
  input: DeleteMUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMUserByUserIdArgs = {
  input: DeleteMUserByUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountBalanceArgs = {
  input: UpdateAccountBalanceInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountBalanceByAccountIdArgs = {
  input: UpdateAccountBalanceByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMAccountArgs = {
  input: UpdateMAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMAccountByAccountIdArgs = {
  input: UpdateMAccountByAccountIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMCategoryArgs = {
  input: UpdateMCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMCategoryByCategoryIdArgs = {
  input: UpdateMCategoryByCategoryIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMGenreArgs = {
  input: UpdateMGenreInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMGenreByGenreIdArgs = {
  input: UpdateMGenreByGenreIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMUserArgs = {
  input: UpdateMUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMUserByUserIdArgs = {
  input: UpdateMUserByUserIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query";
  /** Reads a single `AccountBalance` using its globally unique `ID`. */
  accountBalance?: Maybe<AccountBalance>;
  accountBalanceByAccountId?: Maybe<AccountBalance>;
  /** Reads a set of `AccountBalance`. */
  allAccountBalancesList?: Maybe<Array<AccountBalance>>;
  /** Reads a set of `MAccount`. */
  allMAccountsList?: Maybe<Array<MAccount>>;
  /** Reads a set of `MCategory`. */
  allMCategoriesList?: Maybe<Array<MCategory>>;
  /** Reads a set of `MGenre`. */
  allMGenresList?: Maybe<Array<MGenre>>;
  /** Reads a set of `MUser`. */
  allMUsersList?: Maybe<Array<MUser>>;
  /** Reads a single `MAccount` using its globally unique `ID`. */
  mAccount?: Maybe<MAccount>;
  mAccountByAccountId?: Maybe<MAccount>;
  /** Reads a single `MCategory` using its globally unique `ID`. */
  mCategory?: Maybe<MCategory>;
  mCategoryByCategoryId?: Maybe<MCategory>;
  /** Reads a single `MGenre` using its globally unique `ID`. */
  mGenre?: Maybe<MGenre>;
  mGenreByGenreId?: Maybe<MGenre>;
  /** Reads a single `MUser` using its globally unique `ID`. */
  mUser?: Maybe<MUser>;
  mUserByUserId?: Maybe<MUser>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountBalanceArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountBalanceByAccountIdArgs = {
  accountId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountBalancesListArgs = {
  condition?: InputMaybe<AccountBalanceCondition>;
  filter?: InputMaybe<AccountBalanceFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountBalancesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllMAccountsListArgs = {
  condition?: InputMaybe<MAccountCondition>;
  filter?: InputMaybe<MAccountFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MAccountsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllMCategoriesListArgs = {
  condition?: InputMaybe<MCategoryCondition>;
  filter?: InputMaybe<MCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllMGenresListArgs = {
  condition?: InputMaybe<MGenreCondition>;
  filter?: InputMaybe<MGenreFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MGenresOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllMUsersListArgs = {
  condition?: InputMaybe<MUserCondition>;
  filter?: InputMaybe<MUserFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MUsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryMAccountArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMAccountByAccountIdArgs = {
  accountId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMCategoryArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMCategoryByCategoryIdArgs = {
  categoryId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMGenreArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMGenreByGenreIdArgs = {
  genreId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMUserArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryMUserByUserIdArgs = {
  userId: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
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

/** All input for the `updateAccountBalanceByAccountId` mutation. */
export type UpdateAccountBalanceByAccountIdInput = {
  /** An object where the defined keys will be set on the `AccountBalance` being updated. */
  accountBalancePatch: AccountBalancePatch;
  accountId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

/** All input for the `updateAccountBalance` mutation. */
export type UpdateAccountBalanceInput = {
  /** An object where the defined keys will be set on the `AccountBalance` being updated. */
  accountBalancePatch: AccountBalancePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `AccountBalance` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `AccountBalance` mutation. */
export type UpdateAccountBalancePayload = {
  __typename?: "UpdateAccountBalancePayload";
  /** The `AccountBalance` that was updated by this mutation. */
  accountBalance?: Maybe<AccountBalance>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** Reads a single `MAccount` that is related to this `AccountBalance`. */
  mAccountByAccountId?: Maybe<MAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateMAccountByAccountId` mutation. */
export type UpdateMAccountByAccountIdInput = {
  accountId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MAccount` being updated. */
  mAccountPatch: MAccountPatch;
};

/** All input for the `updateMAccount` mutation. */
export type UpdateMAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MAccount` being updated. */
  mAccountPatch: MAccountPatch;
  /** The globally unique `ID` which will identify a single `MAccount` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `MAccount` mutation. */
export type UpdateMAccountPayload = {
  __typename?: "UpdateMAccountPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MAccount` that was updated by this mutation. */
  mAccount?: Maybe<MAccount>;
  /** Reads a single `MUser` that is related to this `MAccount`. */
  mUserByOwnerUserId?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateMCategoryByCategoryId` mutation. */
export type UpdateMCategoryByCategoryIdInput = {
  categoryId: Scalars["String"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MCategory` being updated. */
  mCategoryPatch: MCategoryPatch;
};

/** All input for the `updateMCategory` mutation. */
export type UpdateMCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MCategory` being updated. */
  mCategoryPatch: MCategoryPatch;
  /** The globally unique `ID` which will identify a single `MCategory` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `MCategory` mutation. */
export type UpdateMCategoryPayload = {
  __typename?: "UpdateMCategoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MCategory` that was updated by this mutation. */
  mCategory?: Maybe<MCategory>;
  /** Reads a single `MGenre` that is related to this `MCategory`. */
  mGenreByGenreId?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateMGenreByGenreId` mutation. */
export type UpdateMGenreByGenreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  genreId: Scalars["String"];
  /** An object where the defined keys will be set on the `MGenre` being updated. */
  mGenrePatch: MGenrePatch;
};

/** All input for the `updateMGenre` mutation. */
export type UpdateMGenreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MGenre` being updated. */
  mGenrePatch: MGenrePatch;
  /** The globally unique `ID` which will identify a single `MGenre` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `MGenre` mutation. */
export type UpdateMGenrePayload = {
  __typename?: "UpdateMGenrePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MGenre` that was updated by this mutation. */
  mGenre?: Maybe<MGenre>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateMUserByUserId` mutation. */
export type UpdateMUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MUser` being updated. */
  mUserPatch: MUserPatch;
  userId: Scalars["String"];
};

/** All input for the `updateMUser` mutation. */
export type UpdateMUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `MUser` being updated. */
  mUserPatch: MUserPatch;
  /** The globally unique `ID` which will identify a single `MUser` to be updated. */
  nodeId: Scalars["ID"];
};

/** The output of our update `MUser` mutation. */
export type UpdateMUserPayload = {
  __typename?: "UpdateMUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `MUser` that was updated by this mutation. */
  mUser?: Maybe<MUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type GetAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountsQuery = {
  __typename?: "Query";
  allMAccountsList?: Array<{
    __typename?: "MAccount";
    accountId: string;
    accountName: string;
    displayOrder: number;
    validFlag?: boolean | null;
    accountBalanceByAccountId?: {
      __typename?: "AccountBalance";
      balance?: any | null;
    } | null;
    mUserByOwnerUserId?: {
      __typename?: "MUser";
      userId: string;
      userName: string;
    } | null;
  }> | null;
};

export const GetAccountsDocument = gql`
  query GetAccounts {
    allMAccountsList(condition: {}, orderBy: DISPLAY_ORDER_ASC) {
      accountId
      accountName
      displayOrder
      validFlag
      accountBalanceByAccountId {
        balance
      }
      mUserByOwnerUserId {
        userId
        userName
      }
    }
  }
`;

export function useGetAccountsQuery(
  options?: Omit<Urql.UseQueryArgs<GetAccountsQueryVariables>, "query">
) {
  return Urql.useQuery<GetAccountsQuery, GetAccountsQueryVariables>({
    query: GetAccountsDocument,
    ...options,
  });
}
