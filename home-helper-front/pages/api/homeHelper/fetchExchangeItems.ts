import type { NextApiRequest, NextApiResponse } from "next";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExchangeItem[]>
) {
  res.status(200).json(exchangeItems);
}

const exchangeItems = [
  { id: 1, point: 500, name: "お菓子" },
  { id: 2, point: 1000, name: "お小遣い" },
  { id: 3, point: 3000, name: "プラレール(3000円)" },
];
