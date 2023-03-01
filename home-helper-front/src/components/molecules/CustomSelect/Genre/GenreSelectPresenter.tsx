import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";

type GenreSelectPresenterProps = {
  value: string | null;
  onChange: (value: string | null) => void;
  genres: SelectData[];
};
export const GenreSelectPresenter: FC<GenreSelectPresenterProps> = ({
  value,
  onChange,
  genres,
}) => (
  <Select
    label={"GENRE"}
    value={value}
    onChange={onChange}
    data={genres}
    placeholder={"ジャンルを選択してください"}
  />
);
