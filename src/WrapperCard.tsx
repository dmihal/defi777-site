import React, { useState } from 'react';
import BaseCard from './card/BaseCard';
import TokenWrapper from './TokenWrapper';

interface WrapperCardProps {
  token: string;
  wrapper: string;
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children, token, wrapper }) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <BaseCard
      grow
      front={children}
      back={
        <div
          onClick={(e: any) => e.stopPropagation()}
          onMouseEnter={() => setMouseIn(true)}
          onMouseLeave={() => setMouseIn(false)}
        >
          <TokenWrapper token={token} wrapper={wrapper} />
        </div>
      }
      hoverDisabled={mouseIn}
    />
  );
}

export default WrapperCard;
