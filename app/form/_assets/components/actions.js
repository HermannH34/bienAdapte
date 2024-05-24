"use server"

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mzlpjgbtfjcjcfgazcrl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bHBqZ2J0ZmpjamNmZ2F6Y3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMDQ5OTEsImV4cCI6MjAyNTY4MDk5MX0.8-aNol9WwWjBivPB1L6atQ25D7xHidWFh_phsUKSuLE'
const supabase = createClient(supabaseUrl, supabaseKey)

const insertForm = async (formData) => {
 console.log('datasForDB: ', JSON.stringify(formData));


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