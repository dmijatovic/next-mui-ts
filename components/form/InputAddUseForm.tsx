import {useRef} from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import useStyles from "./MediaFormStyles"
import {Controller, useForm} from 'react-hook-form'

export default function InputAddUseForm({onAdd}) {
  const styles = useStyles();
  const inputField = useRef(null)
  const {control, setValue} = useForm({
    mode:"onChange"
  })

  function onAddAlias(value){
    onAdd(value)
    setValue("add-feed-alias","")
    inputField.current.focus()
  }

  function validate(value,invalid){
    const info={
      disabled:true,
      error:false,
      helperText:"Type the alias provided in RSS feed and press + button"
    }
    if (invalid!==undefined && value!==""){
      info.helperText=invalid.message
      info.disabled=true,
      info.error=true
    }
    if (invalid===undefined){
      info.disabled=false,
      info.error=false
      info.helperText="Type the alias provided in RSS feed and press + button"
    }
    if (value===""){
      info.disabled=true,
      info.error=false
      info.helperText="Type the alias provided in RSS feed and press + button"
    }
    return info
  }

  return (
    <Controller
      control={control}
      name="add-feed-alias"
      defaultValue=""
      rules={{
        minLength:{value:1,message:"Minimum 2 chars long"},
        maxLength:{value:50,message:"Maximum 50 chars long"}
      }}
      render={(
        { onChange, onBlur, value, name, ref },
        { invalid, isTouched, isDirty }
      ) => {
        console.log("add-feed-alias.invalid...", invalid)
        // debugger
        const {disabled,error,helperText}=validate(value,invalid)
        return(
          <TextField
            className={styles.inputFlex}
            type="text"
            label="New feed alias"
            helperText={helperText}
            value={value}
            inputRef={inputField}
            error={error}
            onChange={e => onChange(e.target.value)}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="add alias"
                    onClick={()=>onAddAlias(value)}
                    disabled={disabled}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
            }}
          />
        )
      }}
    />



  )
}