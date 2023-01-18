export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          created_at: string | null
          id: number
          price: number | null
          product: string | null
          product_image: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          price?: number | null
          product?: string | null
          product_image?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          price?: number | null
          product?: string | null
          product_image?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
