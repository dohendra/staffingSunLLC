import { Box, Button, Grid, TextField, Typography, Card, CardContent, CardMedia } from '@mui/material';
import HeroSection from '../components/HeroSection';  // Import your existing HeroSection

const talents = [
  {
    name: 'Emil Yancy',
    title: 'Front End Developer',
    company: 'UK Leading Ecommerce Firm',
    location: 'Manchester – Hybrid',
    techStack: 'Front End Developer, React, ReactJS 18, React Hooks, Shopify platform, JavaScript, TypeScript, HTML5, CSS, UI, UX',
    imageUrl: '/assets/emil.jpg',
  },
  {
    name: 'Coty Robin',
    title: 'Senior Recruiter',
    company: 'UK Leading Ecommerce Firm',
    location: 'Manchester – Hybrid',
    techStack: 'Recruitment, Human Resources, Talent Acquisition, Employer Branding, Onboarding, Employee Relations',
    imageUrl: '/assets/coty.jpg',
  },
  {
    name: 'Missie Moira',
    title: 'Back End Developer',
    company: 'UK Leading Ecommerce Firm',
    location: 'Manchester – Hybrid',
    techStack: 'Node.js, Express, MongoDB, SQL, REST APIs, JavaScript, TypeScript, Docker, AWS',
    imageUrl: '/assets/missie.jpg',
  },
  {
    name: 'Presley Kiera',
    title: 'Junior Recruiter',
    company: 'UK Leading Ecommerce Firm',
    location: 'Manchester – Hybrid',
    techStack: 'Recruitment, Screening, Interviews, Talent Acquisition, Social Media Recruiting',
    imageUrl: '/assets/presley.jpg',
  },
];

export default function HireTalentsPage() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Reuse the HeroSection component */}
      <HeroSection />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4 }}>
        {/* Search and Filters */}
        <Grid container spacing={4}>
          {/* Sidebar Filters */}
          <Grid item xs={12} md={3}>
            <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Location
              </Typography>
              <TextField select defaultValue="Manchester, UK" fullWidth variant="outlined" SelectProps={{ native: true }}>
                <option value="Manchester, UK">Manchester, UK</option>
                <option value="London, UK">London, UK</option>
              </TextField>

              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                Salary
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField label="£45000" variant="outlined" fullWidth />
                <TextField label="£65000" variant="outlined" fullWidth />
              </Box>

              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                Job Type
              </Typography>
              <Button variant="outlined" sx={{ mr: 1 }}>Hybrid</Button>
              <Button variant="outlined">Permanent</Button>
            </Box>
          </Grid>

          {/* Main Content - Talent Cards */}
          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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

            {/* List of Talents */}
            <Grid container spacing={4}>
              {talents.map((talent, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{ display: 'flex', backgroundColor: 'white', borderRadius: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 160 }}
                      image={talent.imageUrl}
                      alt={talent.name}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {talent.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        {talent.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {talent.company} – {talent.location}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        (Tech stack: {talent.techStack})
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        See more
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
