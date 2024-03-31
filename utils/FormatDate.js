export const formatDate = (date) => {
  const dateContractor = new Date(date);
  let day = dateContractor.getDate();
  let month = dateContractor.getMonth();
  let year = dateContractor.getFullYear();
  return `${year}-${month}-${day}`;
};
