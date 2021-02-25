import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Fab from '@material-ui/core/Fab'

import {ContentElementType} from './cetTypes'
import CEList from './CEList'

import useStyles from './CETAccordionStyles'

// const useStyles = makeStyles((theme)=>({
//   cetRoot: {
//     padding: '1rem',
//     marginBottom:'1rem',
//     border: '1px solid grey',

//   }
// }));

export default function CETAccordion({cetItem}:{cetItem:ContentElementType}){
  const styles = useStyles()
  const [expanded,setExpanded]=useState(true)
  const [editDisabled,setDisabled]=useState(false)
  const {name,cetMandatory,instructions} = cetItem

  if (typeof cetItem == "undefined") return null

  console.log("CETAccordion.cetItem...", cetItem)

  function toggleExpand(){
    setExpanded(!expanded)
    setDisabled(expanded)
  }

  function renderChildren(cets:ContentElementType[]){
    // debugger
    return cets.map(cet=>{
      return (<CETAccordion key={cet.cetId} cetItem={cet} />)
    })
  }

  function onEdit(item){
    console.log("onEdit...clicked...item", cetItem)
  }

  // debugger

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
        <div className={styles.title}>{name}</div>
        <div className={styles.info}>Required: {cetMandatory ? "YES":"NO"}</div>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>

        <CEList ceList={cetItem.contentElementList} />

        {renderChildren(cetItem?.children)}

        {expanded ?
          <Fab color="primary"
            aria-label="edit"
            size="small"
            onClick={()=>onEdit(cetItem)}
            className={styles.fab}>
            <EditIcon />
          </Fab>
          : null
        }
        {/* {canEdit?
          <Fab color="primary"
            aria-label="edit"
            size="small"
            onClick={()=>onEdit(data)}
            className={styles.fab}>
            <EditIcon />
          </Fab>
          :null
        } */}
      </AccordionDetails>
    </Accordion>
  )

  return (
    <section className={styles.cetRoot}>
      <h2>CET {name}</h2>
      <p>{instructions ? instructions : "No inctuctions provided for this CET"}</p>
      <CEList ceList={cetItem.contentElementList} />
      {renderChildren(cetItem?.children)}
    </section>
  )
  // }

}