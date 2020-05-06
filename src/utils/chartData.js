import { getShortDateFormat } from './date';

export const getChartData = (data) => {
    return {
        labels: data ? data.map(({ date }) => getShortDateFormat(date)) : [],
        datasets: [
          {
            data: data ? data.map(({ confirmed }) => confirmed) : [],
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: data ? data.map(({ deaths }) => deaths) : [],
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
    
            fill: true,
          },
          {
            data: data ? data.map(({ recovered }) => recovered) : [],
            label: "Recovered",
            borderColor: "green",
          },
        ],
      };
}