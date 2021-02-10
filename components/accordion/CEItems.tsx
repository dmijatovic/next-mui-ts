import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme)=>({
  cetItem:{
    width: '100%'
  },
  ceItems:{
    width:'100%',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridGap:'1rem'
   }
}));

export interface CETConfig{
  id:number,
  instructions:string,
  ceLayout:string,
  ceItems:[{
    id: number,
    label:string,
    value:boolean
  }]
}

export default function CEItems({config,onAction}:{config:CETConfig,onAction:Function}) {
  const styles = useStyles();
  const {instructions,ceItems}=config

  function renderCEItems(){
    const ceHtml=[]
    ceItems.forEach(item=>{
      ceHtml.push(
        <FormControlLabel
          key={JSON.stringify(item)}
          control={
            <Checkbox
              checked={item.value}
              onChange={({target})=>{
                if (target.checked){
                  onAction({
                    type:"ADD_CE_ITEM",
                    payload: {
                      item,
                      cetId: config.id
                    }
                  })
                }else{
                  onAction({
                    type:"REMOVE_CE_ITEM",
                    payload: item
                  })
                }
              }}
              name={item.label}
              color="primary"
            />
          }
          label={item.label}
        />
      )
    })
    // debugger
    return ceHtml
  }

  return (
    <section className={styles.cetItem}>
      <div>{instructions}</div>
      <div className={styles.ceItems}>
        {renderCEItems()}
      </div>
    </section>
  )
}