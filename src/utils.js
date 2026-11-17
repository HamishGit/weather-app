import { formatDate } from 'date-fns';

function getFormattedDate(dateStr) {
    const separatedDate = dateStr.split('-');
    const year = separatedDate[0];
    const month = Number(separatedDate[1]) - 1;
    const day = separatedDate[2];

    return formatDate(new Date(year, month, day), 'PPPP');
}

export { getFormattedDate };
