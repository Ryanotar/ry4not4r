import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    indirizzo: '',
    telefono: '',
    email: '',
    messaggio: '',
  });

  const [focusField, setFocusField] = useState(null);
  const [btnHover, setBtnHover] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nvrrdul',
      'template_8gix9cc',
      e.target,
      'AVI1mAOXKF8zuyw0A'
    )
    .then(() => {
      alert('Messaggio inviato con successo!');
      navigate('/');
    }, () => {
      alert("Errore nell'invio, riprova.");
    });

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          className={`contact-input ${focusField === 'nome' || formData.nome ? 'input-focus' : ''}`}
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          onFocus={() => setFocusField('nome')}
          onInput={() => setFocusField('nome')}
          onBlur={() => setFocusField(null)}
          required
          autoComplete="off"
        />
        <input
          className={`contact-input ${focusField === 'azienda' || formData.azienda ? 'input-focus' : ''}`}
          type="text"
          name="azienda"
          placeholder="Azienda"
          value={formData.azienda}
          onChange={handleChange}
          onFocus={() => setFocusField('azienda')}
          onInput={() => setFocusField('azienda')}
          onBlur={() => setFocusField(null)}
          autoComplete="off"
        />
        <input
          className={`contact-input ${focusField === 'indirizzo' || formData.indirizzo ? 'input-focus' : ''}`}
          type="text"
          name="indirizzo"
          placeholder="Indirizzo"
          value={formData.indirizzo}
          onChange={handleChange}
          onFocus={() => setFocusField('indirizzo')}
          onInput={() => setFocusField('indirizzo')}
          onBlur={() => setFocusField(null)}
          autoComplete="off"
        />
        <input
          className={`contact-input ${focusField === 'telefono' || formData.telefono ? 'input-focus' : ''}`}
          type="tel"
          name="telefono"
          placeholder="Numero telefonico"
          value={formData.telefono}
          onChange={handleChange}
          onFocus={() => setFocusField('telefono')}
          onInput={() => setFocusField('telefono')}
          onBlur={() => setFocusField(null)}
          autoComplete="off"
        />
        <input
          className={`contact-input ${focusField === 'email' || formData.email ? 'input-focus' : ''}`}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusField('email')}
          onInput={() => setFocusField('email')}
          onBlur={() => setFocusField(null)}
          required
          autoComplete="off"
        />
        <textarea
          className={`contact-textarea ${focusField === 'messaggio' || formData.messaggio ? 'input-focus' : ''}`}
          name="messaggio"
          placeholder="Messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          onFocus={() => setFocusField('messaggio')}
          onInput={() => setFocusField('messaggio')}
          onBlur={() => setFocusField(null)}
          required
        />
        <button
          type="submit"
          className={`contact-button ${btnHover ? 'button-hover' : ''}`}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Invia
        </button>

        <button
          type="button"
          className="contact-back-button"
          onClick={() => navigate('/')}
        >
          Torna alla home
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
