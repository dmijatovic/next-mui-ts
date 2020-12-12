import { makeStyles } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
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