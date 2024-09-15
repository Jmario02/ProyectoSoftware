import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate =useNavigate()

    const  handleNavigateClick = (event) => {
        event.preventDefault();
        navigate('/about');
    }

  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Hospital Pedro Antonio Villamizar. Todos los derechos reservados.</p>
      <p>Dirección: Carrera 6, Toledo, Norte de Santander Colombia</p>
      <p>Teléfono: +57 3XX XXX XXXX</p>
      <p href="/about" onClick={handleNavigateClick}>Sobre nosotros</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#3a3a3a',
    color: '#ffffff',
    textAlign: 'center',
  }
};

export default Footer;
