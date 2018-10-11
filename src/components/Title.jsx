import styled from 'react-emotion';

const Title = styled.p`
  font-style: italic;
  font-size: 1.4444rem;
  position: relative;
  &:before {
    content: '';
    width: 3rem;
    height: 1px;
    background-color: ${props => props.theme.colors.grey};
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -80px;
  }
`;

export default Title;
