import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    alert("Message envoyé !");
  }

  return (
    <div className="page">
      <div className="content-box">
        <h2>Me contacter</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}