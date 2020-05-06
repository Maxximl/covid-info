export const getTopConfirmedCountries = (data, quantity) => {
  return data
    .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
    .slice(0, quantity);
};
