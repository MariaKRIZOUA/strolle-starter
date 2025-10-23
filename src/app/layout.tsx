// src/app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: "Strollé — L’amitié, le temps du bien",
  description: "On ne matche pas. On é.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Header */}
        <header className="header">
  <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
    {/* Logo cœur + nom */}
    <div style={{display:'flex', alignItems:'center', gap:12}}>
      {/* Cœur SVG */}
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="var(--green)" d="M12 21s-6.7-4.35-9.19-8.13C.48 10.05 1.31 6.9 3.84 5.55A4.6 4.6 0 0 1 9.5 6.71L12 9.13l2.5-2.42A4.6 4.6 0 0 1 20.16 5.55c2.53 1.35 3.36 4.5 1.03 7.32C18.72 16.65 12 21 12 21z"/>
      </svg>
      <strong style={{fontSize:22, fontWeight:600}}>Strollé</strong>
    </div>

    {/* Navigation */}
    <nav style={{display:'flex', gap:16, fontSize:14}}>
      <a href="/" style={{color:'var(--ink)', textDecoration:'none'}}>Accueil</a>
      <a href="/manifeste" style={{color:'var(--ink)', textDecoration:'none'}}>Manifeste</a>
      <a href="/fonctionnement" style={{color:'var(--ink)', textDecoration:'none'}}>Fonctionnement</a>
      <a href="/partenaires" style={{color:'var(--ink)', textDecoration:'none'}}>Partenaires</a>
      <a href="/inscription" className="btn">Rejoindre</a>
    </nav>
  </div>
</header>
          <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <span className="logo-heart" aria-hidden />
              <span style={{fontWeight:600}}>Strollé</span>
            </div>
            <small style={{color:'var(--sage)'}}>L’amitié, le temps du bien.</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
