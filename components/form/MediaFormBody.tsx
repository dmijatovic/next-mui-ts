import {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { FormGroup, Switch } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';


import useStyles from "./MediaFormStyles"
import {mediumType, country, mediumAliases} from './mediaFieldsConfig'
import InputAndAddBtn from './InputAndAddBtn'


export default function MediaFormBody({register}) {
  const styles = useStyles();
  const [aliasList,setAliasList]=useState(mediumAliases)

  function inputGap(){
    return (
      <div className={styles.inputGap} ></div>
    )
  }

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
      <TextField
        select
        required
        className={styles.inputFlex}
        name={field.name}
        label={field.label}
        helperText={field.helperText}
        defaultValue={field.defaultValue}>
          {getOptions(field.options)}
        </TextField>
    )
  }

  function getMediumAliases(aliases){
    return aliases.map(alias=>{
      return (
        <Chip
          key={alias.id}
          label={alias.label}
          onDelete={()=>deleteAlias(alias.id)}
          className={styles.chip}
          />
      )
    })
  }

  function deleteAlias(id){
    console.log("Delete alias...", id)
    const aliases = aliasList.filter(item=>item.id!=id)
    setAliasList(aliases)
  }
  function addAlias(alias){
    console.log("addAlias...", alias)
    const newList=[
      ...aliasList,
    ]
    newList.push({type:"chip",id:alias,label:alias})
    setAliasList(newList)
  }

  return (
    <>
      <FormGroup className={styles.formGroup} row>
        <div>
          <div className={styles.switchLabel}>Active</div>
          <Switch color="primary" checked={true}/>
        </div>
        {inputGap()}
        <TextField
          required
          autoFocus
          type="text"
          name="name"
          label="Medium"
          inputRef={register({requered:true})}
          helperText="Type medium name"
          className={styles.inputFlex}
        />
      </FormGroup>
      <FormGroup className={styles.formGroup} row>
        {createSelect(mediumType)}
        {inputGap()}
        {createSelect(country)}
      </FormGroup>
      <FormGroup className={styles.formGroup} row>
        <TextField
          className={styles.inputFlex}
          type="number"
          name="readership"
          label="Readership"
          helperText="Type valid number or leave it empty"
        />
        {inputGap()}
        <TextField
          className={styles.inputFlex}
          type="number"
          name="circulation"
          label="Circulation"
          helperText="Type valid number or leave it empty"
        />
      </FormGroup>
      <FormGroup className={styles.formGroup} row>
        <InputAndAddBtn onAdd={addAlias} />
      </FormGroup>
      <section>
        <div className={styles.aliasLabel}>Feed alias</div>
        <div className={styles.aliasSection}>{getMediumAliases(aliasList)}</div>
      </section>
    </>
  )
}