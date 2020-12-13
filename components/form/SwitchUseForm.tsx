
import Switch from '@material-ui/core/Switch'
import {Controller} from 'react-hook-form'

import useStyles from "./mediaFormStyles"

export default function SwitchUseForm({control,defaultValue}) {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.switchLabel}>Active</div>
      <Controller
        name="active"
        control={control}
        defaultValue={defaultValue}
        render={(
          { onChange, value, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <Switch
            color="primary"
            onChange={e => onChange(e.target.checked)}
            checked={value}
            inputRef={ref}
          />
        )}
      />
    </div>
  )
}