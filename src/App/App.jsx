import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes/Routes';


const App = () => {
    return (
        <Router>
            <div className="app-container">
                <AppRoutes />
            </div>
        </Router>
    );
};

export default App;