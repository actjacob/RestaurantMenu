import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    findUs: '',
    newsletter: false,
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      findUs: '',
      newsletter: false,
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        textAlign="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '2.8rem' },
          fontWeight: 700,
          mb: 6,
        }}
      >
        We're happy to hear from you
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Name
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Email
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    How did you find us?
                  </Typography>
                  <TextField
                    fullWidth
                    name="findUs"
                    value={formData.findUs}
                    onChange={handleChange}
                    placeholder="Friends, social media, etc."
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Yes, sign me up for the newsletter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Drop us a line
                  </Typography>
                  <TextField
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Send it!
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>
                  623 Harrison St., 2nd Floor,
                  <br />
                  San Francisco, CA 94107
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>+1 415-201-6370</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>hello@omnifood.com</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Opening Hours
              </Typography>
              <Typography variant="body2" paragraph>
                Monday - Friday: 8:00 AM - 8:00 PM
              </Typography>
              <Typography variant="body2" paragraph>
                Saturday - Sunday: 10:00 AM - 6:00 PM
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
