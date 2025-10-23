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
          <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <span className="logo-heart" aria-hidden />
              <strong style={{fontSize:22,fontWeight:500}}>Strollé</strong>
            </div>
            <nav style={{display:'flex',gap:16,fontSize:14}}>
              <a href="/" style={{color:'var(--ink)',textDecoration:'none'}}>Accueil</a>
              <a href="/manifeste" style={{color:'var(--ink)',textDecoration:'none'}}>Manifeste</a>
              <a href="/fonctionnement" style={{color:'var(--ink)',textDecoration:'none'}}>Fonctionnement</a>
              <a href="/partenaires" style={{color:'var(--ink)',textDecoration:'none'}}>Partenaires</a>
              <a href="/inscription" className="btn">Rejoindre</a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="footer">
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
