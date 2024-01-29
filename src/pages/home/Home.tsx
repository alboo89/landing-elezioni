import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Theme,
  Typography,
  autocompleteClasses,
  useMediaQuery,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import lucianaBG from '../../assets/luciana.png';
import { ThemedLayoutV2 } from '@refinedev/mui';
import { Header } from '../../components/header';
import { useTranslate } from '@refinedev/core';

const Home: React.FC = () => (
  <Container sx={{ p: '0 !important' }} maxWidth={false}>
    <ThemedLayoutV2
      Header={() => <Header homepage sticky />}
      Sider={() => <div></div>}
    >
      <MediaCard />
    </ThemedLayoutV2>
  </Container>
);

export default Home;

const MediaCard = () => {
  const translate = useTranslate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card sx={{ height: '100%', maxWidth: '100%' }}>
      <CardContent>
        <Typography
          sx={{ mb: [0, 2, 2], textAlign: 'center' }}
          variant="subtitle1"
          color="red"
        >
          {translate('page.home.wip')}
        </Typography>
        <Stack sx={{ mb: 2, textAlign: 'center' }} direction="row" spacing={5}>
          <Typography gutterBottom variant="h3" component="div">
            Luciana Mele
          </Typography>
          <Box alignSelf="center" height="100%">
            <ButtonGroup orientation={matches ? 'horizontal' : 'vertical'}>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.facebook.com/luciana.mele.756"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </Button>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.instagram.com/lucianamele_62"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
        <Typography variant="h4" color="secondary">
          {translate('page.home.subtitle1')}
          <Typography variant="subtitle1" color="primary">
            {translate('page.home.subtitle2')}
          </Typography>
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ maxHeight: '100%', maxWidth: '100%' }}
        component="img"
        image={lucianaBG}
        title="Vota Luciana Mele!"
      />
    </Card>
  );
};
