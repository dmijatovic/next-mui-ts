import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


import {ContentElementType} from './cetTypes'
import CEList from './CEList'

const useStyles = makeStyles((theme)=>({
  cetRoot: {
    padding: '1rem',
    marginBottom:'1rem',
    border: '1px solid grey',

  }
}));

export default function CETAccordion({cetItem}:{cetItem:ContentElementType}){
  const styles = useStyles();

  if (typeof cetItem == "undefined") return null

  console.log("CETAccordion.cetItem...", cetItem)
  
  function renderChildren(cets:ContentElementType[]){
    // debugger
    return cets.map(cet=>{
      return (<CETAccordion key={cet.cetId} cetItem={cet} />)
    })
  }

  debugger

  return (
    <section className={styles.cetRoot}>
      <h2>CET {cetItem.name}</h2>
      <p>{cetItem.instructions ? cetItem.instructions : "No inctuctions provided for this CET"}</p>
      <CEList ceList={cetItem.contentElementList} />
      {renderChildren(cetItem?.children)}
    </section>
  )
  // }

}