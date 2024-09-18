import { Box, Grid, Typography, Button } from '@mui/material';

const jobs = [
  { title: 'Frontend Developer', location: 'Manchester, UK', salary: '£40000 - £55000' },
  { title: 'Backend Developer', location: 'London, UK', salary: '£50000 - £65000' },
  { title: 'Fullstack Developer', location: 'Remote', salary: '£45000 - £60000' },
];

export default function JobsSection() {
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <Typography variant="h4" color="primary">Latest Openings</Typography>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={4} key={job.title}>
            <Box sx={{ padding: '20px', backgroundColor: '#fff' }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography>{job.location}</Typography>
              <Typography>{job.salary}</Typography>
              <Button variant="contained" sx={{ marginTop: 2 }}>View Job</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
