import {Months} from "./consts";

export function parseDates(text: string)  {

    let dateRegex = /\b(\d{1,2}\/\d{1,2}\/\d{4})\b/g;
    let datesArray = text.match(dateRegex);
    console.log(datesArray)
    if (!datesArray) {
        return [];
    }

    return datesArray;
}

export function formatDate(date: Date) {
    return `${Months[date.getMonth()]} ${date.getDay() - 1}, ${date.getFullYear()}`;
}
