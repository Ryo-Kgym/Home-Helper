import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { YearlySummaryCategoryPresenter } from "./YearlySummaryCategoryPresenter";
import {
  IocomeType,
  useGetAllCategoryListWithCriteriaQuery,
  useGetYearlySummaryCategoriesByUserIdQuery,
} from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";

export const YearlySummaryCategoryTransferContainer = () => {
  const { userId } = useUser();
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

  const [{ data: yearlySummaryCategoriesData }] =
    useGetYearlySummaryCategoriesByUserIdQuery({
      variables: {
        userId,
      },
    });

  const rightData: TransferListItem[] =
    yearlySummaryCategoriesData?.categories
      ?.map((c) => c.category)
      .map((c) => ({
        value: c!.id,
        label: c!.name,
        group: c!.genre?.name,
      })) ?? [];

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
