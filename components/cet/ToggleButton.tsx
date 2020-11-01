import { Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  toggleButton:{
    flex: 1,
    marginRight: '1rem',
    border:'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    justifyContent:'flex-start',
    minHeight: '3rem',
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.body1.fontFamily,
    textTransform: 'none',    
    // '&.MuiButton-label':{
    //   justifyContent:'flex-start',
    // }
  },
}));

interface TreeNode{
  id: string,
  name:string,
  children?:[]
}

export default function ToggleButton({node,handleItemAction}:
  {node:TreeNode, handleItemAction:Function}):JSX.Element {
  const styles = useStyles();
  const {id,name,children} = node
  // debugger
  if (children && children.length > 0){
    return (
      <Button
        className={styles.toggleButton}
        onClick={()=>{
          handleItemAction({
            type:"Toggle",
            payload: id
          })
        }}>
          {name}
      </Button>
    )
  }
  return (
    <Typography
      variant="body1"
    >
      {name}
    </Typography>
  )
}