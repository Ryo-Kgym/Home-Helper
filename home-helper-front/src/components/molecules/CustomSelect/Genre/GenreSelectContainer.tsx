import { FC } from "react";
import { GenreSelectPresenter } from "./GenreSelectPresenter";
import {
  IocomeType,
  useGetValidGenreListByIocomeTypeQuery,
} from "@graphql/postgraphile/generated/graphql";

type GenreSelectContainerProps = {
  iocomeType: "INCOME" | "OUTCOME";
};
export const GenreSelectContainer: FC<GenreSelectContainerProps> = ({
  iocomeType,
}) => {
  const [{ data }] = useGetValidGenreListByIocomeTypeQuery({
    variables: { iocomeType: iocomeType as IocomeType },
  });

  const genres =
    data?.allGenresList?.map((genre) => {
      return {
        label: genre.genreName,
        value: genre.genreId,
        description: genre.genreName,
      };
    }) ?? [];

  return <GenreSelectPresenter genres={genres} />;
};
