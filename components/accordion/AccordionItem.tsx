import {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    accordion:{
      border: '1px solid lightgrey',
      boxShadow: 'none'
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
  }),
);

export interface AccordionConfig{
  type:"CET"|"CE"
  title:string,
  required:string,
  canEdit:boolean,
  data:any
}

export default function AccordionItem({config,onEdit,children}:{config:AccordionConfig,onEdit:Function,children:any}) {
  const styles = useStyles();
  const [expanded,setExpanded]=useState(true)
  const [editDisabled,setDisabled]=useState(false)
  const {title,required,canEdit, data} = config

  function toggleExpand(){
    setExpanded(!expanded)
    setDisabled(expanded)
  }

  return (
    <Accordion
      className={styles.accordion}
      expanded={expanded}
      onChange={toggleExpand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon id="expand-icon"/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        IconButtonProps={{
          edge:'start'
        }}
        className={styles.summary}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>Required: {required.toUpperCase()}</div>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        {children}
        {canEdit?
          <Fab color="primary"
            aria-label="edit"
            size="small"
            onClick={()=>onEdit(data)}
            className={styles.fab}>
            <EditIcon />
          </Fab>
          :null
        }
      </AccordionDetails>
    </Accordion>
  );
}
