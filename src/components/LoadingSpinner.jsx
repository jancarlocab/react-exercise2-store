// LoadingSpinner.jsx
// This component displays a loading spinner while product data is being fetched.

import { Container, CircularProgress, Typography } from '@mui/material';

// PARAMS
// - None

// Returns a styled loading spinner component
const LoadingSpinner = () => (
  <Container maxWidth="lg" sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    py: 4
  }}>
    <CircularProgress size={60} thickness={4} />
    <Typography variant="h6" component="p" align="center" mt={3}>
      Loading products...
    </Typography>
  </Container>
);

export default LoadingSpinner;