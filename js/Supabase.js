import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://czozsdlmbfhhezhtmmgb.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_n5IkOrxazOx5J1opL_WKoA_JxoJjD07";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("PYTHONISM: Supabase client initialized!");