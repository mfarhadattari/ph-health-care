import dayjs, { Dayjs } from 'dayjs';


export const formatDate = (date: Dayjs | null) => {
    return dayjs(date).format('YYYY-MM-DD');
}

export const formatTime = (time: Dayjs | null) => {
    return dayjs(time).format('HH:mm:ss');
}

export const getDateTime = (date_time: string): { date: string, time: string } => {
    const newDateTime = dayjs(date_time);
    return {
        date: newDateTime.format('YYYY-MM-DD'),
        time: newDateTime.format('HH:mm:ss')
    }
}