import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://iftabcaiiwbjykjgffnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdGFiY2FpaXdianlramdmZm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2NDIwMDUsImV4cCI6MTk3NjIxODAwNX0.gkcMApVBIh477Q5g47CdzkZXJ2lvlftsEUkTMAN4FsI'
export const supabase = createClient(supabaseUrl, supabaseKey)


interface esp32 {
    username: string,
    inserted_at: Date,
    updated_at: Date,
    data: any
}


export default class Esp32 {
    async handleSendingData(username: string, morseCode: string) {
        console.log(morseCode)
        try{
            const {data, error} = await supabase
                .from('esp32')
                .upsert([{"username":username,'data': {"morseCode": morseCode}}])
            if(error) throw error;
        }catch (e) {
            console.log(e)
        }
    }
}


