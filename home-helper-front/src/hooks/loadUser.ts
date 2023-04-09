export const loadUser = (): LoginUser => {
  const loginUserId = sessionStorage.getItem("userId");

  return {
    getUserId: loginUserId!,
    isFailure: false,
  };
};

export const saveUserId = (userId: string) => {
  sessionStorage.setItem("userId", userId);
};

interface LoginUser {
  getUserId: string;
  isFailure: boolean;
}
