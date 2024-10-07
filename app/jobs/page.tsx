import { Box, Button, Grid, TextField, Typography, Card, CardContent } from '@mui/material';
import HeroSection from '../components/HeroSection';  // Reuse the existing HeroSection component

const jobs = [
  {
    ref: '#FDMAN2038-234',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam.',
  },
  {
    ref: '#FDMAN2038-235',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam.',
  },
  {
    ref: '#FDMAN2038-236',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam.',
  },
  {
    ref: '#FDMAN2038-237',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam.',
  },
];

export default function JobsPage() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Reuse the HeroSection component */}
      <HeroSection />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4 }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <TextField
            placeholder="Search for job titles..."
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: 2 }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2, height: '56px' }}>
            <Typography variant="h6">🔍</Typography>
          </Button>
        </Box>

        {/* Job Listings */}
        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: 'flex', backgroundColor: 'white', borderRadius: 2, padding: 3 }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Job Ref: {job.ref}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {job.location}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" gutterBottom>
                    {job.salary}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {job.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="contained" color="primary">
                    <Typography>→</Typography>
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Show 1 - 4 of 20 entries</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
