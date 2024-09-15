import React from 'react';
import SpecialistCard from './SpecialistCard';
import Footer from '../Footer';
import Navbar from '../Navbar';

function SpecialistList() {
  const specialists = [
    {
      name: 'Dr. Juan Pérez',
      specialty: 'Cardiología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 789',
      email: 'juan.perez@hospitalxyz.com',
    },
    {
      name: 'Dra. María García',
      specialty: 'Pediatría',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 780',
      email: 'maria.garcia@hospitalxyz.com',
    },
    {
      name: 'Dr. Luis Martínez',
      specialty: 'Neurología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 781',
      email: 'luis.martinez@hospitalxyz.com',
    },
    {
      name: 'Dra. Ana Torres',
      specialty: 'Dermatología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 782',
      email: 'ana.torres@hospitalxyz.com',
    },
    {
      name: 'Dr. Carlos Gómez',
      specialty: 'Gastroenterología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 783',
      email: 'carlos.gomez@hospitalxyz.com',
    },
    {
      name: 'Dra. Laura Martínez',
      specialty: 'Endocrinología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 784',
      email: 'laura.martinez@hospitalxyz.com',
    },
    {
      name: 'Dr. Andrés Ríos',
      specialty: 'Neumología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 785',
      email: 'andres.rios@hospitalxyz.com',
    },
    {
      name: 'Dra. Isabel Fernández',
      specialty: 'Reumatología',
      image: 'https://via.placeholder.com/150',
      phone: '+123 456 786',
      email: 'isabel.fernandez@hospitalxyz.com',
    },
  ];

  return (
    <div>
      <div style={styles.container}>
        {specialists.map((specialist, index) => (
          <SpecialistCard
            key={index}
            name={specialist.name}
            specialty={specialist.specialty}
            image={specialist.image}
            phone={specialist.phone}
            email={specialist.email}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default SpecialistList;
