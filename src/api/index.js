const url = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
const urlForTotal = "https://api.covid19api.com/summary";
const urlDaily = "https://api.covid19api.com/country/";
const urlNews =
  "https://newsapi.org/v2/top-headlines?country=&category=health&apiKey=07d9897b1d0d4094b3b1093134525cab";
const urlMapData = "https://covid19-data.p.rapidapi.com/geojson-ww";
const hostHeader = "covid19-data.p.rapidapi.com";
const keyHeader = "781bcee0c5msh078c84f3a257bd2p1e7140jsn1348ca49402f";

export const fetchData = async () => {
  try {
    const data = await fetch(urlForTotal).then((r) => r.json());
    return data.Countries;
  } catch (err) {
    console.error(err);
    return [];
  }
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
    console.error(err);
    return [];
  }
};

export const fetchCountryData = async (country, abortSignal) => {
  try {
    const data = await fetch(url, abortSignal).then((r) => r.json());

    const modifiedData = data.reports[0].table[0].filter(
      (item) => item.Country === country
    );
    return modifiedData[0];
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error(err);
    }
    return [];
  }
};

export const fetchCountriesList = async () => {
  try {
    const data = await fetch(url).then((r) => r.json());

    const modifiedData = data.reports[0].table[0].map((item) => ({
      Country: item.Country,
      Continent: item.Continent,
    }));
    return modifiedData;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error(err);
    }

    return [];
  }
};

export const fetchMapData = async () => {
  try {
    const data = await fetch(urlMapData, {
      method: "GET",
      headers: {
        "x-rapidapi-host": hostHeader,
        "x-rapidapi-key": keyHeader,
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
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchNews = async (code) => {
  try {
    const data = await fetch(
      urlNews.replace("country=", `country=${code}`)
    ).then((response) => response.json());
    return data.articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchCountries = async () => {
  try {
    const data = await fetch(urlForTotal).then((r) => r.json());
    return data.Countries.map((item) => ({
      country: item.Country,
      code: item.CountryCode.toLowerCase(),
      TotalConfirmed: item.TotalConfirmed,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
