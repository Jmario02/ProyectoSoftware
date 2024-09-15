import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = (event) => {
        event.preventDefault();  // Evita la recarga de la página
        navigate('/');  // Navega a la página de inicio
    };

    const handleServicesClick = (event) => {
        event.preventDefault();
        navigate('/services');
    };

    const handleSpecialistsClick = (event) => {
        event.preventDefault();
        navigate('/specialist');
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        navigate('/contact');
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>Hospital Pedro Antonio Villamizar</div>
            <ul style={styles.navLinks}>
                <li><a href="/" onClick={handleHomeClick}>Home</a></li>
                <li><a href="/services" onClick={handleServicesClick}>Servicios</a></li>
                <li><a href="/specialist" onClick={handleSpecialistsClick}>Especialistas</a></li>
                <li><a href="/contact" onClick={handleContactClick}>Contacto</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: '#ffffff',
        fontSize: '18px'
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
    }
};

export default Navbar;
