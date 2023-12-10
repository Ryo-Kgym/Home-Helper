/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { refillDepositQuery } from "./refill-deposit-query";
import { CategoryDetail } from "./type";
import { GetDepositQuery } from "@graphql/hasura/generated/hasuraGraphql";

describe("refillDepositQuery function", () => {
  it("should correctly transform the provided GetDepositQuery data to CategoryDetail array", () => {
    const mockData: GetDepositQuery = {
      depositCategory: [
        {
          category: {
            categoryName: "test_category",
            id: "123",
            daily: {
              nodes: [
                {
                  id: "1",
                  date: new Date(),
                  amount: 100,
                  memo: "test daily detail",
                },
              ],
            },
            credit: {
              nodes: [
                {
                  id: "2",
                  date: new Date(),
                  amount: 200,
                  memo: "test credit detail",
                },
              ],
            },
          },
        },
      ],
    };

    const expectedResult: CategoryDetail[] = [
      {
        categoryId: "123",
        categoryName: "test_category",
        details: [
          {
            detailId: "1",
            type: "daily",
            date: mockData.depositCategory[0].category.daily.nodes[0].date,
            amount: 100,
            memo: "test daily detail",
          },
          {
            detailId: "2",
            type: "credit",
            date: mockData.depositCategory[0].category.credit.nodes[0].date,
            amount: 200,
            memo: "test credit detail",
          },
        ],
      },
    ];

    const result = refillDepositQuery(mockData);
    expect(result).toEqual(expectedResult);
  });

  it("should return an empty array when the provided data is undefined", () => {
    const result = refillDepositQuery(undefined);
    expect(result).toEqual([]);
  });
});
