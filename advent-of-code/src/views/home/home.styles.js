import styled from "styled-components"

export const HomeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 10px;
  flex-wrap: wrap;
  height: 100vh;
  overflow-y: scroll;

  align-items: center;
  justify-content: center;
`;

export const Door = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #8B0100;
  color: white;

  cursor: ${({ disabled }) => disabled? "not-allowed": "pointer"};
  height: 120px;
  width: 120px;
  border: 1px dashed black;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  padding: 20px;
  
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  p {
    padding: 0;
    margin: 0;
  }


  transform-origin: left;
  /*Speed of the Door animation*/
  transition: all 0.5s ease-in-out;
  transform: ${({ open, disabled }) => open && !disabled && "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg)"};
  overflow: visible;
`;

export const Calendar = styled.div`
  color: white;
  width: 50%;
  max-width: 700px;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #3A7A5E;
  padding: 50px;
  border-radius: 10px;
`

export const DoorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`

export const Backdoor = styled.div`
  position: relative;
  background-color: black;
  border-radius: 10px;

  transform: ${({ go, disabled }) => go  && !disabled && "scale(100)"};
  z-index: ${({ go, disabled }) => go  && !disabled && "99"};
  transition: all 0.5s ease-in-out;

`