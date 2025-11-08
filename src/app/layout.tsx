import "../styles/globals.css";
import DebugSupabase from "../components/DebugSupabase";

export const metadata = {
  title: "Strollé – L’amitié, le temps du bien.",
  description: "On ne matche pas. On s’élève.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* PWA / favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/heart-32.png" />
<link rel="icon" href="/icons/heart-192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="/icons/heart-192.png" />
<meta name="theme-color" content="#2E3835" />
      </head>

      <body>
        {/* HEADER */}
        <header className="site-header">
          <div className="container header-inner">
            {/* Logo texte simple (on enlève l’image pour le moment) */}
            <div className="logo-area">
              <strong className="logo-title">Strollé</strong>
            </div>

            {/* Navigation */}
            <nav className="main-nav">
              <a href="/">Accueil</a>
              <a href="/manifeste">Manifeste</a>
              <a href="/fonctionnement">Fonctionnement</a>
              <a href="/partenaires">Partenaires</a>
              <a href="/inscription" className="btn">Rejoindre</a>
            </nav>
          </div>
        </header>

        {/* CONTENU */}
        <main className="container page">{children}</main>

        {/* FOOTER (sobre) */}
        <footer className="site-footer">
          <div className="container">
            <small>© 2025 Strollé — L’amitié, le temps du bien.</small>
          </div>
        </footer>
        import DebugSupabase from '@/components/DebugSupabase';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>…</head>
      <body>
        {/* …ton header + contenu… */}
        {children}

        {/* Debug Supabase */}
        <DebugSupabase />
      </body>
    </html>
  );
}
        <DebugSupabase />
      </body>
    </html>
  );
}
