
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eyrurcurfndbywzbwcev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cnVyY3VyZm5kYnl3emJ3Y2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NjU4MTEsImV4cCI6MjA5NzQ0MTgxMX0.22qKNE_VEaMbmXRzGS6UH0HBGZxS6d8T9IgoAEhUiWo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;