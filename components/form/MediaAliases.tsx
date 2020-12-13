import Chip from '@material-ui/core/Chip';
import useStyles from "./mediaFormStyles"

export default function MediaAliases({aliasList,onDelete}) {
  const styles = useStyles();

  function getMediumAliases(aliases){
    return aliases.map(alias=>{
      return (
        <Chip
          key={alias.id}
          label={alias.label}
          onDelete={()=>onDelete(alias.id)}
          className={styles.chip}
          />
      )
    })
  }

  return (
    <section>
      <div className={styles.aliasLabel}>Feed alias</div>
      <div className={styles.aliasSection}>{getMediumAliases(aliasList)}</div>
    </section>
  )
}