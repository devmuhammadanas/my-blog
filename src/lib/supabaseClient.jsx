import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://bvfijizvgbjqqyiepsof.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZmlqaXp2Z2JqcXF5aWVwc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMDg5MzYsImV4cCI6MjA4NTY4NDkzNn0.YSQ3JKBhDIPp0ZxJcoIV7XxhmEobaeecPvz9A5MoL0M'

);
