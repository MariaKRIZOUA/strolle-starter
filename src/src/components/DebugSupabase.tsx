'use client';
import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function DebugSupabase() {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(url, key);

    supabase
      .from('users')
      .select('*', { head: true, count: 'exact' })
      .then(({ error }) => {
        if (error) {
          console.error('❌ Supabase KO →', error.message);
        } else {
          console.log('✅ Supabase OK → connexion opérationnelle');
        }
      });
  }, []);

  return null;
}

