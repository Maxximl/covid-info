const url = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
// const countryUrl =
//   "https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/";
const urlForChart = "https://covid19.mathdro.id/api/daily";
const urlForTotal = "https://api.covid19api.com/summary";
//const urlForCountries = "https://api.covid19api.com/countries";
const urlDaily = "https://api.covid19api.com/country/";

export const fetchData = async () => {
  try {
    const data = await fetch(url).then((r) => r.json());
    return data.reports[0];
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const data = await fetch(`${urlForChart}`).then((r) => r.json());

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchDaily = async (country) => {
  try {
    const data = await fetch(`${urlDaily}${country}`).then((r) => r.json());
    const modifiedData = data.map((item) => ({
      country: item.Country,
      confirmed: item.Confirmed,
      deaths: item.Deaths,
      recovered: item.Recovered,
      active: item.Active,
      date: item.Date,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTotal = async () => {
  try {
    const data = await fetch(`${urlForTotal}`).then((r) => r.json());
    console.log(data);
    const modifiedData = {
      confirmed: data.Global.TotalConfirmed,
      deaths: data.Global.TotalDeaths,
      recovered: data.Global.TotalRecovered,
      newConfirmed: data.Global.NewConfirmed,
      newDeaths: data.Global.NewDeaths,
      newRecovered: data.Global.NewRecovered,
      date: data.Date,
    };
    return modifiedData;
  } catch (error) {}
};

export const fetchCountryData = async (country) => {
  try {
    const data = await fetch(url).then((r) => r.json());

    const modifiedData = data.reports[0].table[0].filter(
      (item) => item.Country === country
    );
    return modifiedData[0];
  } catch (error) {}
};

export const fetchCountriesList = async () => {
  try {
    const data = await fetch(url).then((r) => r.json());

    const modifiedData = data.reports[0].table[0].map((item) => ({
      Country: item.Country,
      Continent: item.Continent,
    }));
    return modifiedData;
  } catch (error) {}
};

export const getMapData = async () => {
  try {
    const data = await fetch("https://covid19-data.p.rapidapi.com/geojson-ww", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "781bcee0c5msh078c84f3a257bd2p1e7140jsn1348ca49402f",
      },
    }).then((response) => response.json());
    const modified = data.features
      .map((item) => item.properties)
      .filter((item) => item.longitude !== "")
      .map((item) => ({
        ...item,
        longitude: Number.parseFloat(item.longitude),
        latitude: Number.parseFloat(item.latitude),
      }));
    return modified;
  } catch (error) {
    console.log(error);
  }
};
