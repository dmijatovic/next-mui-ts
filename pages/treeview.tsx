import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

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

const data: RenderTree[] = [{
  id: 'root',
  name: 'Content Element Types',
  children: [
    {
      id: '11',
      name: 'Issue',
      data: [{
        active:false,
        label:"Scores",
        type:"scores",
        options:[{
          value:1,
          label:"licht ongunstig"
        }]
      }]
    },{
      id: '12',
      name: 'Spokesperson',
    },{
      id: '13',
      name: 'Key message',
    },{
      id: '14',
      name: 'Reputationdriver',
      children: [
        {
          id: '21',
          name: 'Afdeling',
        },{
          id: '22',
          name: 'Sector',
        }
      ],
    },{
      id: '15',
      name: 'Stakeholder',
    },{
      id: '16',
      name: 'StakeholderCluster',
    },{
      id: '17',
      name: 'Gementes',
    },
  ],
}];

const useStyles = makeStyles({
  root: {
    margin: '2rem 1rem',
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  const renderTree = (nodes: RenderTree[]): any => {
    return nodes.map(node=>{
      return (
        <TreeItem key={node.id} nodeId={node.id} label={node.name}>
          {Array.isArray(node.children) ? renderTree(node.children) : null}
        </TreeItem>
      )
    })
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root1']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}
