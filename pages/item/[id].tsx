import { useState,useEffect } from 'react'
import {useRouter} from 'next/router'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'

import {createWindow} from 'utils/createWindow'

const useStyles = makeStyles((theme)=>({
  root: { }
}));


export default function OpenItem() {
  const styles = useStyles();
  const [winArticle, setArticle] = useState<Window>()
  const [channel,setChannel] = useState<BroadcastChannel>()
  const [action, setAction] = useState<{type:string,payload?:any}>()
  const [id, setId] = useState()
  const router = useRouter()

  console.log("OpenItem.channel", channel)
  console.log("OpenItem.action", action)
  console.log("OpenItem.winArticle", winArticle)

  useEffect(()=>{
    if (!channel){
      console.log("OpenItem.createChannel")
      const bc = new BroadcastChannel("dome2.code")
      bc.onmessage = ({data})=>setAction(data)
      setChannel(bc)
    }
    const id = router.query['id']
    if (id) setId(id)
  },[channel])

  useEffect(()=>{
    //listen for closing the coding window
    if (winArticle){
      winArticle.addEventListener("beforeunload",function(e){
        console.log("winArticle.beforeunload...fired")
        setArticle(undefined)
      })
    }
  },[winArticle])


  function sendMessage(action){
    if (channel){
      console.log("OpenItem.sendMessage...", action)
      channel.postMessage(action)
    }else{
      console.warn("OpenItem.sendMessage...Channel not avaliable! Cannot send message: ", action)
    }
  }

  if (action){
    console.log("OpenItem.received action...", action)
  }

  useEffect(()=>{
    console.log("OpenItem.onLoad")
    return ()=>{
      console.log("OpenItem.onDestroy")
      closeArticle()
    }
  },[])

  function openArticle(){
    if (winArticle){
      winArticle.focus()
    } else {
      const win = createWindow(
        "https://www.banken.nl/nieuws/22650/rabobank-stelt-negatieve-rente-in-voor-spaartegoeden-boven-250000",
        "article")
      if (win) setArticle(win)
    }
  }

  function closeArticle(){
    if (winArticle) winArticle.close()
    setArticle(undefined)
  }

  function closeCode(){
    closeArticle()
    sendMessage({type:"CLOSE"})
  }

  return (
    <section>
      <h1>Item {router.query['id']}</h1>
      <Button onClick={()=>sendMessage({type:"PING"})}>Send message</Button>
      <Button onClick={openArticle}>Open article</Button>
      <Button onClick={closeArticle}>Close article</Button>
      <Button onClick={closeCode}>Close</Button>
      <section>
        {action ? <pre>{JSON.stringify(action,undefined,2)}</pre> :null}
      </section>
    </section>
  )
}