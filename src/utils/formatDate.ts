export const getDateFormat = (date: string, onlyYear = false) => {
  if (!date) return '';
  const dateFormat = new Date(date);

  const year = dateFormat.getFullYear();

  if (onlyYear) {
    return year.toString()
  }

  const monthName = dateFormat.toLocaleDateString("default", {
    month: "short",
  });


  return `${monthName} ${year}`;
};