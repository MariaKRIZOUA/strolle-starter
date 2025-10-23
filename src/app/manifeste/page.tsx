// src/app/manifeste/page.tsx
export const metadata = {
  title: "Manifeste & Éthique — Strollé",
  description: "Notre vision : l’amitié choisie, le temps du bien.",
};

export default function Manifeste() {
  return (
    <main style={{padding:'56px 0'}}>
      <section className="container">
        {/* Hero */}
        <div className="card" style={{padding:'32px'}}>
          <span className="badge">💚 Marque bien-être & amitié choisie</span>
          <h1 style={{margin:'12px 0 8px',fontSize:32,fontWeight:300}}>
            Manifeste & Éthique
          </h1>
          <p style={{color:'var(--sage)',fontSize:18,margin:0}}>
            Nous croyons que la solitude peut être un lieu de paix intérieure.
            Et que la rencontre, quand elle est libre et consciente, devient une force — un véritable art de vivre.
          </p>
        </div>

        {/* 3 colonnes : mission / promesse / vision */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:16}}>
          <article className="card">
            <h2 style={{marginTop:0,fontSize:20}}>Notre mission</h2>
            <p style={{color:'var(--sage)'}}>
              Permettre à chacun de choisir son temps, son lien et sa compagnie ;
              partager un moment sans jugement ; découvrir, apprendre ou simplement respirer à deux.
            </p>
          </article>
          <article className="card">
            <h2 style={{marginTop:0,fontSize:20}}>Notre promesse</h2>
            <p style={{color:'var(--sage)'}}>
              Apprendre une langue en conversant, peindre, chanter, jouer aux échecs, marcher, prendre un café…
              Chaque interaction a un sens, et chaque minute partagée a une valeur (0 à 10 € selon le choix de chacun).
            </p>
          </article>
          <article className="card">
            <h2 style={{marginTop:0,fontSize:20}}>Notre vision</h2>
            <p style={{color:'var(--sage)'}}>
              Dans 30, 40, 50 ans, Strollé comme une <em>infrastructure sociale</em> essentielle :
              une écologie du lien où l’amitié devient un acte conscient et le temps partagé, un bien précieux.
            </p>
          </article>
        </div>

        {/* Utilité publique & usages */}
        <div className="card" style={{marginTop:16}}>
          <h2 style={{marginTop:0,fontSize:22,fontWeight:400}}>Utilité publique & usages</h2>
          <p style={{color:'var(--sage)'}}>
            Strollé propose un mode de vie qui soutient la santé mentale et la paix sociale.
            L’amitié y est <strong>libre, ponctuelle ou régulière</strong>, fondée sur les passions communes et la bienveillance.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12,marginTop:12}}>
            <div className="card" style={{padding:'18px'}}>
              <h3 style={{marginTop:0,fontSize:16}}>Langues vivantes</h3>
              <p style={{color:'var(--sage)'}}>Pratiquer le portugais, le chinois, l’espagnol… sans cours formel : juste la vie, à deux.</p>
            </div>
            <div className="card" style={{padding:'18px'}}>
              <h3 style={{marginTop:0,fontSize:16}}>Savoirs & passions</h3>
              <p style={{color:'var(--sage)'}}>Peinture, chant, échecs, escalade, photo : la transmission par l’expérience, sans pression.</p>
            </div>
            <div className="card" style={{padding:'18px'}}>
              <h3 style={{marginTop:0,fontSize:16}}>Entraide pratique</h3>
              <p style={{color:'var(--sage)'}}>Bricolage, petits déménagements, organisation : la solidarité comme évidence.</p>
            </div>
          </div>
        </div>

        {/* Éthique digitale */}
        <div className="card" style={{marginTop:16}}>
          <h2 style={{marginTop:0,fontSize:22,fontWeight:400}}>Éthique digitale</h2>
          <ul style={{color:'var(--sage)',lineHeight:1.75,marginTop:8}}>
            <li>Nous choisissons le temps long, la qualité et le sens.</li>
            <li><strong>Pas de TikTok ni X</strong> : ces plateformes d’instantanéité ne correspondent pas à notre philosophie.</li>
            <li>Présence raisonnée sur <strong>Instagram, YouTube et LinkedIn</strong>.</li>
            <li>Respect & sécurité : chaque sortie est minutée et clôturée par un check bien-être.</li>
            <li>Tarif des moments partagés : <strong>0 à 10 €</strong>, selon le choix de chacun.</li>
          </ul>
          <div style={{marginTop:12}}>
            <span className="badge">Strollé ne suit pas le flux — il crée son rythme.</span>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{marginTop:16,display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div>
            <h3 style={{margin:'0 0 6px'}}>Envie de rejoindre l’écosystème Strollé ?</h3>
            <p style={{margin:0,color:'var(--sage)'}}>Liste d’attente ouverte — Paris d’abord.</p>
          </div>
          <a href="/inscription" className="btn">Rejoindre la liste d’attente</a>
        </div>
      </section>
    </main>
  );
}
