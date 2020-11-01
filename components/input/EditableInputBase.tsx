import { useState } from 'react'
import { Typography, InputBase, IconButton } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme)=>({
  root: { },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function EditableInput() {
  const styles = useStyles()
  const [disabled, setDisabled] = useState(true)
  return (
    <section>
      <InputBase
        className={styles.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        disabled = {disabled}
      />
      <IconButton color="primary"
        className={styles.iconButton}
        aria-label="edit item"
        onClick={()=>{
          setDisabled(!disabled)
        }}
        >
        <EditIcon />
      </IconButton>
    </section>
  )
}