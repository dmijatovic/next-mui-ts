import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


import CEItems from './CEItems'
import {ContentElementList,ContentElementListItem} from './cetTypes'

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function CEList({ceList}:{ceList:ContentElementList}) {
  const styles = useStyles();

  if (ceList.allowAddingCE===true){
    return (
      <section>
        <h4>Autocomplete</h4>
        <input type="text"/>
      </section>
    )
  }else{
    return <pre>{JSON.stringify(ceList,null,2)}</pre>
  }

}