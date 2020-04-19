

const url = 'https://covid19-server.chrismichael.now.sh/api/v1/AllReports';
const countryUrl = 'https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/'

export const fetchData = async () => {
    try {

        const data = await fetch(url).then(r => r.json());
        return data;

    } catch (error) {
        
    }

}

export const fetchCountryData = async (country) => {
    try {

        const data = await fetch(`${countryUrl}${country}`).then(r => r.json());
        return data;

    } catch (error) {
        
    }
}