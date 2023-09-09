import { Database } from "./supabase";

export type LinkItem = Omit<Database["public"]["Tables"]["Links"]["Row"], "id"> & {
    id?: string;
};

export type Tag = Database["public"]["Tables"]["Tags"]["Row"];
