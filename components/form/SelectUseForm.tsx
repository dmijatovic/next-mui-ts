import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import {Controller, Control} from 'react-hook-form'

import useStyles from "./mediaFormStyles"

interface SelectOption{
  id:string,
  label:string
}

export interface SelectData{
  type:string,
  id:string,
  name:string,
  label:string,
  helperText:string,
  defaultValue:any,
  rules:any,
  options:SelectOption[]
}

export default function SelectUseForm({control,data}:{control:Control,data:SelectData}):JSX.Element {
  const styles = useStyles();

  function getOptions(options){
    const selectOptions=[]
    options.forEach(opt=>{
      selectOptions.push(
        <MenuItem
          key={opt.id}
          value={opt.id}>
            {opt.label}
        </MenuItem>
      )
    })
    return selectOptions
  }

  function createSelect(field){
    return (
      <Controller
        name={field.name}
        control={control}
        defaultValue={field.defaultValue}
        rules={field.rules}
        as={
          <TextField
            select
            className={styles.inputFlex}
            label={field.label}
            helperText={field.helperText}
          >
            {getOptions(field.options)}
          </TextField>
        }
      />
    )
  }

  return createSelect(data)
}