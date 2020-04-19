

const url = 'https://covid19-server.chrismichael.now.sh/api/v1/AllReports';
const countryUrl = 'https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/';
const urlForChart = 'https://covid19.mathdro.id/api/daily';

export const fetchData = async () => {
    try {

        const data = await fetch(url).then(r => r.json());
        return data;

    } catch (error) {
        
    }

}

export const fetchDailyData = async () => {
    try {
        const data = await fetch(`${urlForChart}`).then(r => r.json());

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {
        
    }
}