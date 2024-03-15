import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Link, Grid, Paper } from '@mui/material';
import './form.css';
import axios from 'axios';


const Register = ({ switchForm }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [email, setEmail] = useState('');

    // delay switchform to 5s
    useEffect(() => {
        if (registrationSuccess) {
            const timer = setTimeout(() => {
                switchForm('login');
            }, 5000);
            return () => clearTimeout(timer); // clear when unsuccessfully register
        }
    }, [registrationSuccess, switchForm]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/register', {
                username: username,
                email: email,
                password: password
            })
            console.log(response.data);
            setRegistrationSuccess(true);
            if (response.status === 200) {
                switchForm('login'); // navigate to login after successfully registering
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#222', color: '#fff' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Register
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' } // Specify background and text color
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' } // Specify background and text color
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' } // Specify background and text color
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    {registrationSuccess && (
                   <Typography variant="body2" align="center" mt={2}>
                            Registration successful. You can now log in.
                        </Typography>
                    )}
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Register
                    </Button>
                    <Typography variant="body2" align="center" mt={2}>
                        Already have an account?
                        <Link onClick={() => switchForm('login')}> Login here</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Register;
