import {useState, useRef, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import useStyles from "../MediaFormStyles"

export default function InputAndAddBtn(props) {
  const styles = useStyles();
  const [state,setState] = useState("")
  const [error,setError] = useState(false)
  const inputField = useRef(null)
  const {onAdd,...rest} = props

  function onAddAlias(){
    if (state!="") onAdd(state)
    setState("")
    inputField.current.focus()
  }
  return (
    <TextField
      className={styles.inputFlex}
      type="text"
      name="add-feed-alias"
      label="New feed alias"
      error={error}
      helperText="Type the alias provided in RSS feed and press + button"
      value={state}
      inputRef={inputField}
      onChange={({target})=>{
        if (target.validity.valid){
          setState(target.value)
        } else {
          setError(true)
        }
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
      {...rest}
    />
  )
}