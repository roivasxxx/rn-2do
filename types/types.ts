import { Database } from "./supabase"

export type LinkItem = Omit<Database["public"]["Tables"]["Links"]["Row"], "created_at"> & {
    created_at?: string
}

export type Tag = Database["public"]["Tables"]["Tags"]["Row"]
