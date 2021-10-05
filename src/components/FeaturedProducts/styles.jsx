import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

export const Title = styled.h3`
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  left: 10%;  
  
  color: #084154;
`;

export const List = styled.div`
  display: inline-flex;
  margin-top: 10%;

  > div {    
    height: 40vh;
  }
`;