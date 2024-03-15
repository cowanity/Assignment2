import React, { useState } from 'react';
import Login from './login.jsx';
import Register from './register.jsx';
import './form.css';

const Form = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const switchForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div>
            {currentForm === 'login' ? <Login switchForm={switchForm} /> : <Register switchForm={switchForm} />}
        </div>
    );
};

export default Form;
