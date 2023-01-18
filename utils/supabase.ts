import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase';

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SupabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!SupabaseUrl || !SupabaseKey) {
    throw new Error('Missing API keys for Supabase')
  }

export const Supabase = createClient<Database>(
    SupabaseUrl, SupabaseKey
)

// // write a function to get all products
// export const getProducts = async () => {
//     const { data, error } = await Supabase.from('products').select('*')
//     if (error) {
//         console.log(error)
//         return []
//     }
//     return data
// }