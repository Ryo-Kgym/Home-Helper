export const createDateList = (date: Date): Date[] => {
  const dateList = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0);

  const leastDays = 7 - lastDate.getDay() - 1;

  for (let i = 0; i < firstDay + lastDate.getDate() + leastDays; i++) {
    const date = new Date(year, month, i - firstDay + 1);
    dateList.push(date);
  }

  return dateList;
};
