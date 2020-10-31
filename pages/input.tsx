import Head from 'next/head'
import { Paper, Typography, Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import InputDemo from '../components/input/InputDemo'
import SearchInputDemo from '../components/input/SearchInputDemo'
import EditableInputBase from '../components/input/EditableInputBase'
import EditableInput from '../components/input/EditableInput'

const useStyles = makeStyles(theme=>({
  paper: {
    margin: '2rem 1rem',
    minHeight: '100vh',
  }
}))

export default function InputPage(){
  const styles = useStyles()

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
          Input demo
        </Typography>
        <InputDemo />
        <SearchInputDemo />
        <EditableInputBase />
        <EditableInput />
      </Container>
    </Paper>
  )
}