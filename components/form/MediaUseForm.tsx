import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { FormGroup, Switch, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'
import Chip from '@material-ui/core/Chip';

import {useForm, Controller} from 'react-hook-form'

import useStyles from "./MediaFormStyles"
import {mediumType, country } from './mediaFieldsConfig'
import InputAddUseForm from './InputAddUseForm'

export default function MediaUseForm() {
  const styles = useStyles();
  const [aliasList,setAliasList]=useState([])

  const {register, handleSubmit, control, formState, reset} = useForm({
    mode:"onChange"
  })

  function onSubmit(data){
    const allData={
      ...data,
      aliasList
    }
    console.log(allData)
    //reset form
    reset()
    //reset aliases list
    setAliasList([])
  }

  function handleCancel(){
    console.log("CANCEL")
  }

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
      <Controller
        name={field.name}
        control={control}
        defaultValue={field.defaultValue}
        rules={{required:true}}
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
  function addAlias(newAlias){
    console.log("newAlias...", newAlias)
    const newList=[
      ...aliasList,
    ]
    newList.push({type:"chip",id:newAlias,label:newAlias})
    setAliasList(newList)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off">
      <section className={styles.formBody}>
      <FormGroup className={styles.formGroup} row>
        <div>
          <div className={styles.switchLabel}>Active</div>
          <Controller
            name="active"
            control={control}
            defaultValue={true}
            render={(
              { onChange, value, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <Switch
                color="primary"
                onChange={e => onChange(e.target.checked)}
                checked={value}
                inputRef={ref}
              />
            )}
          />
        </div>
        {inputGap()}
        <TextField
          required
          autoFocus
          type="text"
          name="name"
          label="Medium"
          inputRef={register({required:true, minLength:5,maxLength:100})}
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
          inputRef={register({min:100,max:10000000})}
        />
        {inputGap()}
        <TextField
          className={styles.inputFlex}
          type="number"
          name="circulation"
          label="Circulation"
          helperText="Type valid number or leave it empty"
          inputRef={register({min:100,max:10000000})}
        />
      </FormGroup>
      <FormGroup className={styles.formGroup} row>
        <InputAddUseForm
          onAdd={addAlias} />
      </FormGroup>
      <section>
        <div className={styles.aliasLabel}>Feed alias</div>
        <div className={styles.aliasSection}>{getMediumAliases(aliasList)}</div>
      </section>
      </section>
      <section className={styles.formNav}>
        <Button onClick={handleCancel}>
            Cancel
        </Button>
        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon/>}
        >
          Save
        </Button>
      </section>
    </form>
  )
}