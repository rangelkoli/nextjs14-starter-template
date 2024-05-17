import { supabaseClient } from "./supabaseClient";

export const supabaseGetSchedule = async({
    userID, token
}) =>{
    const supabase = await supabaseClient(token)
    let { data: schedule, error } = await supabase
    .from('daily_schedule')
    .select('*')
    .eq('user_id', userID)
    return schedule;
}

export const supabasePostSchedule = async({
    userID, token, schedule
}) =>{
    const supabase = await supabaseClient(token)
    let { data, error } = await supabase
    .from('daily_schedule')
    .insert([
        {user_id: userID, schedule: schedule}
    ])
    return data;
}
