import "../styles/globals.css";


export const metadata = {
  title: "Strollé — L’amitié, le temps du bien.",
  description: "On ne matche pas. On s'élève.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/heart-32.png" />
<link rel="icon" href="/icons/heart-192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="/icons/heart-192.png" />
<meta name="theme-color" content="#2E3835" />
      </head>

      <body>
        {/* HEADER */}
        <header className="site-header">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "12px",
            }}
          >
            {/* Logo + nom */}
            <div className="logo-area">
              <img
                src="/icons/heart-32.png"
                alt="Strollé"
                width={28}
                height={28}
                style={{ display: "block", borderRadius: 6 }}
              />
              <strong className="logo-title">Strollé</strong>
            </div>

            {/* NAV */}
            <nav style={{ fontSize: "14px", fontWeight: 500 }}>
              <a href="/">Accueil</a>
              <a href="/manifeste">Manifeste</a>
              <a href="/fonctionnement">Fonctionnement</a>
              <a href="/partenaires">Partenaires</a>
              <a href="/inscription" className="btn" style={{ marginLeft: 16 }}>
                Rejoindre
              </a>
            </nav>
          </div>
        </header>

        {/* CONTENU DE LA PAGE */}
        <main className="container" style={{ paddingTop: "24px" }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          © 2025 Strollé — L’amitié, le temps du bien.
        </footer>
      </body>
    </html>
  );
}
