import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Door, HomeContainer, Calendar, DoorContainer, Backdoor } from "./home.styles";

export const Home = () => {
  const navigate = useNavigate();
  const doorRef = useRef(null);
  const [doorOpen, setDoorOpen] = useState(null);
  const [go, setGo] = useState(false);

  const doorClicked = day => {
    if (!((new Date().getDate()) < day)) {
      setDoorOpen(day);
      setTimeout(() => {
        setGo(day);
        setTimeout(() => navigate(`/day${day}`), 500);
      }, 500);
    }
  }

  return (
  <HomeContainer>
    <Calendar>
      <h1>Advent of code 2021</h1>
      <DoorContainer>
      { Array(25).fill(1).map((x, y) => {
        const day = x + y;
        
        return (
          <Backdoor 
            go={go === day}
            disabled={(new Date().getDate()) < day}
          >
            <Door
              key={day} 
              open={doorOpen === day}
              onClick={() => doorClicked(day)} 
              disabled={(new Date().getDate()) < day}
              ref={doorRef}
            >
              <p>{day}</p>
            </Door>
          </Backdoor>
        )
      })}
      </DoorContainer>
    </Calendar>
  </HomeContainer>
)}
