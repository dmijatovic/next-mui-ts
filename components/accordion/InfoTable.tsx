import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  title:{
    alignSelf:'center',
    flex:1
  },
  table:{
    width:'100%',
    borderCollapse:'collapse',
  },
  tableRow:{
    padding:'0.5rem 0rem'
  }
}));

export interface TableRow{
  label:string,
  value:string
}

export default function InfoTable({tableData}:{tableData:TableRow[]}) {
  const styles = useStyles();

  function createTableRows(){
    const trHtml=[]

    tableData.forEach((row,pos)=>{
      trHtml.push(
        <tr key={pos}>
          <td className={styles.tableRow}>{row.label}</td>
          <td className={styles.tableRow}>{row.value}</td>
        </tr>
      )
    })

    return trHtml
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td style={{width:'20rem'}}></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {createTableRows()}
      </tbody>
    </table>
  )
}