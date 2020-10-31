import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import {Typography, IconButton, Button} from '@material-ui/core'
import {Add,Edit,Delete} from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import ToggleButton from "./ToggleButton"

interface ElementContent{
  active:boolean,
  label:string,
  type:string,
  options:[{
    value: number,
    label: string
  }]
}

interface RenderTree {
  id: string;
  name: string;
  data?: ElementContent[],
  children?: RenderTree[];
}

const useStyles = makeStyles({
  root: {
    margin: '2rem 1rem',
    minHeight: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  treeItem:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});

export default function CetTree({items, nav}:{items:RenderTree[], nav:any}) {
  const styles = useStyles()
  const [expanded, setExpanded] = useState<string[]>([])

  function handleItemAction(action){
    console.log("HandleItemAction: ", action)
    // const {payload:node} = action
    if (action.type==="Toggle"){
      let collection=[]
      if (expanded.includes(action.payload)){
        collection = expanded.filter(item=>item!==action.payload)
      }else{
        collection=[
          ...expanded,
          action.payload
        ]
      }
      setExpanded(collection)
    }
  }


  const getTreeItemContent=(node)=>{
    const {name, children} = node
    return (
      <div className={styles.treeItem}>
        <ToggleButton
          node={node}
          handleItemAction={handleItemAction}
          />
        <nav>
          <IconButton
            size="medium"
            onClick={()=>handleItemAction({
              type:"Add",
              payload: node
            })}>
            <Add/>
          </IconButton>
          <IconButton
            size="medium"
            onClick={()=>handleItemAction({
              type:"Edit",
              payload: node
            })}>
            <Edit/>
          </IconButton>
          <IconButton
            size="medium"
            onClick={()=>handleItemAction({
              type:"Delete",
              payload: node
            })}>
            <Delete/>
          </IconButton>
        </nav>
      </div>
    )
  }

  const renderTree = (nodes: RenderTree[]): any => {
    return nodes.map(node=>{
      return (
        <TreeItem
          key={node.id}
          nodeId={node.id}
          label={getTreeItemContent(node)}
          onLabelClick={(e)=>{
            e.preventDefault()
          }}
        >
          {Array.isArray(node.children) ? renderTree(node.children) : null}
        </TreeItem>
      )
    })
  }

  return (
    <TreeView
      className={styles.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root1']}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
    >
      {renderTree(items)}
    </TreeView>
  );
}
