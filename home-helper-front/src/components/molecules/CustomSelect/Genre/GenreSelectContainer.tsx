import { FC } from "react";
import { GenreSelectPresenter } from "./GenreSelectPresenter";
import { useGetValidGenreListByIocomeTypeQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";

type GenreSelectContainerProps = {
  iocomeType: IocomeType;
};
export const GenreSelectContainer: FC<GenreSelectContainerProps> = ({
  iocomeType,
}) => {
  const [{ data }] = useGetValidGenreListByIocomeTypeQuery({
    variables: { iocomeType: iocomeType },
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
