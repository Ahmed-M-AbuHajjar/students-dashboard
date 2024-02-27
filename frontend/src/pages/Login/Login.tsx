import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box, Typography } from '@mui/material';
import { logIn } from '../../redux/store/authActions';
// Define the Login component
const Login: React.FC = () => {
    const dispatch = useDispatch();
    // Render the Login UI
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgb(23, 89, 124)',
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: 'rgb(23, 89, 124)',
                    }}
                >
                    Hello, Login to Coligo Dashboard
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => dispatch(logIn())}
                    sx={{
                        color: 'rgb(23, 89, 124)',
                        borderColor: 'rgb(59,130,152)',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        margin: '0.5rem 0',
                        transition: 'background-color 300ms ease-in-out',
                        '&:hover': {
                            backgroundColor: '#475569',
                            color: '#fff',
                        },
                    }}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
