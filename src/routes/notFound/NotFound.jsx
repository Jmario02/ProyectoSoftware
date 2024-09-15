import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.notFound}>
            <h1>404</h1>
            <p>La página que buscas no existe.</p>
        </div>
    );
};
const styles ={
    notFound: {
        textAlign: 'center',
        marginTop:  '50px',
        color: 'red'
    }   
} 


export default NotFound;