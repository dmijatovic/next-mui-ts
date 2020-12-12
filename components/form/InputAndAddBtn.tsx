import {useState, useRef, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import useStyles from "./MediaFormStyles"

export default function InputAndAddBtn({onAdd}:{onAdd:Function}) {
  const styles = useStyles();
  const [state,setState] = useState("")
  const inputField = useRef(null)

  function onAddAlias(){
    if (state!="") onAdd(state)
    setState("")
    inputField.current.focus()
    // setTimeout(()=>{
      
    // },1)
  }
  return (
    <TextField
      className={styles.inputFlex}
      type="text"
      name="add-feed-alias"
      label="New feed alias"
      helperText="Type the alias provided in RSS feed and press + button"
      value={state}
      inputRef={inputField}
      onChange={({target})=>{
        setState(target.value)
      }}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            <IconButton
              aria-label="add alias"
              onClick={onAddAlias}
              disabled={state===""}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </InputAdornment>
      }}
    />
  )
}