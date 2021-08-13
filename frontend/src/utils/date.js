export const addDaysToDate = (days, date) => {
  const fromDate = date || new Date();
  fromDate.setDate(fromDate.getDate() + days);
  return fromDate;
};
