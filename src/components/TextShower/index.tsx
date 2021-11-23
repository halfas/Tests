import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import {ScaleCheckbox} from '@telekom/scale-components-react-neutral';
import React, { useState } from 'react';

export const TextShower: React.FC = (props) => {
  const [isShown, setShown] = useState(true);
  
  return (
    <div>
      <ScaleCheckbox onScaleChange={(data:any) => setShown(data.detail.checked)} aria-label="kappa" checked={isShown} label='test' />
      {isShown&& <div aria-label="test div">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>}
    </div>
  );
};

export default TextShower;
// jest.mock('../TextShower', () => TextShower);