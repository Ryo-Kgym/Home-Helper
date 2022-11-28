export const usePossessionPoint = async (userId: string) => {
  const user = await fetch(`/api/homeHelper/fetchUser?userId=${userId}`).then(
    (r) => r.json()
  );

  return {
    user,
  };
};
