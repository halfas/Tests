import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from '@mui/material'
import React, { useState } from 'react';

export const TextShowerMui: React.FC = (props) => {
  const [isShown, setShown] = useState(true);
  
  return (
    <div>
      <FormControlLabel control={<Checkbox checked={isShown} aria-label="kappa mui"/>} label="test" onChange={(event:any) => setShown(event.target.checked)}/>
      {isShown&& <div aria-label="test mui div">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>}
    </div>
  );
};

export default TextShowerMui;