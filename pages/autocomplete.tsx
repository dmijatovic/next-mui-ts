import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import AutocompleteAdd from 'components/autocomplete/AutocompleteAdd'


const useStyles = makeStyles((theme)=>({
  section: {
    padding: '5rem'
   }
}));

export default function Autocomplete() {
  const styles = useStyles();
  return (
    <section className={styles.section}>
      <h1>Autocomplete demo</h1>
      <AutocompleteAdd />
    </section>
  )
}