export const convertCountryName = (country) => {
  switch (country) {
    case "UK":
      return "United Kingdom";
    case "USA":
      return "United States";
    case "United States of America":
      return "United States";
    case "Russian Federation":
      return "Russia";
    default:
      return country;
  }
};
