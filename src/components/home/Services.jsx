import React from 'react';

function Services() {
  return (
    <div style={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div style={styles.serviceList}>
        <div style={styles.serviceItem}>
          <h3>Consulta General</h3>
          <p>Atención médica de calidad para todas las edades.</p>
        </div>
        <div style={styles.serviceItem}>
          <h3>Urgencias</h3>
          <p>Disponibles 24/7 para cualquier emergencia.</p>
        </div>
        <div style={styles.serviceItem}>
          <h3>Especialidades</h3>
          <p>Contamos con los mejores especialistas en diversas áreas.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  services: {
    padding: '40px 20px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  serviceList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  serviceItem: {
    width: '30%',
    minWidth: '200px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  }
};

export default Services;
