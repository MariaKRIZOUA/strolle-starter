export default function Page() {
  return (
    <main className="container page">
      <p className="kicker">💚 Marque bien-être & amitié choisie</p>
      <h1>L’amitié, le temps du bien.</h1>
      <p className="lead">
        On ne matche pas. On s’élève. Choisissez un moment, une passion, une personne qui vous comprend.
      </p>

      <div className="link-row">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/confidentialite">Confidentialité</a>
        <a href="/fonctionnement">Voir le fonctionnement →</a>
      </div>

      <section className="cards">
        <div className="card"><h3>Rencontres apaisées</h3><p>Des interactions simples, sans pression.</p></div>
        <div className="card"><h3>Temps choisi</h3><p>À la carte : ponctuel ou régulier.</p></div>
        <div className="card"><h3>Ville par ville</h3><p>On commence en France, progressivement.</p></div>
      </section>
    </main>
  );
}
