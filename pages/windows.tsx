import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import {createWindow} from 'utils/createWindow'

const useStyles = makeStyles((theme)=>({
root:{}
}))

export default function WindowsManagement(props){
  const [winCode, setWindow] = useState<Window>()
  const [channel, setChannel] = useState<BroadcastChannel>()
  const [action, setAction] = useState<{type:string,payload?:any}>()

  console.log("WindowsManagement.winCode:", winCode)
  console.log("WindowsManagement.channel", channel)
  console.log("WindowsManagement.action", action)

  useEffect(()=>{
    if (!channel){
      const bc = new BroadcastChannel("dome2.code")
      bc.onmessage = ({data}) =>{
        setAction(data)
      }
      setChannel(bc)
    }
  },[channel])

  useEffect(()=>{
    //listen for closing the coding window
    if (winCode){
      winCode.addEventListener("beforeunload",function(e){
        console.log("winCode.beforeunload...fired")
        setWindow(undefined)
      })
    }
  },[winCode])

  function sendMessage(action){
    if (channel){
      console.log("WindowsManagement.sendMessage...", action)
      channel.postMessage(action)
    }else{
      console.warn("WindowsManagement.sendMessage: Channel not avaliable! Cannot send message: ", action)
    }
  }

  function openItem(){
    if (winCode){
      winCode.focus()
    } else {
      const win = createWindow("/item/1234","code")
      setWindow(win)
    }
  }

  if (action){
    console.log("WindowsManagement.received action...", action)
    switch (action.type){
      case "CLOSE":
        winCode.close()
        break;
      case "PING":
        sendMessage({type:"PONG"})
        break;
      default:
        console.log("WindowsManagement.received action...TYPE NOT SUPPORTED!", action.type)
    }
    //clean action?!?
    setAction(undefined)
  }

  return(
    <section>
      <h1>Windows management</h1>
      <Button onClick={openItem}>Open</Button>
    </section>
  )
}