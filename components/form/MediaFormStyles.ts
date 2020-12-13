import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  form:{
    minWidth:'25rem',
    maxWidth:'35rem'
  },
  formHead:{
    borderBottom:'1px solid lightgrey'
  },
  formBody:{
    padding:'1rem',
  },
  formNav:{
    padding:'1rem'
  },
  switchLabel:{
    textAlign: 'center',
    fontSize:'0.825rem',
    color: theme.palette.text.secondary
  },
  aliasLabel:{
    fontSize:'0.825rem',
    color: theme.palette.text.secondary
  },
  aliasSection:{
    display:'flex',
    flexWrap:'wrap'
  },
  chip:{
    margin:'0.5rem 1rem 0.5rem 0rem'
  },
  formGroup:{
    padding:'1rem 0rem'
  },
  inputGap:{
    padding:'1rem'
  },
  inputFlex:{
    flex:1
  }
}));

export default useStyles