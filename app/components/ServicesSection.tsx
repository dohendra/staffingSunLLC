import { Box, Grid, Typography } from '@mui/material';

const services = [
  { title: 'Searching', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Mock Interview', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Reference Check', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Get You Onboard', description: 'Lorem ipsum dolor sit amet.' },
];

export default function ServicesSection() {
  return (
    <Box sx={{ padding: '50px', textAlign: 'center' }}>
      <Typography variant="h4" color="primary">Services</Typography>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Typography variant="h6">{service.title}</Typography>
            <Typography>{service.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
