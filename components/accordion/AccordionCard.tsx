import {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

import AccordionItem from './AccordionItem'
import InfoTable from './InfoTable'
import CEItems from './CEItems'

import ArticleInfoData from './__mocks__/ArticleInfoDummyData'
import {Competitors,Issues} from './__mocks__/CETItemDummy'
import CETVDummy from "./__mocks__/CETVDummy"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    accordion:{
      border: '1px solid lightgrey',
      boxShadow: 'none'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    summary:{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.05)'
    },
  }),
);

export default function SimpleAccordion() {
  const styles = useStyles();
  const [expanded,setExpanded]=useState('article-info')

  function handleExpand(accId:string){
    debugger
    if (accId===expanded){
      setExpanded("")
    }else{
      setExpanded(accId)
    }
  }

  function handleEdit(accId:string){
    alert(`Edit ${accId}`)
  }

  return (
    <div className={styles.root}>
      <AccordionItem
        config={{
          type:"CET",
          title:"Article info",
          required:"yes",
          canEdit:true,
          data:{
            type:"EDIT",
            payload:"WHO KNOWS"
          }
        }}
        onEdit={(data)=>{
          console.log("onEdit...", data)
        }}>
        <InfoTable tableData={ArticleInfoData} />
      </AccordionItem>

      <AccordionItem
        config={{
          type:"CET",
          title:"Competitor",
          required:"yes",
          canEdit:false,
          data:{
            type:"Competitor",
            payload:"DATA HERE"
          }
        }}
        onEdit={(data)=>{
          console.log("onEdit...", data)
        }}>

          <CEItems
            config={Competitors}
            onAction={(action)=>{
              console.log("CETItem.action...", action)
            }}
            />

          <AccordionItem
            config={{
              type:"CE",
              title:"ABN Amro",
              required:"no",
              canEdit: true,
              data:{
                type:"CERTT",
                payload:"THIS IS ABN Amro"
              }
            }}
            onEdit={(data)=>{
              console.log("onEdit...", data)
            }}>
            <InfoTable tableData={CETVDummy} />

            <AccordionItem
              config={{
                type:"CET",
                title:"Issue",
                required:"no",
                canEdit: false,
                data: undefined
              }}
              onEdit={(data)=>{
                console.log("onEdit...", data)
              }}>
                <CEItems
                  config={Issues}
                  onAction={(action)=>{
                    console.log("CETItem.action...", action)
                  }}
                />

                <AccordionItem
                  config={{
                    type:"CE",
                    title:"Betalen",
                    required:"no",
                    canEdit: true,
                    data:{
                      type:"CERTT",
                      payload:"THIS IS ABN Amro"
                    }
                  }}
                  onEdit={(data)=>{
                    console.log("onEdit...", data)
                  }}>
                  <InfoTable tableData={CETVDummy} />

                </AccordionItem>
            </AccordionItem>

          </AccordionItem>

      </AccordionItem>

    </div>
  );
}
