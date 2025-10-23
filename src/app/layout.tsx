import "../styles/globals.css";

export const metadata = {
  title: "Strollé — L’amitié, le temps du bien",
  description: "On ne matche pas. On s’élève.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/heart-192.png" sizes="192x192" />
        <meta name="theme-color" content="#7ED398" />
      </head>
      <body>
        {/* HEADER */}
        <header className="header">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src="/icons/heart-192.png" alt="Strollé" width={32} height={32} />
              <strong style={{ fontSize: 22, fontWeight: 600 }}>Strollé</strong>
            </div>
            <nav>
              <a href="/" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Accueil</a>
              <a href="/manifeste" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Manifeste</a>
              <a href="/fonctionnement" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Fonctionnement</a>
              <a href="/partenaires" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Partenaires</a>
              <a href="/inscription" className="btn">Rejoindre</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="container">
          {children}
        </main>

        {/* FOOTER */}
        <footer>
          <p>© 2025 Strollé — L’amitié, le temps du bien</p>
        </footer>
      </body>
    </html>
  );
}
