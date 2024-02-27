import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
// Define props for the Container component
interface ContainerProps {
  // Sticky navigation component
  stickyNav: ReactNode;
  // Main content component
  content: ReactNode;
}
// Container component
const Container: React.FC<ContainerProps> = ({ stickyNav, content }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        position: 'relative',
        overflowX: 'hidden',
        main: {
          padding: 'var(--padding-sm) var(--padding-md)',
          maxWidth: '1600px',
          margin: '0 auto',
          '@media screen and (max-width: 1600px)': {
            margin: '0 auto',
          },
          '@media screen and (max-width: 300px)': {
            padding: 'var(--padding-xs)',
          },
        },
      }}
    >
       {/* Render sticky navigation */}
      {stickyNav}
      {/* Render main content */}
      {content}
    </Box>
  );
};

export default Container;
