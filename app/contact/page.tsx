"use client"
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("-----button clicked----");
    try {
      const res = await axios.post('http://localhost:5001/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 201) {
        console.log('Contact form submitted successfully');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        // backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        If you would like to get in touch, please reach out through the form below.
      </Typography>
      
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <TextField label="Full Name" variant="outlined" fullWidth name="name"
          value={formData.name}
          onChange={handleChange}/>
        <TextField label="Email" variant="outlined" fullWidth name="email"
          value={formData.email}
          onChange={handleChange} />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} name="message"
          value={formData.message}
          onChange={handleChange}
 />
        
        <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
