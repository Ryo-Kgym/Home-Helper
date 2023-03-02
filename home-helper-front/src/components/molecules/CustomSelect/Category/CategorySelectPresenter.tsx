import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";

type CategorySelectPresenterProps = {
  value: string | null;
  onChange: (value: string | null) => void;
  categories: SelectData[];
};
export const CategorySelectPresenter: FC<CategorySelectPresenterProps> = ({
  value,
  onChange,
  categories,
}) => (
  <Select
    label={"CATEGORY"}
    value={value}
    onChange={onChange}
    data={categories}
    placeholder={"カテゴリを選択してください"}
    withAsterisk
  />
);
