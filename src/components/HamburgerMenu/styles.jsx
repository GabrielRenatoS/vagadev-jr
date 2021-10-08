import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  @media (max-width: 375px) {
    z-index: 1;
    top: -25px;
  }
`;

export const OuterRectangle = styled.div`
  position: absolute;
  width: 35vw;
  height: 30vh;
  left: 12.5vw;
  top: 8vh;

  background: #3EC6E0;
  border-radius: 5px;

  @media (max-width: 375px) {
    display: none;
  }
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

  @media (max-width: 375px) {    
    width: 100vw;
    height: 400vh;
    left: 0;
    top: 0;
    border: 0;  
  }
`;

export const Indicator = styled.div`
  position: absolute;

  width: 1.5vw;
  height: 1.5vw;
  left: 15vw;
  top: 5.5vh;

  background: #3EC6E0;
  transform: rotate(135deg);

  @media (max-width: 375px) {
    display: none;
  }
`;

export const ListContainer = styled.div`
  position: absolute;

  width: 35vw;
  height: 30vh;
  left: 13vw;
  top: 9vh;  
  display: flex;
  padding: 1rem;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  > hr {
    display: none;
  }

  @media (max-width: 375px) {
    margin-bottom: 20%;

    > hr {      
      position: relative;
      display: inline;
      max-width: 300px;
      width: 250px;
      height: 0px;
      left: -10%;
      
      border: 1px solid #062C38;
    }
  }
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
