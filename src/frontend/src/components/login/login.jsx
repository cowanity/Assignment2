import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './form.css';
import axios from 'axios';
import useSignIn from 'react-auth-kit/hooks/useSignIn'; //  useSignIn

const Login = ({ switchForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn(); // Initialize useSignIn


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/login', {
                email: email,
                password: password
            });

        signIn({ // Sign in
           auth:{
                token: response.data.token,
                type: 'Bearer'
           },
           userState:{
            authState:{email : email}
           }

            });

            console.log(response.data);
            if (response.status === 200) {
                navigate('/assets');
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
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            className: "white-text-center",
                            style: { backgroundColor: '#999', color: '#fff' }
                        }}
                        InputLabelProps={{ style: { color: 'white'} }}
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
                            style: { backgroundColor: '#999', color: '#fff' }
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                     
                     <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                      Login
                     </Button>
                    
                    <Typography variant="body2" align="center" mt={2}>
                        Don't have an account?
                        <Link onClick={() => switchForm('register')}> Register here</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
