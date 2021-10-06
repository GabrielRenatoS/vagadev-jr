import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;  
`;

export const OuterRectangle = styled.div`
  position: absolute;
  width: 35vw;
  height: 30vh;
  left: 12.5vw;
  top: 8vh;

  background: #3EC6E0;
  border-radius: 5px;
`;

export const InnerRectangle = styled.div`
  position: absolute;  
  width: 35vw;
  height: 30vh;
  left: 12vw;
  top: 7vh;

  background: #084154;

  border: 2px solid #3EC6E0;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Indicator = styled.div`
  position: absolute;

  width: 1.5vw;
  height: 1.5vw;
  left: 15vw;
  top: 5.5vh;

  background: #3EC6E0;
  transform: rotate(135deg);

`;

export const ListContainer = styled.div`
  position: absolute;

  width: 35vw;
  height: 30vh;
  left: 13vw;
  top: 9vh;  
  display: flex;
  padding: 1rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  position: relative;
    
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-bottom: 1rem;
  color: #FFFFFF;

`;

export const Item = styled.span`  
  position: relative;

  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1rem;  
  margin-bottom: 1rem;
  color: #FFFFFF;
`;

