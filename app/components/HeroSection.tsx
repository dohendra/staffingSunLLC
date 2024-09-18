import { Box, Button, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '100px 0' }}>
      <Typography variant="h2">TALENT? MEET OPPORTUNITY.</Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>Recruitment for creative people</Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
        Job Openings
      </Button>
    </Box>
  );
}