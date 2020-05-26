import React from 'react';
import styled from 'styled-components';
import trip7 from './images/trip-7.svg';

interface IconWithTrip7Props {
  img: string;
  size?: number;
}

const Icon = styled.div<IconWithTrip7Props>`
  background-image: url('${props => props.img}');
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  background-position: center;
  background-repeat: no-repeat;

  &:after {
    content: '';
    background-image: url('${trip7}');
    width: 60%;
    display: block;
    background-repeat: no-repeat;
    background-position: 0 bottom;
    margin-right: -4px;
    margin-bottom: -4px;
  }
`;


const IconWithTrip7: React.FC<IconWithTrip7Props> = ({ img, size=64 }) => {
  return (
    <Icon size={size} img={img} />
  )
}

export default IconWithTrip7;
