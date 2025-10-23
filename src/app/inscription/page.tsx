export default function Inscription() {
  return (
    <main style={{padding:'56px 0'}}>
      <section className="container">
        <div className="card">
          <h1 style={{marginTop:0}}>Pré-inscriptions Strollé</h1>
          <p style={{color:'var(--sage)'}}>Laissez votre email ; on vous prévient à l’ouverture.</p>
          <div style={{border:'1px solid var(--line)',borderRadius:16,overflow:'hidden',background:'#F9F7F2',padding:16}}>
            <p>Envoyez « Je m’inscris » à <a href="mailto:strolleofficiel@gmail.com">strolleofficiel@gmail.com</a></p>
            {/* Plus tard : remplace par un Google Form ou Typeform en <iframe> */}
          </div>
        </div>
      </section>
    </main>
  );
}
