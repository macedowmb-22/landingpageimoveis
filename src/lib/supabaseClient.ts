import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ienuhsvuneszcujxrvts.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbnVoc3Z1bmVzemN1anhydnRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4OTM5NDEsImV4cCI6MjA5NDQ2OTk0MX0.FpBqKlH0w44JzmgDn0h2KI638fiGKhhEw9o57GhbAdE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
