export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Contact - ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:TON_ADRESSE_MAIL_ICI?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page">
      <div className="content-box">
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>Axel Arnold</h2>
        <p>
        Étudiant en première année de Bachelor à Epitech, passionné par l’informatique, le développement web et la création de projets en équipe ou individuels.
        </p>

        <h2>Me contacter</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" required />
          </div>

          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
