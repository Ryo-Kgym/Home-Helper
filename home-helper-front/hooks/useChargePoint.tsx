import { User } from "@domain/model/home_helper/User";
import { HelpItem } from "@domain/model/home_helper/HelpItem";

export const useChargePoint = async (
  userId: string
): Promise<UseChargePointType> => {
  const helpItems = await fetch("/api/homeHelper/fetchHelpItems").then((r) =>
    r.json()
  );

  const user = await fetch(`/api/homeHelper/fetchUser?userId=${userId}`).then(
    (r) => r.json()
  );

  return {
    helpItems,
    user,
  };
};

type UseChargePointType = {
  helpItems: HelpItem[];
  user: User;
};
