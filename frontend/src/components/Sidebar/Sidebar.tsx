import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { IoMegaphone } from 'react-icons/io5';
import { FaHome, FaBook, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { setSidebar } from '../../redux/store/themeReducer';
// StyledDrawer component styled with MUI styles
const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: '16rem',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: '16rem',
        background: 'linear-gradient(rgb(23,89,124) 25%, rgb(59,130,152) 100%)',
        color: theme.palette.background.white,
    },
}));
// Sidebar component
const Sidebar: React.FC = () => {
    const theme = useTheme();
    const sidebar = useSelector((state: any) => state.theme.sidebar);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // NavUrl component for rendering sidebar navigation links
    const NavUrl: React.FC<{ url: string; icon: JSX.Element; description: string }> = ({ url, icon, description }) => {
        const checkWindowSize = () => {
            if (window.innerWidth < 1024) dispatch(setSidebar(!sidebar));
        };

        return (
            <ListItem
                button
                component={NavLink}
                to={url}
                onClick={() => checkWindowSize()}
                sx={{
                    '&.active, &:hover': {
                        background: '#ffffff',
                        '& .MuiListItemText-primary': {
                            color: 'rgb(23,89,124)',
                        },
                        '& .MuiListItemIcon-root': {
                            color: 'rgb(23,89,124)',
                        },
                    },
                }}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={description} />
            </ListItem>
        );
    };
     // Render the Sidebar UI
    return (
        <StyledDrawer
            variant={isMobile ? 'temporary' : 'permanent'}
            anchor="left"
            open={!isMobile || sidebar}
            onClose={() => dispatch(setSidebar(false))}
            sx={{
                '& .MuiListItemIcon-root': {
                    color: 'inherit',
                },
            }}
        >
            <List>
                 {/* Sidebar header */}
                <Typography variant="h4" align="center" sx={{ my: 2 }}>
                    Coligo
                </Typography>
                {/* Sidebar navigation links */}
                <NavUrl url="/" icon={<FaHome />} description="Dashboard" />
                <NavUrl url="/schedule" icon={<GoCalendar />} description="Schedule" />
                <NavUrl url="/courses" icon={<FaBook />} description="Courses" />
                <NavUrl url="/gradebook" icon={<FaGraduationCap />} description="Gradebook" />
                <NavUrl url="/performance" icon={<FaChartLine />} description="Performance" />
                <NavUrl url="/announcements" icon={<IoMegaphone />} description="Announcements" />
            </List>
        </StyledDrawer>
    );
};

export default Sidebar;
