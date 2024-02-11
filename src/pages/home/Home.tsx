import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import lucianaBG from '../../assets/luciana.png';
import { useTranslate } from '@refinedev/core';
import { useDocumentTitle } from '@refinedev/react-router-v6';

const Home: React.FC = () => <MediaCard />;

export default Home;

const MediaCard = () => {
  const translate = useTranslate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  useDocumentTitle('Luciana Mele 🍎');

  return (
    <Card sx={{ height: '100%', maxWidth: '100%' }}>
      <CardContent>
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
        title="Luciana Mele elezioni regionali sardegna 2024"
      />
    </Card>
  );
};
