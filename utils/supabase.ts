import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://njuinwqtpioczuhijntj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWlud3F0cGlvY3p1aGlqbnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjMwNjgsImV4cCI6MjAyOTEzOTA2OH0.mYx5lvuvY61bZspRprET4vg2XTMCsopVNxitR1xvyWE'
export const supabase = createClient(supabaseUrl, supabaseKey)