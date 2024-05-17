import dayjs from "dayjs";

export default function todayDate(){

    const today = dayjs().toDate().toDateString();
    console.log(today);

    return today;
}

