import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
import "react-native-url-polyfill/auto";
import { LinkItem } from "../types/types";

const supabaseUrl = "https://rpeqvutbwixsrbysjxkl.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZXF2dXRid2l4c3JieXNqeGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NTg5MTQsImV4cCI6MjAwODAzNDkxNH0.e3qytP9Nuk9aIGuYEoIqETihycnynUCG0o1UkNI3dP0";

const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
        return SecureStore.getItemAsync(key);
    },
    setItem: (key: string, value: string) => {
        SecureStore.setItemAsync(key, value);
    },
    removeItem: (key: string) => {
        SecureStore.deleteItemAsync(key);
    },
};

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: ExpoSecureStoreAdapter as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

console.log("supaabse:", supabase);

export const getLink = async (itemId: string) => {
    const { data, error } = await supabase.from("Links").select("*").eq("id", itemId).single();
    return error ? { id: "", title: "", link: "", tags: [] } : data;
};

export const getTags = async () => {
    const { data, error } = await supabase.from("Tags").select("*");
    console.log(data);
    return error ? [] : data;
};

export const saveLink = async (link: LinkItem) => {
    const { error } = await supabase.from("Links").insert({ ...link, created_at: new Date().toISOString() });
    return error;
};
