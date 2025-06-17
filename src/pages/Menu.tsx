import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface Plan {
  id: number;
  name: string;
  price: number;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 1,
    name: 'Starter',
    price: 399,
    features: [
      { text: '1 meal per day', included: true },
      { text: 'Order from 11am to 9pm', included: true },
      { text: 'Delivery is free', included: true },
      { text: 'Get access to latest recipes', included: false },
      { text: 'Free delivery', included: true },
    ],
  },
  {
    id: 2,
    name: 'Complete',
    price: 649,
    features: [
      { text: '2 meals per day', included: true },
      { text: 'Order 24/7', included: true },
      { text: 'Delivery is free', included: true },
      { text: 'Get access to latest recipes', included: true },
      { text: 'Free delivery', included: true },
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Pro',
    price: 999,
    features: [
      { text: '3 meals per day', included: true },
      { text: 'Order 24/7', included: true },
      { text: 'Delivery is free', included: true },
      { text: 'Get access to latest recipes', included: true },
      { text: 'Free delivery', included: true },
    ],
  },
];

const Menu = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handlePlanSelect = (planId: number) => {
    setSelectedPlan(planId);
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
          mb: 2,
        }}
      >
        Start eating healthy today
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out',
                transform:
                  selectedPlan === plan.id ? 'scale(1.05)' : 'scale(1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {plan.popular && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold">
                    POPULAR
                  </Typography>
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ mb: 3, fontWeight: 700 }}
                >
                  ${plan.price}
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    /month
                  </Typography>
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <List>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {feature.included ? (
                          <CheckCircleIcon color="primary" />
                        ) : (
                          <CancelIcon color="error" />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={feature.text} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant={
                      selectedPlan === plan.id ? 'contained' : 'outlined'
                    }
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => handlePlanSelect(plan.id)}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu;
