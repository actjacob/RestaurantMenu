import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Paper,
  TextField,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TimerIcon from '@mui/icons-material/Timer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';

const features = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Up to 365 days/year',
    description:
      "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
  },
  {
    icon: <TimerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Ready in 20 minutes',
    description:
      "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: '100% organic',
    description:
      'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Order anything',
    description:
      "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
  },
];

const meals = [
  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Japanese Gyozas',
    tags: ['Vegetarian'],
    calories: 650,
    nutriscore: 74,
    rating: 4.9,
    votes: 537,
  },
  {
    image:
      'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=400&q=80',
    title: 'Avocado Salad',
    tags: ['Vegan', 'Paleo'],
    calories: 400,
    nutriscore: 92,
    rating: 4.8,
    votes: 441,
  },
  {
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80',
    title: 'Grilled Salmon',
    tags: ['Pescatarian', 'Gluten-Free'],
    calories: 550,
    nutriscore: 88,
    rating: 4.7,
    votes: 389,
  },
  {
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    title: 'Mediterranean Bowl',
    tags: ['Vegetarian', 'Gluten-Free'],
    calories: 480,
    nutriscore: 95,
    rating: 4.9,
    votes: 512,
  },
  {
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
    title: 'Margherita Pizza',
    tags: ['Vegetarian'],
    calories: 720,
    nutriscore: 68,
    rating: 4.6,
    votes: 423,
  },
];

