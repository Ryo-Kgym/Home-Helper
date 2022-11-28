export const useUsePoint = async (userId: string) => {
  const exchangeItems = await fetch("/api/homeHelper/fetchExchangeItems").then(
    (r) => r.json()
  );

  const user = await fetch(`/api/homeHelper/fetchUser?userId=${userId}`).then(
    (r) => r.json()
  );

  return {
    exchangeItems,
    user,
  };
};
