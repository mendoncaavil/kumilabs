import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function MobileBar() {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className='mobile-drawer'
        style={{display: "none"}}
      >
        <ToggleButton value="Produce">Produce</ToggleButton>
        <ToggleButton value="Prepared foods">Prepared foods</ToggleButton>
        <ToggleButton value="Canned food & Soups">Canned food & Soups</ToggleButton>
        <ToggleButton value="Frozen">Frozen</ToggleButton>
        <ToggleButton value="Meat & Seafood">Meat & Seafood</ToggleButton>
        <ToggleButton value="Bakery">Bakery</ToggleButton>
      </ToggleButtonGroup>
    );
  }

export default MobileBar