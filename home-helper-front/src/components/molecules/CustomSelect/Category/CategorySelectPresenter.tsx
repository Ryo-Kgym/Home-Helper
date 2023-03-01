import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { ItemProps } from "@components/atoms/Select/SelectPresenter";

type CategorySelectPresenterProps = {
  categories: ItemProps[];
};
export const CategorySelectPresenter: FC<CategorySelectPresenterProps> = ({
  categories,
}) => <Select label={"CATEGORY"} data={categories} />;
