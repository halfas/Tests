import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components-neutral/loader';

import {ScaleCard, ScaleIcon, ScaleButton, ScaleTextField} from '@telekom/scale-components-react-neutral';
import * as React from 'react';

export const Card: React.FC = (props) => {
  return (
    <div style={{width:"400px"}}>
      <ScaleCard>
        <img width='600px' src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg"/>
        <div>
          Test text
          <ScaleTextField/>
          <ScaleIcon name='Search'/>
        </div>
        <ScaleButton>Test</ScaleButton>
      </ScaleCard>
    </div>
  );
};

export default Card;