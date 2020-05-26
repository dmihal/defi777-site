import React, { useState } from 'react';
import BaseCard from './BaseCard';
import CardFace from './CardFace';
import TokenWrapper from '../TokenWrapper';

interface WrapperCardProps {
  token: string;
  wrapper: string;
  corner: string;
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children, token, wrapper, corner }) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <BaseCard
      grow
      front={<CardFace corner={corner}>{children}</CardFace>}
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
