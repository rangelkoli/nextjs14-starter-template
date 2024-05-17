import dayjs from "dayjs";

export default function todayDate(){

    const today = dayjs().toDate().toDateString();

    return today;
}

