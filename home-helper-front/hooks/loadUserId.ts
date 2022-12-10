export const loadUserId = (): string => {
  return sessionStorage.getItem("userId") ?? "error";
};

export const saveUserId = (userId: string) => {
  sessionStorage.setItem("userId", userId);
};
