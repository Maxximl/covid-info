export const getShortDateFormat = (date) => {
    return date.split('T')[0].split('-').reverse().join('.');
}