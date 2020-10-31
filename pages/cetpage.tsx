import Head from 'next/head'
import { Paper, Typography, Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import CetCard from "../components/cet/CetCard"
// import items from "../data/cet_items"

const useStyles = makeStyles({
  paper: {
    margin: '2rem 1rem',
    minHeight: '100vh',
  }
});

export default function ContentElementsPage() {
  const styles = useStyles();

  return (
    <Paper
      elevation={0}
      component='article'
      square={true}
      className={styles.paper}
    >
      <Head>
        <title>Material-UI with NextJS</title>
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="primary"
        >
          Content Element Definitions
        </Typography>
        <CetCard />
      </Container>
    </Paper>
  );
}
