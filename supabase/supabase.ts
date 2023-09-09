import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
import "react-native-url-polyfill/auto";
import { LinkItem } from "../types/types";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env";

const supabaseUrl = SUPABASE_URL || "";
const supabaseAnonKey = SUPABASE_ANON_KEY || "";

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

export const getLink = async (itemId: string) => {
    const { data, error } = await supabase.from("Links").select("*").eq("id", itemId).single();
    return error ? { id: "", title: "", link: "", tags: [], created_at: new Date().toISOString() } : data;
};

export const getTags = async () => {
    const { data, error } = await supabase.from("Tags").select("*");
    return error ? [] : data;
};

export const saveLink = async (link: LinkItem) => {
    const newLink = { ...link };
    if (!link.id) {
        delete newLink.id;
        const { error } = await supabase.from("Links").insert(newLink);
        return error;
    }
    const { error } = await supabase.from("Links").update(newLink).eq("id", link.id);
    return error;
};

export const getLinks = async () => {
    const { data, error } = await supabase.from("Links").select("*");
    return error ? [] : data;
};
