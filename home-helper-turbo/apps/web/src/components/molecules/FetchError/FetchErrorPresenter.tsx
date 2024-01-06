import { CombinedError } from "@urql/core/dist/types/utils/error";
import { FC } from "react";

type FetchErrorPresenterProps = {
  error: CombinedError;
};

export const FetchErrorPresenter: FC<FetchErrorPresenterProps> = ({
  error,
}) => <div>{error.message}</div>;
