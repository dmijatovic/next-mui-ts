import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { FormGroup, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'

import {useForm} from 'react-hook-form'

import useStyles from "./mediaFormStyles"
import {mediumType, country } from './mediaFieldsConfig'
import InputAddUseForm from './InputAddUseForm'
import SwitchUseForm from './SwitchUseForm'
import SelectUseForm from './SelectUseForm'
import FormFieldGap from './FormFieldGap'
import MediaAliases from './MediaAliases'

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
          <SwitchUseForm control={control} defaultValue={true}/>
          <FormFieldGap />
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
          <SelectUseForm
            control={control}
            data={mediumType}
          />
          <FormFieldGap />
          <SelectUseForm
            control={control}
            data={country}
          />
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
          <FormFieldGap />
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
        <MediaAliases
          aliasList={aliasList}
          onDelete={deleteAlias} />
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