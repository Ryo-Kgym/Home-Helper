import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { YearlySummaryCategoryPresenter } from "./YearlySummaryCategoryPresenter";
import {
  IocomeType,
  useGetAllCategoryListWithCriteriaQuery,
} from "@graphql/postgraphile/generated/graphql";

export const YearlySummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);

  const registerClickHandler = () => {};
  const resetClickHandler = () => {};

  const [{ data }] = useGetAllCategoryListWithCriteriaQuery({
    variables: {
      categoryIn: [true],
      genreIn: [true],
      iocomeTypeIn: [IocomeType.Income, IocomeType.Outcome],
    },
  });

  const leftData: TransferListItem[] =
    data?.genres?.flatMap((g) => {
      return g.categories.map((c) => {
        return { value: c.id, label: c.name, group: g.name };
      });
    }) ?? [];

  useEffect(() => {
    setTransferData([leftData, rightData]);
  }, []);

  return (
    <YearlySummaryCategoryPresenter
      transferData={transferData}
      setData={setTransferData}
      registerClickHandler={registerClickHandler}
      resetClickHandler={resetClickHandler}
    />
  );
};

const rightData: TransferListItem[] = [
  { value: "blitz", label: "Blitz.js", group: "Frameworks" },
  { value: "gatsby", label: "Gatsby.js", group: "Frameworks" },
  { value: "vue", label: "Vue", group: "Frameworks" },
  { value: "rw", label: "Redwood", group: "Libraries" },
  { value: "np", label: "NumPy", group: "Libraries" },
];
