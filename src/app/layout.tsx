import "../styles/globals.css";

export const metadata = {
  title: "Strollé – L’amitié, le temps du bien.",
  description: "On ne matche pas. On s’élève.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* PWA / favicon */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/heart-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/heart-192.png" />
        <link rel="apple-touch-icon" href="/icons/heart-192.png" />
        <meta name="theme-color" content="#97D089" />
      </head>

      <body>
        {/* HEADER */}
        <header className="site-header" style={{ backgroundColor: "#97D089", padding: "12px 0" }}>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "12px",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            {/* Logo + nom */}
            <div className="logo-area" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="/icons/heart-32.png"
                alt="Strollé"
                width={28}
                height={28}
                style={{ display: "block", borderRadius: 6 }}
              />
              <strong style={{ fontSize: 22, fontWeight: 600, color: "#2E3835" }}>Strollé</strong>
            </div>

            {/* Navigation */}
            <nav>
              <a href="/" style={{ marginRight: 16, color: "#2E3835", textDecoration: "none" }}>Accueil</a>
              <a href="/manifeste" style={{ marginRight: 16, color: "#2E3835", textDecoration: "none" }}>Manifeste</a>
              <a href="/fonctionnement" style={{ marginRight: 16, color: "#2E3835", textDecoration: "none" }}>Fonctionnement</a>
              <a href="/partenaires" style={{ marginRight: 16, color: "#2E3835", textDecoration: "none" }}>Partenaires</a>
              <a href="/inscription" style={{ color: "#2E3835", textDecoration: "none", fontWeight: 600 }}>Rejoindre</a>
            </nav>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main>{children}</main>
      </body>
    </html>
  );
}
