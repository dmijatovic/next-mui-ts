import {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    subheader:{
      display:"flex",
      justifyContent:"space-between"
    },
    nested: {
      paddingLeft: theme.spacing(3),
    }
  }),
);


export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = useState(0);
  const [cet, setCet] = useState({});

  const handleClick = (level) => {
    if (open===level || (open > level)) {
      setOpen(level-1)
    } else{
      setOpen(level);
    }
  };

  const addElement=(level:number)=>{
    console.log("Add element...l...", level)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
          Content Element Types
          <Button onClick={()=>{addElement(0)}}>Add</Button>
        </ListSubheader>
      }
      className={classes.root}
    >

      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={()=>handleClick(1)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open > 0 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open > 0} timeout="auto" unmountOnExit className={classes.nested}>
        <List component="div" disablePadding>
          <ListItem button onClick={()=>handleClick(2)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            {open > 1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open>1} timeout="auto" unmountOnExit className={classes.nested}>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Level 2 item 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Level 2 item 2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Level 2 item 3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Level 1 item 2" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Level1 item 3" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
