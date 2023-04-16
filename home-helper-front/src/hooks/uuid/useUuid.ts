import { v4 as uuidv4 } from "uuid";
export const useUuid = () => {
  return { get: uuidv4 };
};
