import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { gsap } from "gsap";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} href="/">
          Sun Staffing LLC
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/about">About Us</Button>
          <Button color="inherit" component={Link} href="/jobs">Jobs</Button>
          <Button color="inherit" component={Link} href="/hire-talents">Hire Talents</Button>
          <Button color="inherit" component={Link} href="/contact">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
