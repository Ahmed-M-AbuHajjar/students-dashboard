import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, IconButton, Avatar, Menu, MenuItem, TextField, useMediaQuery } from '@mui/material';
import { MdMenu, MdNotifications, MdEmail, MdSearch } from 'react-icons/md';
import { setSidebar } from '../../redux/store/themeReducer';
import { logOut } from '../../redux/store/authActions';
import { useNavigate } from 'react-router-dom';
// Navbar component
const Navbar: React.FC = () => {
    const loggedIn: boolean = useSelector((state: any) => state.auth.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const sidebar = useSelector((state: any) => state.theme.sidebar);
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
    // Redirect to login page if not logged in
    useEffect(() => {
        if (!loggedIn) {
            navigate('/');
        }
    }, [loggedIn, navigate]);
    // Handle logout action
    const handleLogout = () => {
        dispatch(logOut());
        navigate('/');
    };
    // Handle opening menu
    const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    // Handle closing menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    // Render the Navbar UI
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--padding-sm)',
                borderBottom: '1px solid rgb(211, 211, 211)',
                position: 'sticky',
                top: 0,
                bgcolor: 'white',
                zIndex: 10,
            }}
        >
            {/* Burger menu for mobile */}
            {isMobile && (
                <IconButton
                    onClick={() => dispatch(setSidebar(!sidebar))}
                >
                    <MdMenu />
                </IconButton>
            )}

            {/* Welcome Text */}
            <Typography id='welcome-message' variant="h5" sx={{ flexGrow: 1, color: '#7f7f7f', fontSize: '2rem', fontWeight: 'bold', marginLeft: '2rem', '@media screen and (max-width: 500px)': { fontSize: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' } }}>
                Welcome Talia,
            </Typography>
            {/* Search Box */}
            <TextField
                id="search"
                placeholder="Search..."
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: (
                        <MdSearch style={{ marginRight: '0.5rem', color: 'rgba(0, 0, 0, 0.54)' }} />
                    ),
                }}
                sx={{ mr: '1rem', bgcolor: 'white', '& .MuiOutlinedInput-root': { borderRadius: '20px', '& fieldset': { borderColor: 'rgb(211, 211, 211)' }, '&:hover fieldset': { borderColor: 'rgb(23, 89, 124)' }, '&.Mui-focused fieldset': { borderColor: 'rgb(23, 89, 124)' } } }}
            />
            {/* Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconButton sx={{ color: 'rgb(23, 89, 124)', '&:hover': { bgcolor: 'rgb(202, 202, 202)' } }}>
                    <MdNotifications />
                </IconButton>
                <IconButton sx={{ color: 'rgb(23, 89, 124)', '&:hover': { bgcolor: 'rgb(202, 202, 202)' } }}>
                    <MdEmail />
                </IconButton>
            </Box>

            {/* Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginLeft: 'var(--margin-sm)' }}>
                <Avatar src="https://i.pravatar.cc/300" alt="" onClick={handleMenuOpen} sx={{ cursor: 'pointer' }} />
                {/* Dropdown menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>Logout</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default Navbar;
