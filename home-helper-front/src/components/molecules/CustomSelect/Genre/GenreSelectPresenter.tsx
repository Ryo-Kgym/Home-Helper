import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { ItemProps } from "@components/atoms/Select/SelectPresenter";

type GenreSelectPresenterProps = {
  genres: ItemProps[];
};
export const GenreSelectPresenter: FC<GenreSelectPresenterProps> = ({
  genres,
}) => <Select label={"GENRE"} data={genres} />;
