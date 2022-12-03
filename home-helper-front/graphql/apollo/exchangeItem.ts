import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";

// TODO Impl
export async function exchangeItem(): Promise<ExchangeItem[]> {
  return [
    {
      id: 1,
      point: 100,
      name: "交換品1",
    },
    {
      id: 2,
      point: 200,
      name: "交換品2",
    },
    {
      id: 3,
      point: 300,
      name: "交換品3",
    },
  ];
}
