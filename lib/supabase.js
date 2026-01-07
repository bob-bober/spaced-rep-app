import {createClient} from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const mySecret = process.env.MY_BIG_SECRET;

console.log(mySecret)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);