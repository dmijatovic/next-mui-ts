import Head from 'next/head'

import {Paper, Typography, Card, CardContent,Container} from "@material-ui/core"
import { makeStyles, Theme } from '@material-ui/core/styles';

let currentTheme={}

const useStyles = makeStyles(theme => {
  currentTheme = theme
  return (props)=>{
    debugger
    return {
      homePage: {
        color: theme.palette.primary.main,
      }
    }
  }
})

export default function Home(props) {
  const styles = useStyles(props)
  console.log("styles:", styles)
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

      <Container maxWidth="md">
        <Typography
          variant="h1"
          color="primary"
        >
          It works :-)
        </Typography>
        <Card>
          <CardContent>
            <Typography
              variant="h3"
              color="textSecondary"
              >Default theme props</Typography>
            <pre>
            {JSON.stringify(currentTheme, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </Container>
    </Paper>

  )
}
