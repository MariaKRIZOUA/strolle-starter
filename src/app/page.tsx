// src/app/page.tsx
export default function Home() {
  return (
    <main style={{padding:'56px 0'}}>
      <section className="container">
        <div className="card" style={{padding:'36px'}}>
          <span className="badge">💚 Marque bien-être & amitié choisie</span>
          <h1 style={{margin:'14px 0 6px',fontSize:36,fontWeight:300}}>
            L’amitié, le temps du bien.
          </h1>
          <p style={{margin:'0 0 18px',fontSize:18,color:'var(--sage)'}}>
            On ne matche pas. <strong>On é.</strong> Choisissez un moment, une passion, une personne qui vous comprend.
          </p> {/* dans footer, à côté du slogan */}
<div style={{display:'flex',gap:12}}>
  <a href="/mentions-legales" style={{color:'var(--sage)',textDecoration:'none'}}>Mentions légales</a>
  <a href="/confidentialite" style={{color:'var(--sage)',textDecoration:'none'}}>Confidentialité</a>
</div>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="/inscription" className="btn">Rejoindre la liste d’attente</a>
            <a href="/fonctionnement" style={{textDecoration:'none',color:'var(--ink)'}}>Voir le fonctionnement →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
