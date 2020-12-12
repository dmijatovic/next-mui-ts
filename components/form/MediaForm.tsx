import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import { useForm } from "react-hook-form";

import MediaFormBody from './MediaFormBody'

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
  }
}));



export default function MediaForm() {
  const styles = useStyles();
  // const { register, handleSubmit, watch, errors } = useForm();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange"
  });

  function onSubmit(data){
    console.log(data)
  }

  function handleCancel(){
    console.log("CANCEL")
  }

  console.log("useForm.formState",formState)

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off">
      <section className={styles.formBody}>
        <MediaFormBody register={register} />
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