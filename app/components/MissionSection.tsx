import { Box, Typography, Button } from '@mui/material';

export default function MissionSection() {
  return (
    <Box sx={{ display: 'flex', padding: '50px', alignItems: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" color="primary">Mission</Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>We’ve managed over 2.5 million candidates</Typography>
        <Typography sx={{ marginTop: 2 }}>Lorem ipsum dolor sit amet consectetur...</Typography>
        <Button variant="contained" sx={{ marginTop: 4 }}>Learn More</Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src="/assets/mission-image.jpg" alt="Mission" width="100%" />
      </Box>
    </Box>
  );
}
