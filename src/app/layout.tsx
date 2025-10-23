import "../styles/globals.css";

export const metadata = {
  title: "Strollé – L’amitié, le temps du bien",
  description: "On ne matche pas. On s’élève.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/heart-192.png" sizes="192x192" />
        <meta name="theme-color" content="#7E0D98" />
      </head>
      <body>
        {/* HEADER */}
        <header className="header">
          <div
            className="logo-area"
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <img
              src="/icons/heart-192.png"
              alt="Strollé"
              width={28}
              height={28}
              style={{ display: "block", borderRadius: 6 }}
            />
            <strong style={{ fontSize: 22, fontWeight: 600 }}>Strollé</strong>
          </div>

          <nav>
            <a href="/" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Accueil</a>
            <a href="/manifeste" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Manifeste</a>
            <a href="/fonctionnement" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Fonctionnement</a>
            <a href="/partenaires" style={{ textDecoration: "none", color: "white", marginRight: 16 }}>Partenaires</a>
            <a href="/inscription" className="btn">Rejoindre</a>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="main-content">{children}</main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Strollé – L’amitié, le temps du bien.</p>
        </footer>
      </body>
    </html>
  );
}

        
