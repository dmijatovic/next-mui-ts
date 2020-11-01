import {Card, CardActions, Typography,IconButton, CardContent, Grid} from '@material-ui/core'
import {Add} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import TreeView, {RenderTree} from './TreeView'
import items from "./__mocks__/cet_items"
const treeItems = items as RenderTree[]

const useStyles = makeStyles((theme)=>({
  card:{
    flexGrow: 1,
    maxWidth: 400,
  },
  cardActions:{
    padding: '1rem 2rem',
    justifyContent:'space-between',
    borderBottom:`1px solid ${theme.palette.grey[100]}`
  }
}));

export default function CECard(){
  const styles = useStyles();
  
  return (
    <Card className={styles.card}>
      <CardActions className={styles.cardActions}>
        <Typography variant="h5">
              Content Elements
            </Typography>
            <IconButton size="medium" color="primary">
              <Add/>
            </IconButton>
        </CardActions>
      <CardContent>
        <Grid container spacing={2}>
          <TreeView items={treeItems} />
        </Grid>
      </CardContent>
    </Card>
  )
}