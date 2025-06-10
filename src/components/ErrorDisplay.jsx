// ErrorDisplay.jsx
// This component displays an error message when product data fails to load.

import { Container, Typography } from '@mui/material';

// PARAMS
// error: The error message to display

// Returns a styled error message component
const ErrorDisplay = ({ error }) => (
  <Container maxWidth="lg" sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    py: 4
  }}>
    <Typography color="error" variant="h5" gutterBottom>
      Error Loading Products
    </Typography>
    <Typography color="textSecondary">
      {error}
    </Typography>
  </Container>
);

export default ErrorDisplay;