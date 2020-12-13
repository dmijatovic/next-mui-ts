import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function TextFieldValid(props) {
  const styles = useStyles();
  const [state,setState]=useState({
    value:"",
    error:false
  })

  // console.log("TextFieldValid.props...", props)
  return (
    <TextField
      error={state.error}
      value={state.value}
      onChange={({target})=>{
        setState({
          value: target.value,
          error: !target.validity.valid
        })
      }}
      {...props}
    />
  )
}