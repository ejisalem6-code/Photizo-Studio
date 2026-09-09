// Photizo Studio — Supabase connection config.
// The publishable/anon key below is SAFE to expose in frontend code — it's
// designed for exactly this. Real security comes from the Row Level
// Security (RLS) policies set up in the database, not from hiding this key.

const SUPABASE_URL = "https://zcacuoqsgvklitifuhly.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gyKN1eQUpoPlXAXnSYsE2A_haE-60lq";

// Loaded from the CDN script tag included on every page (see supabase-js
// script tag added right before this file).
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
