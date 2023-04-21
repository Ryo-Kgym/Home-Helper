import { FC } from "react";
import { GenreSelectPresenter } from "./GenreSelectPresenter";
import { useGetValidGenreListByIocomeTypeQuery } from "@graphql/postgraphile/generated/graphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";

type GenreSelectContainerProps = {
  genreId: string | null;
  setGenreId: (value: string | null) => void;
  iocomeType: IocomeType;
  setGenreName?: (value: string | null) => void;
};
export const GenreSelectContainer: FC<GenreSelectContainerProps> = ({
  genreId,
  setGenreId,
  iocomeType,
  setGenreName = () => {},
}) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidGenreListByIocomeTypeQuery({
    variables: { iocomeType: iocomeType, groupId },
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
      onChange={(value) => {
        const categoryName = genres.find((g) => g.value === value)?.label ?? "";
        setGenreId(value);
        setGenreName(categoryName);
      }}
      genres={genres}
    />
  );
};
