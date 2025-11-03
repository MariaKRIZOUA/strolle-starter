export default function Page() {
  return (
    <main className="container page">
      <p className="kicker">ℹ️ Fonctionnement</p>
      <h1>Comment ça marche</h1>
      <p className="lead">Inscription légère, centres d’intérêt, disponibilité, puis rencontre.</p>

      <section className="cards">
        <div className="card"><h3>1. Centres d’intérêt</h3><p>Langues, arts, sport doux, entraide…</p></div>
        <div className="card"><h3>2. Disponibilités</h3><p>Choisissez vos créneaux, ponctuels ou réguliers.</p></div>
        <div className="card"><h3>3. Rencontre</h3><p>Un lieu calme, clair, adapté. Feedback simple après.</p></div>
      </section>
    </main>
  );
}
