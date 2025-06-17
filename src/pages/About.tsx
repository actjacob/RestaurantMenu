import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material';

const testimonials = [
  {
    name: 'David Smith',
    role: 'Customer',
    image: 'https://source.unsplash.com/random/100x100/?man',
    text: "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
  },
  {
    name: 'Joana Silva',
    role: 'Customer',
    image: 'https://source.unsplash.com/random/100x100/?woman',
    text: 'Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omnifood. Me and my family are so in love!',
  },
  {
    name: 'Milton Chapman',
    role: 'Customer',
    image: 'https://source.unsplash.com/random/100x100/?person',
    text: 'I was looking for a quick and easy food delivery service in San Francisco. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!',
  },
];

const cities = [
  {
    name: 'Lisbon',
    image: 'https://source.unsplash.com/random/400x300/?lisbon',
    customers: '1600+ happy eaters',
    chefs: '60+ top chefs',
    rating: '4.8',
  },
  {
    name: 'San Francisco',
    image: 'https://source.unsplash.com/random/400x300/?san-francisco',
    customers: '3700+ happy eaters',
    chefs: '160+ top chefs',
    rating: '4.8',
  },
  {
    name: 'Berlin',
    image: 'https://source.unsplash.com/random/400x300/?berlin',
    customers: '2300+ happy eaters',
    chefs: '110+ top chefs',
    rating: '4.7',
  },
  {
    name: 'London',
    image: 'https://source.unsplash.com/random/400x300/?london',
    customers: '1200+ happy eaters',
    chefs: '50+ top chefs',
    rating: '4.7',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Testimonials Section */}
      <Box sx={{ mb: 8 }}>
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
          Our customers can't live without us
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: '1.1rem', fontStyle: 'italic' }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cities Section */}
      <Box>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 700,
            mb: 6,
          }}
        >
          We're currently in these cities
        </Typography>

        <Grid container spacing={4}>
          {cities.map((city, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={city.image}
                  alt={city.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {city.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        mr: 1,
                      }}
                    >
                      ★
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {city.rating} rating
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {city.customers}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {city.chefs}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
