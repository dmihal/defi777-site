import styled from 'styled-components';

const CardFace = styled.div<{ corner?: string }>`
  margin: 20px;
  border: solid 2px #444444;
  border-radius: 4px;
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.corner && `
    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      background-image: url('${props.corner}');
      height: 16px;
      width: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:before {
      top: -8px;
      left: -20px;
    }

    &:after {
      bottom: -8px;
      right: -20px;
    }
  `}
`;

export default CardFace;
