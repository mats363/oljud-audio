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
          audio_preview: string | null
          category: string | null
          created_at: string | null
          download_link: string | null
          id: number
          price: number | null
          product: string | null
          product_image: string | null
        }
        Insert: {
          audio_preview?: string | null
          category?: string | null
          created_at?: string | null
          download_link?: string | null
          id?: number
          price?: number | null
          product?: string | null
          product_image?: string | null
        }
        Update: {
          audio_preview?: string | null
          category?: string | null
          created_at?: string | null
          download_link?: string | null
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
