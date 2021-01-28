import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';

const useStyles = makeStyles((theme)=>({
  section: {
    padding:'2rem'
   }
}));

export default function fnname() {
  const styles = useStyles();
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <section className={styles.section}>
      <div>
        <h4>Imported</h4>
        <DateRangePicker
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
          format="dd-MM-yyyy"
          rangeDivider=" - to - "
          onChange={onChange}
          value={value}
        />
      </div>
      <div>
        <h4>Coded</h4>
        <DateRangePicker
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
          format="dd-MM-yyyy"
          rangeDivider=" - to - "
          onChange={onChange}
          value={value}
        />
      </div>
      <div>
        <h4>Published</h4>
        <DateRangePicker
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
          format="dd-MM-yyyy"
          rangeDivider=" - to - "
          onChange={onChange}
          value={value}
        />
      </div>
      <div>
        <pre>
          Date range: {JSON.stringify(value)}
        </pre>
      </div>
    </section>

  )
}