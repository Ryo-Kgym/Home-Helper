import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";

type GenreSelectPresenterProps = {
  value: string | null;
  onChange: (_: string | null) => void;
  genres: SelectData[];
};
export const GenreSelectPresenter = ({
  value,
  onChange,
  genres,
}: GenreSelectPresenterProps) => (
  <Select
    label={"GENRE"}
    value={value}
    onChange={onChange}
    data={genres}
    placeholder={"ジャンルを選択してください"}
    withAsterisk
  />
);
