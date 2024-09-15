import React from 'react';

function Banner() {
  return (
    <div style={styles.banner}>
      <h1>Bienvenido al Hospital Pedro Antonio Villamizar</h1>
      <p>Comprometidos con tu salud y bienestar.</p>
    </div>
  );
}

const styles = {
  banner: {
    height: '300px',
    backgroundImage: 'url(https://via.placeholder.com/1500)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
};

export default Banner;
