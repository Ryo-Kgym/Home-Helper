import { FC } from "react";
import { GenreSelectPresenter } from "./GenreSelectPresenter";
import {
  IocomeType,
  useGetGenreListByIocomeTypeQuery,
} from "@graphql/postgraphile/generated/graphql";

type GenreSelectContainerProps = {};
export const GenreSelectContainer: FC<GenreSelectContainerProps> = () => {
  const [{ data }] = useGetGenreListByIocomeTypeQuery({
    variables: { iocomeType: IocomeType.Income },
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
