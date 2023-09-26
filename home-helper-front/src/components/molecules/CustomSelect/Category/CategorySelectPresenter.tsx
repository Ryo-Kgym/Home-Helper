import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";

type CategorySelectPresenterProps = {
  value: string | null;
  onChange: (_: string | null) => void;
  categories: SelectData[];
};
export const CategorySelectPresenter = ({
  value,
  onChange,
  categories,
}: CategorySelectPresenterProps) => (
  <Select
    label={"CATEGORY"}
    value={value}
    onChange={onChange}
    data={categories}
    placeholder={"カテゴリを選択してください"}
    withAsterisk
  />
);
