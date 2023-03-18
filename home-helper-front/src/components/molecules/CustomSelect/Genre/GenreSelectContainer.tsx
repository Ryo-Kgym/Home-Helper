import { FC } from "react";
import { GenreSelectPresenter } from "./GenreSelectPresenter";
import { useGetValidGenreListByIocomeTypeQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";

type GenreSelectContainerProps = {
  genreId: string | null;
  setGenreId: (value: string | null) => void;
  iocomeType: IocomeType;
};
export const GenreSelectContainer: FC<GenreSelectContainerProps> = ({
  genreId,
  setGenreId,
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
        description: genre.categoriesByGenreIdList
          .map((c) => c.categoryName)
          .join(", "),
      };
    }) ?? [];

  return (
    <GenreSelectPresenter
      value={genreId}
      onChange={setGenreId}
      genres={genres}
    />
  );
};
