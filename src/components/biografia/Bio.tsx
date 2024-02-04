import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardMedia,
  Paper,
  ImageList,
  ImageListItem,
  ListItem,
  List,
} from '@mui/material';
import { useTranslate } from '@refinedev/core';
import bioPic1 from '../../assets/bio1.jpeg';
import bioPic2 from '../../assets/bio2.jpeg';
import { useDocumentTitle } from '@refinedev/react-router-v6';

const BioContent = () => {
  useDocumentTitle('Luciana Mele 🍎 | Biografia');
  const translate = useTranslate();
  return (
    <Paper sx={{ height: '100%', maxWidth: '100%' }}>
      <Stack sx={{ mb: 2, textAlign: 'center' }} direction="column" spacing={5}>
        {/* TITLE */}
        <Typography
          alignSelf="center"
          variant="h3"
          component="h3"
          color="primary.dark"
        >
          {translate('page.bio.slogan')}
        </Typography>
        {/* PIC */}
        <Stack direction="row" spacing={5} p={5}>
          <CardMedia
            sx={{
              maxWidth: [0, 0, '400px'],
            }}
            component="img"
            image={bioPic1}
            title="bio pic"
          ></CardMedia>
          <Typography textAlign="left">
            <Typography variant="h4" gutterBottom color="secondary">
              Luciana Mele
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #donna
              </Typography>
              Docente, sindacalista, ambientalista, mamma: sono una donna{' '}
              <strong>coraggiosa</strong> che da Gonnosfanadiga si candida per
              portare avanti un <strong>futuro sostenibile</strong> per tutti.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #competenze
              </Typography>
              Voglio mettere la mia passione e competenza al servizio della
              comunità.
            </Typography>
            <Typography sx={{ mt: 2 }} gutterBottom>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #passione
              </Typography>
              Amo leggere, studiare e applicarmi nel mondo della scuola.
            </Typography>
            <List sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #ambiente
              </Typography>
              Sono stata Assessora all'Ambiente con risultati tangibili:
              <ListItem>- Centro di Educazione Ambientale</ListItem>
              <ListItem>- Nuovo capitolato per l'igiene pubblica</ListItem>
              <ListItem>- Ecocentro Comunale</ListItem>
              <ListItem>- Tutela dei Siti d'Interesse Comunitario</ListItem>
            </List>
            <Typography sx={{ mt: 2 }} gutterBottom>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #territorio
              </Typography>
              Ho fondato il <strong>Comitato Terra Che Ci Appartiene</strong> in
              difesa del territorio contro le speculazioni energetiche.
            </Typography>
            <Typography gutterBottom sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #esperienza
              </Typography>
              Dirigente sindacale fino a ieri, da sempre in prima linea per i
              diritti dei lavoratori, con particolare attenzione al mondo della
              scuola.
            </Typography>
            <Typography gutterBottom sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #diritti
              </Typography>
              Da sempre sono attenta alle politiche giovanili: dare voce e
              opportunità alle nuove generazioni è una delle cose che mi sta più
              a cuore. Mi batto per una società più equa e inclusiva, con
              particolare sensibilità a tutte le politiche di genere.
            </Typography>
            <Typography gutterBottom sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #impegno
              </Typography>
              Non ho mai smesso di voler imparare e accetto le sfide con
              entusiasmo: la politica è una passione ereditata dalla mia
              famiglia.
            </Typography>
            <Typography gutterBottom sx={{ mt: 2 }}>
              <Typography
                color="primary"
                alignSelf="center"
                fontWeight="600"
                variant="body1"
              >
                #azione
              </Typography>
              Il mio sogno è di poter migliorare la società in cui viviamo. Sono
              convinta che insieme possiamo costruire un futuro più sostenibile:
              per questo mi serve il tuo sostegno!
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export const Bio: React.FC = () => <BioContent />;
