
import { makeStyles } from '@material-ui/core/styles'
import {Typography, Grid} from "@material-ui/core"

let currentTheme={}

const useStyles = makeStyles(theme => {
  currentTheme = theme
  return (props)=>{
    debugger
    return {
      homePage: {
        color: theme.palette.primary.main,
      }
    }
  }
})


export default function ThemeProps(props){
  const styles = useStyles(props)
  return(
    <Grid item md={6} xs={12}>
      <Typography
        variant="h2"
        color="secondary"
      >
        Theme props
      </Typography>
      <pre>
      {JSON.stringify(currentTheme, null, 2)}
      </pre>
    </Grid>
  )
}