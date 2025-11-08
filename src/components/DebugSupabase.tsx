// src/components/DebugSupabase.tsx
'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function DebugSupabase() {
  useEffect(() => {
    (async () => {
      // petit SELECT sans données (compte uniquement) pour tester la connexion
      const { error } = await supabase
        .from('users')
        .select('id', { count: 'exact', head: true });

      if (error) {
        console.error('❌ Supabase KO →', error.message);
      } else {
        console.log('✅ Supabase OK → connexion opérationnelle');
      }
    })();
  }, []);

  return null;
}
