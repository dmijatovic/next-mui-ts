import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { FormControl,InputLabel,Input, InputAdornment, IconButton } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function EditableInput() {
  const styles = useStyles()
  const inputRef:MutableRefObject<HTMLElement> = useRef()
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState(null)

  useEffect(()=>{
    if (disabled===false && inputRef){
      inputRef['current'].focus()
    }
  },[disabled,inputRef])
  return (
    <FormControl className={styles.root}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type='text'
        onChange={({target}:{target:any})=>{
          // debugger
          setValue(target['value'])
        }}
        value={value}
        disabled={disabled}
        inputRef={inputRef}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="enable editing"
              onClick={()=>{
                setDisabled(!disabled)
              }}
              // onMouseDown={handleMouseDownPassword}
            >
              <EditIcon/>
            </IconButton>
          </InputAdornment>
        }
        autoFocus={!disabled}
      />
    </FormControl>
  )
}