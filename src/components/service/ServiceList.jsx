import React from 'react';
import ServiceCard from './ServiceCard'; // Ajusta la ruta según sea necesario

function ServiceList() {
  const services = [
    {
      name: 'Consulta General',
      description: 'Examen completo para la evaluación general de la salud.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Cirugía Especializada',
      description: 'Procedimientos quirúrgicos realizados por especialistas.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Pruebas de Diagnóstico',
      description: 'Pruebas y análisis para diagnóstico de enfermedades.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Laboratorio Clínico',
      description: 'Servicios médicos urgentes para emergencias.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Odontologia',
      description: 'Servicios médicos urgentes para emergencias.',
      image: 'https://via.placeholder.com/150',
    },
    // Agrega más servicios aquí
  ];

  return (
    <div>
      <div style={styles.container}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
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

export default ServiceList;
