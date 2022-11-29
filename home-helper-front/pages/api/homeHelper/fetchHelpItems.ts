import type { NextApiRequest, NextApiResponse } from "next";
import { HelpItem } from "@domain/model/home_helper/HelpItem";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelpItem[]>
) {
  res.status(200).json(helpItems);
}

const helpItems = [
  { id: 1, point: 100, name: "お皿運び" },
  { id: 2, point: 200, name: "お風呂掃除" },
  { id: 3, point: 300, name: "トイレ掃除" },
  { id: 4, point: 50, name: "水やり" },
  { id: 5, point: 10, name: "お片付け" },
];
