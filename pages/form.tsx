import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import MediaForm from 'components/form/basic/MediaForm'
import MediaUseForm from 'components/form/MediaUseForm'

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function FormDemoPage() {
  const styles = useStyles();
  return (
    <>
    <h1>Form demo</h1>
    {/* <MediaForm /> */}
    <MediaUseForm  />
    </>
  )
}