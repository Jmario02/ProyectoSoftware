import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h2>Contacto con el Hospital</h2>
      <p>Para consultas o más información, no dudes en ponerte en contacto con nosotros a través de los siguientes medios:</p>
      <div style={styles.info}>
        <h3>Información de Contacto</h3>
        <p><strong>Dirección:</strong> Calle Principal 456, Ciudad, País</p>
        <p><strong>Teléfonos:</strong></p>
        <ul>
          <li>+123 456 789</li>
          <li>+123 987 654</li>
        </ul>
        <p><strong>Email:</strong> contacto@hospitalxyz.com</p>
        <p><strong>Horario de Atención:</strong></p>
        <ul>
          <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
          <li>Sábados: 9:00 AM - 1:00 PM</li>
          <li>Domingos y Festivos: Cerrado</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  info: {
    marginTop: '20px',
  },
};

export default Contact;
