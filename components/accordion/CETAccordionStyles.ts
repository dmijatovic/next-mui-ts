

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%'
  },
  cetRoot: {
    padding: '1rem',
    marginBottom:'1rem',
    border: '1px solid grey',

  },
  accordion:{
    border: '1px solid lightgrey',
    boxShadow: 'none',
    marginBottom: '1rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  title:{
    alignSelf:'center',
    width:'20rem'
  },
  info:{
    alignSelf:'center',
    flex:1
  },
  fab:{
    position:'absolute',
    right:'1.5rem',
  },
  details:{
    flexDirection:'column'
  }
}))

export default useStyles
