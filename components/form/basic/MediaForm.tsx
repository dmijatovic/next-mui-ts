import { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

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
  const formRef = useRef(null)
  const [state,setState] = useState({
    valid:false,
    data: {}
  })

  function onSubmit(data){
    console.log(data)
  }

  function handleCancel(){
    console.log("CANCEL")
  }


  return (
    <form
      ref={formRef}
      className={styles.form}
      onChange={(e)=>{
        console.log("form change",e)
      }}
      onSubmit={onSubmit}
      autoComplete="off">
      <section className={styles.formBody}>
        <MediaFormBody />
      </section>
      <section className={styles.formNav}>
        <Button onClick={handleCancel}>
            Cancel
        </Button>
        <Button
          disabled={!state.valid}
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