import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import AccordionCard from 'components/accordion/AccordionCard'
import CETAccordion from 'components/accordion/CETAccordion'

import CETData from 'components/accordion/__mocks__/CETTreeData'


const useStyles = makeStyles((theme)=>({
  codePage: {
    display:'flex',
    flexDirection:'column',
    width:'880px',
    margin:'auto'
  }
}));

export default function Code() {
  const styles = useStyles();
  return (
    <section className={styles.codePage}>
      <h1>CET tree</h1>
      {
        CETData.map(cet=>{
          return <CETAccordion
            key={cet.cetId}
            cetItem={cet}
          />
        })
      }

      {/* <h1>Code header</h1>
      <AccordionCard /> */}

    </section>
  )
}