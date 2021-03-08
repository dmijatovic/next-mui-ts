import {useState} from 'react'
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import top100Films, {FilmOptionType} from './dummyData'
const filter = createFilterOptions<FilmOptionType>();

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function AutocompleteAdd() {
  const styles = useStyles()
  const [value, setValue] = useState(null);


  function onChange(event,newValue){
    console.log("Autocomplete.onChange...", newValue)

    if (typeof newValue === 'string') {
      //existing value
      setValue({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setValue({
        title: newValue.inputValue,
      });
    } else {
      debugger
      //what is this?
      setValue(newValue);
    }
  }


  function onFilterOptions(options,params){
    const filtered = filter(options, params);

    // Suggest the creation of a new value
    if (params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        title: `Add "${params.inputValue}"`,
      });
    }

    return filtered
  }

  function onGetOptionLabel(option){
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.title;
  }

  function onRenderInput(params){

    return (
      <TextField {...params} label="Free solo with text demo" />
    )
  }

  return (
    <div>
      <h3>Autocomplete add</h3>
      <Autocomplete
        freeSolo
        value={value}
        onChange={onChange}
        filterOptions={onFilterOptions}
        options={top100Films}
        getOptionLabel={onGetOptionLabel}
        renderOption={(option) => option.title}
        renderInput={onRenderInput}
      />
    </div>
  )
}