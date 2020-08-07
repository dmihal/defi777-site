import React from 'react';
import styled from 'styled-components';

const Chip = styled.div`
  margin: 1em;
  position: relative;
  display: inline-flex;
  width: 151px;
  height: 151px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5), 0 0 3px 0 rgba(0, 0, 0, 0.4) inset;
  border-radius: 50%;
  background-size: 151px 151px;
  background-position: center center;

  align-items: center;
  justify-content: center;

  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #000099 0, #000099 97.4304px, #fff 97.4304px, #fff 113.4304px, #000099 113.4304px, #000099 151px);

  &:before {
    position: absolute;
    content: "";
    z-index: 1;
    width: 117px;
    height: 117px;
    border-radius: 50%;
    top: 9px;
    left: 9px;
    background-size: 151px 151px;
    background-position: center center;

    border: 8px solid #000099;
    background-image: linear-gradient(0deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(120deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(150deg, #00016C 0, #00016C 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #00016C 110.7104px, #00016C 151px);
  }
  &:after {
    z-index: 2;
    position: absolute;
    text-align: center;
    font: bold 50px/111px Arial;
    white-space: pre;
    width: 111px;
    height: 111px;
    border-radius: 50%;
    top: 20px;
    left: 20px;

    content: "";
    background: #000099;
    color: #00016C;
  }
`;

const PokerChip: React.FC = ({ children }) => {
  return (
    <Chip>{children}</Chip>
  )
}

export default PokerChip;