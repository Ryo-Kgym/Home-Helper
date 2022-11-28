import { NextApiRequest, NextApiResponse } from "@node_modules/next";
import { User } from "@domain/model/home_helper/User";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  // @ts-ignore
  const userId: string = req.query.userId;

  res.status(200).json({
    id: userId,
    name: `ユーザ${userId}`,
    currentPoint: point(userId),
  });
}

const point = (userId: string): number => {
  if (userId === "1") {
    return 10000;
  }
  return 20000;
};
