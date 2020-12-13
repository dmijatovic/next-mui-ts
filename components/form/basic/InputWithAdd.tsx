import {useState, useRef, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import useStyles from "../mediaFormStyles"

export default function InputWithAdd({onAdd}:{onAdd:Function}) {
  const styles = useStyles();
  const [state,setState] = useState("")
    const inputField = useRef(null)

  function onAddAlias(){
    if (state!="") onAdd(state)
    setState("")
    setTimeout(()=>{
      inputField.current.focus()
    },100)
  }
  return (
    <FormControl>
      <InputLabel htmlFor="input-width-add-btn">Password</InputLabel>
      <Input
        id="input-with-add-btn"
        type="text"
        value={state}
        inputRef={inputField}
        onChange={({target})=>{
          setState(target.value)
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="add alias"
              onClick={onAddAlias}
              disabled={state===""}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
      />
  </FormControl>
  )
}