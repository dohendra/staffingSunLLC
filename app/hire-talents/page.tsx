import { Box, Button, Grid, TextField, Typography, Card, CardContent, CardMedia } from '@mui/material';
import HeroSection from '../components/HeroSection';  // Import your existing HeroSection


export default async function HireTalentsPage() {
  const res= await fetch('http://localhost:5001/api/hire-talents');
  const talents = await res.json();
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <HeroSection />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4 }}>
        <Grid container spacing={4}>
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

            <Grid container spacing={4}>
              {talents.map((talent :any , index: number) => (
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
