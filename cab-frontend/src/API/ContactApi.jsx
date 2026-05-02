import { createClient } from "@supabase/supabase-js";
const URL='https://duibhlaskyirtpugqdbd.supabase.co';
const KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1aWJobGFza3lpcnRwdWdxZGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzkyNDUsImV4cCI6MjA3MjMxNTI0NX0.IY0ias2UVF1vEBO-0V3mk7YPQJkxlGH7qT0TD_cwrDw'

const supabase = createClient(URL, KEY);
// https://duibhlaskyirtpugqdbd.supabase.co/swara_contact

export async function saveContact(data){
    console.log("contact data in api:",data);
    

  const { data: res, error } = await supabase
  .from('swara_contact')
  .insert([
    { name: data.name, phone:data.phone, email:data.email,message:data.message,purpose:data.option },
  ])
  .select();

if(error){
  console.error(error);
}

return res;   // 👈 ye line add karo
}