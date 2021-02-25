import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import BasicDemo from 'components/hotkeys/BasicDemo'
import ScopingDemo from 'components/hotkeys/ScopingDemo'

const useStyles = makeStyles((theme)=>({
  root: { }
}));

export default function HotkeysPage() {
  const styles = useStyles();
  return (
    <section>
      <h2>Hotkeys page</h2>
      <section>
        <BasicDemo />
      </section>
      <section>
        <BasicDemo />
      </section>
      <section>
        <ScopingDemo />
      </section>
    </section>
  )
}