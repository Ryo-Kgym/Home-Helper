export const loadUserId = (): string => {
  return sessionStorage.getItem("userId") ?? "error";
};