const testimonials = [
  {
    name: 'Dave Bryson',
    text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ben Hadley',
    text: 'The AI algorithm is crazy good, it chooses the right meals for me every time. It is amazing not to worry about food anymore!',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Steve Miller',
    text: 'Restaurant Menu is a life saver! I just started a company, so there is no time for cooking. I could not live without my daily meals now!',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Hannah Smith',
    text: 'I got Restaurant Menu for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 399,
    features: ['1 meal per day', 'Order from 11am to 9pm', 'Delivery is free'],
    highlight: false,
  },
  {
    name: 'Complete',
    price: 649,
    features: [
      '2 meals per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to latest recipes',
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: 999,
    features: [
      '3 meals per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to all recipes',
      'Priority support',
    ],
    highlight: false,
  },
];

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Complete');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          width: '100vw',
          position: 'relative',
          left: 0,
          background:
            'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(34, 40, 49, 0.7)',
            zIndex: 1,
          }}
        />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 12,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.8rem' },
              letterSpacing: '-1.5px',
              mb: 3,
              textShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
          >
            A healthy meal delivered to your door, every single day
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              color: 'white',
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              mb: 5,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#pricing"
              sx={{
                fontWeight: 700,
                fontSize: '1.2rem',
                px: 4,
                py: 1.5,
                borderRadius: 99,
                boxShadow: '0 2px 12px rgba(230,126,34,0.15)',
              }}
            >
              Start eating well
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#how-it-works"
              sx={{
                fontWeight: 700,
                fontSize: '1.2rem',
                px: 4,
                py: 1.5,
                borderRadius: 99,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            >
              Learn more ↓
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mt: 6,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Avatar
                key={i}
                src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                sx={{ width: 48, height: 48, border: '2px solid #fff' }}
              />
            ))}
            <Typography
              sx={{
                color: 'white',
                ml: 2,
                alignSelf: 'center',
                fontWeight: 500,
              }}
            >
              250,000+ meals delivered last year!
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* How it works */}
      <Box id="how-it-works" sx={{ py: 12, bgcolor: '#fdf2e9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Your daily dose of health in 3 simple steps
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  01
                </Typography>
                <img
                  src="https://omnifood.dev/img/app/app-screen-1.png"
                  alt="Step 1"
                  style={{ width: '100%', maxWidth: 180, margin: '24px auto' }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Tell us what you like (and what not)
                </Typography>
                <Typography color="text.secondary">
                  Never again waste time thinking about what to eat! Restaurant
                  Menu AI will create a 100% personalized weekly meal plan just
                  for you.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  02
                </Typography>
                <img
                  src="https://omnifood.dev/img/app/app-screen-2.png"
                  alt="Step 2"
                  style={{ width: '100%', maxWidth: 180, margin: '24px auto' }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Approve your weekly meal plan
                </Typography>
                <Typography color="text.secondary">
                  Once per week, approve the meal plan generated for you by
                  Restaurant Menu AI. You can change ingredients, swap entire
                  meals, or even add your own recipes.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  03
                </Typography>
                <img
                  src="https://omnifood.dev/img/app/app-screen-3.png"
                  alt="Step 3"
                  style={{ width: '100%', maxWidth: 180, margin: '24px auto' }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Receive meals at convenient time
                </Typography>
                <Typography color="text.secondary">
                  Best chefs in town will cook your selected meal every day, and
                  we will deliver it to your door whenever works best for you.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Meals Section */}
      <Box id="meals" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Restaurant Menu AI chooses from 5,000+ recipes
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {meals.map((meal, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={meal.image}
                    alt={meal.title}
                    sx={{ width: 140, height: 140, borderRadius: 4, mr: 3 }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {meal.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
                      {meal.tags.map((tag) => (
                        <Paper
                          key={tag}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: '#fdf2e9',
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            borderRadius: 99,
                          }}
                        >
                          {tag}
                        </Paper>
                      ))}
                    </Box>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: '0.95rem' }}
                    >
                      {meal.calories} calories · NutriScore® {meal.nutriscore} ·{' '}
                      {meal.rating} rating ({meal.votes})
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            textAlign="center"
            sx={{ mt: 6, color: 'text.secondary' }}
          >
            Works with any diet: Vegetarian, Vegan, Pescatarian, Gluten-free,
            Lactose-free, Keto, Paleo, Low FODMAP, Kid-friendly
          </Typography>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ py: 12, bgcolor: '#fdf2e9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Once you try it, you can't go back
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {testimonials.map((t, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card sx={{ p: 3, textAlign: 'center', boxShadow: 2 }}>
                  <Avatar
                    src={t.image}
                    alt={t.name}
                    sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: 'italic', mb: 2 }}
                  >
                    “{t.text}”
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Eating well without breaking the bank
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {plans.map((plan, idx) => {
              const isSelected = selectedPlan === plan.name;
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <Card
                    onClick={() => setSelectedPlan(plan.name)}
                    sx={{
                      p: 4,
                      boxShadow: plan.highlight || isSelected ? 8 : 2,
                      border: isSelected
                        ? '3px solid #e67e22'
                        : plan.highlight
                        ? '2px solid #e67e22'
                        : 'none',
                      position: 'relative',
                      cursor: 'pointer',
                      transform: isSelected ? 'scale(1.06)' : 'scale(1)',
                      transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
                      zIndex: isSelected ? 2 : 1,
                    }}
                  >
                    {(plan.highlight || isSelected) && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 99,
                          fontWeight: 700,
                          fontSize: '1rem',
                        }}
                      >
                        POPULAR
                      </Box>
                    )}
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 800, color: 'primary.main', my: 2 }}
                    >
                      ${plan.price}
                    </Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, mb: 3 }}>
                      {plan.features.map((f) => (
                        <li key={f} style={{ marginBottom: 8 }}>
                          <Typography color="text.secondary">{f}</Typography>
                        </li>
                      ))}
                    </Box>
                    <Button
                      variant={isSelected ? 'contained' : 'outlined'}
                      color="primary"
                      size="large"
                      sx={{
                        borderRadius: 99,
                        fontWeight: 700,
                        width: '100%',
                        boxShadow: isSelected ? 3 : 0,
                      }}
                    >
                      {isSelected ? 'Selected' : 'Start eating well'}
                    </Button>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Typography
            textAlign="center"
            sx={{ mt: 6, color: 'text.secondary' }}
          >
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following: Never cook again! Local and
            organic. No waste. Pause anytime.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 12, bgcolor: '#fdf2e9' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Get your first meal for free!
          </Typography>
          <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField label="Full Name" name="name" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email address"
                    name="email"
                    type="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Where did you hear from us?"
                    name="ref"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ borderRadius: 99, fontWeight: 700 }}
                  >
                    Sign up now
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
          <Box sx={{ textAlign: 'center', mt: 6, color: 'text.secondary' }}>
            <Typography>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </Typography>
            <Typography>415-201-6370 · hello@restaurantmenu.com</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
