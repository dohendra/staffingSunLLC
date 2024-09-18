import { Box, Typography, TextField, Button } from '@mui/material';

export default function ContactSection() {
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#fff', textAlign: 'center' }}>
      <Typography variant="h4" color="primary">Looking For A New Opportunity?</Typography>
      <Box sx={{ marginTop: 4 }}>
        <TextField label="Full Name" variant="outlined" sx={{ width: '300px', marginBottom: 2 }} />
        <TextField label="Email" variant="outlined" sx={{ width: '300px', marginBottom: 2 }} />
        <TextField label="Contact Number" variant="outlined" sx={{ width: '300px', marginBottom: 2 }} />
        <Button variant="contained" sx={{ marginTop: 2 }}>Submit</Button>
      </Box>
    </Box>
  );
}
