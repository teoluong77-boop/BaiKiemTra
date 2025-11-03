import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hsfnvehwacitwpdteffs.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZm52ZWh3YWNpdHdwZHRlZmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNTA4NjcsImV4cCI6MjA3NzcyNjg2N30.cCsLWl9pWIavcvOH8LOGczUoloKduFGPituOrri_kMM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);