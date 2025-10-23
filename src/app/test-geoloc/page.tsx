'use client';
import { useState } from 'react';

export default function Page() {
  const [coords, setCoords] = useState<string>('—');

  const getLoc = () => {
    if (!navigator.geolocation) {
      setCoords('Géolocalisation non supportée');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords(`${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`),
      (err) => setCoords(`Erreur: ${err.message}`),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <main style={{maxWidth:560, margin:'40px auto', padding:'24px', background:'#fff', border:'1px solid #E7DCC4', borderRadius:16}}>
      <h1>Test géolocalisation</h1>
      <p>Coordonnées : {coords}</p>
      <button className="btn" onClick={getLoc}>Obtenir ma position</button>
    </main>
  );
}
