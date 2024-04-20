import { createClient } from '@supabase/supabase-js'

export function SupabaseClient() {
    const config = useRuntimeConfig()

    const supabaseUrl = config.public.supabase.url
    const supabaseKey = config.public.supabase.key
    return createClient(supabaseUrl, supabaseKey)
}
