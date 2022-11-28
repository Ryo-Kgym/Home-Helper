export const loadUserId = () => {
  return sessionStorage.getItem("userId") ?? "error";
};
