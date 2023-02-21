import { TableProps } from "@components/atoms/Table";
import { CategoryPresenter } from "@components/organisms/category/CategoryPresenter";
import { PriceByCategory } from "@domain/model/household/Category";
import { IocomeType } from "@domain/model/household/IocomeType";

export const CategoryContainer = () => {
  const tableProps: TableProps[] = mockCategory.map((category) => {
    return {
      keyPrefix: "category",
      columns: [
        { value: category.category.iocomeType, align: "center" },
        { value: category.category.genreName, align: "left" },
        { value: category.category.categoryName, align: "left" },
        { value: category.price.toLocaleString(), align: "right" },
      ],
    };
  });

  return <CategoryPresenter tableProps={tableProps} />;
};
const mockCategory: PriceByCategory[] = [
  {
    category: {
      iocomeType: IocomeType.INCOME,
      genreId: "g1",
      genreName: "本業",
      categoryId: "1",
      categoryName: "給料",
    },
    price: 200000,
  },
  {
    category: {
      iocomeType: IocomeType.INCOME,
      genreId: "g2",
      genreName: "副業",
      categoryId: "2",
      categoryName: "給料",
    },
    price: 20000,
  },
  {
    category: {
      iocomeType: IocomeType.OUTCOME,
      genreId: "g6",
      genreName: "生活費",
      categoryId: "6",
      categoryName: "食費",
    },
    price: 20000,
  },
  {
    category: {
      iocomeType: IocomeType.OUTCOME,
      genreId: "g7",
      genreName: "教育関連",
      categoryId: "7",
      categoryName: "保育料",
    },
    price: 40000,
  },
];
