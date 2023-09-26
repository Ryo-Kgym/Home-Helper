import { GenreSelectPresenter } from "./GenreSelectPresenter";
import { useGetValidGenreListByIocomeTypeQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";

type GenreSelectContainerProps = {
  genreId: string | null;
  setGenreId: (_: string | null) => void;
  iocomeType: IocomeType;
  setGenreName?: (_: string | null) => void;
};
export const GenreSelectContainer = ({
  genreId,
  setGenreId,
  iocomeType,
  setGenreName = () => {},
}: GenreSelectContainerProps) => {
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
