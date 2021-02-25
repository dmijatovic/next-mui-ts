import {useRef, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

// import hotkeys from 'hotkeys-js'
import {useHotkeys} from 'react-hotkeys-hook'

const useStyles = makeStyles((theme)=>({
  focus:{
    '&:focus':{
      border: '2px dotted red',
      outline: 'none'
    }
  }
}));

let counter

export default function ScopingDemo() {
  const styles = useStyles()
  const scope1 = useRef()
  const scope2 = useRef()
  const [count1,setCount1]=useState({
    count:0
  })
  const [count2,setCount2]=useState({
    count:0
  })

  useHotkeys('ctrl+c',handleCtrlC)

  console.log("ScopingDemo...", count1, count2)

  function handleCtrlC(e){
    const {target} = e
    console.log("Ctrl+C pressed from element...", target)
    // console.log("scope1...", scope1.current)
    // console.log("scope2...", scope2.current)
    // debugger
    if (target.id==="scope1"){
      console.log("setCount1...count1...", count1)
      setCount1({
        count: count1.count++
      })
    }
    if (target.id==="scope2"){
      console.log("setCount2...count2...", count2)
      setCount2({
        count: count2.count++
      })
    }
  }

  return (
    <section>
      <section
        id="scope1"
        ref={scope1}
        tabIndex={1}
        className={styles.focus}>
        <h2>Scope 1</h2>
        <h3>{count1.count}</h3>
      </section>
      <section
        id="scope2"
        ref={scope2}
        tabIndex={2}
        className={styles.focus}
      >
        <h2>Scope 2</h2>
        <h3>{count2.count}</h3>
      </section>
    </section>
  )
}