import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import lucianaBG from '../../assets/luciana.png';
import { ThemedLayoutV2 } from '@refinedev/mui';
import { Header } from '../../components/header';

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
  return (
    <Card sx={{ height: '100%', maxWidth: '100%' }}>
      <CardContent>
        <Typography
          sx={{ mb: 2, textAlign: 'center' }}
          variant="subtitle1"
          color="red"
        >
          SITO WEB IN COSTRUZIONE
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          Luciana Mele
        </Typography>
        <Typography variant="h4" color="secondary">
          Candidata alla carica di consigliere della Regione Sardegna
          <Typography variant="subtitle1" color="primary">
            Elezioni del 25 febbraio 2024, lista Vota Sardigna / Coalizione
            Sarda / Renato Soru Presidente
          </Typography>
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ minHeight: '100%' }}
        image={lucianaBG}
        title="Vota Luciana Mele!"
      />

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
