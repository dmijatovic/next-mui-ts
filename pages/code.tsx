import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import AccordionCard from 'components/accordion/AccordionCard'

const useStyles = makeStyles((theme)=>({
  codePage: {
    display:'flex',
    flexDirection:'column',
    width:'880px',
    margin:'auto'
  }
}));

export default function Code() {
  const styles = useStyles();
  return (
    <section className={styles.codePage}>
      <h1>Code header</h1>
      <AccordionCard />
    </section>
  )
}