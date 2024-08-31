import dayjs, { Dayjs } from 'dayjs';


export const formatDate = (date: Dayjs | null) => {
    return dayjs(date).format('YYYY-MM-DD');
}

export const formatTime = (time: Dayjs | null) => {
    return dayjs(time).format('HH:mm:ss');
}