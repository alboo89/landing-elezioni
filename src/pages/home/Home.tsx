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
        <Typography sx={{}} variant="h3" color="text.primary">
          SITO WEB IN COSTRUZIONE
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Luciana Mele
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Candidata alla carica di consigliere della Regione Sardegna nella
          tornata elettorale del 25 febbraio 2024 nella lista Vota Sardigna /
          Coalizione Sarda / Renato Soru Presidente
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
