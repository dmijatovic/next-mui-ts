import Head from 'next/head'

import {Paper, Typography, Card, CardContent,Container, Grid} from "@material-ui/core"

import ThemeProps from 'components/ThemeProps'
import TypographyDemo from 'components/TypographyDemo'

export default function Home(props) {
  return (
    <Paper
      elevation={0}
      component='article'
      square={true}
      style={{'minHeight':'100vh'}}
    >
      <Head>
        <title>Material-UI with NextJS</title>
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="primary"
        >
          Header 1 - Title
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <TypographyDemo/>
              <ThemeProps/>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Paper>
  )
}
