"use server"

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const insertForm = async (formData) => {


 try {

  const { data, error } = await supabase
   .from('forms')
   .insert({
    "data": JSON.stringify(formData),
   });

  if (error) {
   console.error('Error inserting form data:', error.message);
   return null;
  }

  console.log('Form data inserted successfully:', data);
  return data;
 } catch (error) {
  console.error('Unexpected error:', error.message);
  return null;
 }

}
export default insertForm;