import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { FormGroup, FormControlLabel, Switch  } from "@material-ui/core";

export function getOptions(options){
  const selectOptions=[]
  options.forEach(opt=>{
    selectOptions.push(
      <MenuItem
        key={opt.id}
        value={opt.id}>{opt.label}
      </MenuItem>
    )
  })
  return selectOptions
}

export function createField(field){
  if (field===undefined) return null
  switch(field.type){
    case "switch":
      return(
        <FormControlLabel
          key={field.id}
          value="top"
          control={<Switch color="primary" />}
          label={field.label}
          labelPlacement="top"
        />
      )
    case "select":
      return(
        <TextField
          select
          key={field.id}
          {...field}
        >
          {getOptions(field.options)}
        </TextField>
      )
    default:
      return(<TextField key={field.id} {...field} />)
  }
}

export function CreateFormItems(fields,layout=undefined):Node[]{
  const html=[]
  if (layout){
    layout.forEach((r,p)=>{
      html.push(
        <FormGroup
          key={`form-group-${p}`}
          aria-label="position" row>
          {r.map(i=>createField(fields[i]))}
        </FormGroup>
      )
    })
  } else {
    fields.forEach(field=>{
      html.push(
        <FormGroup
          key={field.name}
          aria-label="position" row>
          {createField(field)}
        </FormGroup>
      )
    })
  }
  return html
}