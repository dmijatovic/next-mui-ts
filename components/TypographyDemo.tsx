
import {Typography, Grid} from "@material-ui/core"

export default function TypographyDemo(){
  return (
    <Grid item md={4} xs={12}>
      <Typography variant="h1">
        Header 1
      </Typography>
      <Typography variant="h2">
        Header 2
      </Typography>
      <Typography variant="h3">
        Header 3
      </Typography>
      <Typography variant="h4">
        Header 4
      </Typography>
      <Typography variant="h5">
        Header 5
      </Typography>
      <Typography variant="h6">
        Header 6
      </Typography>
    </Grid>
  )
}