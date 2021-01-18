import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [select, setSelect] = React.useState<string | null>('left');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  function handleSelection (event: React.MouseEvent<HTMLElement>, value: string | null){
    setSelect(value)
  }

  function getSelection(){
    switch(select){
      case 'left':
        return (
          <section style={{textAlign:'left'}}>
            <h3>You want this ti be aligned left</h3>
          </section>
        )
      case 'right':
        return (
          <section style={{textAlign:'right'}}>
            <h3>You want this ti be aligned right</h3>
          </section>
        )
      case 'center':
        return (
          <section style={{textAlign:'center'}}>
            <h3>You want this ti be aligned center</h3>
          </section>
        )
      case 'justify':
        return (
          <section style={{textAlign:'justify'}}>
            <h3>You want this ti be aligned justified</h3>
          </section>
        )
    }
  }


  return (
    <section style={{"padding":'3rem'}}>
      <h2>Toggle icons</h2>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <h2>Toggle labels</h2>
      <ToggleButtonGroup
        value={select}
        exclusive
        onChange={handleSelection}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          LEFT
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          CENTER
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          RIGHT
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified">
          JUSTIFY
        </ToggleButton>
      </ToggleButtonGroup>
      {getSelection()}
    </section>
  );
}