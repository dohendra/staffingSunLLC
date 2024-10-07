import { Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import HeroSection from '../components/HeroSection';  // Reuse the existing HeroSection component

const teamMembers = [
  {
    name: 'Emil Yancy',
    title: 'Team Leader',
    imageUrl: '/assets/emil.jpg',
  },
  {
    name: 'Coty Robin',
    title: 'Senior Recruiter',
    imageUrl: '/assets/coty.jpg',
  },
  {
    name: 'Missie Moira',
    title: 'Senior Recruiter',
    imageUrl: '/assets/missie.jpg',
  },
  {
    name: 'Presley Kiera',
    title: 'Senior Recruiter',
    imageUrl: '/assets/presley.jpg',
  },
  {
    name: 'Dave Jools',
    title: 'Junior Recruiter',
    imageUrl: '/assets/dave.jpg',
  },
  {
    name: 'Ilene Leone',
    title: 'Junior Recruiter',
    imageUrl: '/assets/ilene.jpg',
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <HeroSection />

      {/* CEO Message Section */}
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Typography variant="h4" gutterBottom>
          MESSAGE FROM CEO
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          We are here to support your career.
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis...
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          OUR TEAM
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 160, height: 160, borderRadius: '50%' }}
                  image={member.imageUrl}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                  <Typography variant="body1">{member.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ p: 4, backgroundColor: 'white' }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
          CONTACT
        </Typography>
        <Box component="form" sx={{ maxWidth: '500px', mx: 'auto' }}>
          <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Contact Number" variant="outlined" sx={{ mb: 2 }} />
          <Button fullWidth variant="contained" color="primary" sx={{ py: 1 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
