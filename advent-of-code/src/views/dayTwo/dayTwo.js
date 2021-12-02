import { useState } from "react";
import { Container, Back, Cover } from "../day.styles";
import { HomeContainer } from "../home/home.styles";

export const DayTwo = () => { 
  const [input, setInput] = useState([]);
  const [val, setVal] = useState(0);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => setInput(e.split(" "))

  const modifyData = (data = input) => 
    data.reduce((accumulator, currentValue, currentIndex, array) => {
      if (currentIndex % 2 === 0) accumulator.push({ direction: currentValue.toLowerCase(), amount: Number(array[currentIndex+1])});
      return accumulator;
    }, []);

  const calculate = (position = { depth: 0, hor: 0 }) => {
    modifyData().forEach((currentValue) => {
      switch(currentValue.direction) {
        case "forward":
            position.hor += currentValue.amount;
          break;
          case "up":
            position.depth -= currentValue.amount;
          break;
          case "down":
            position.depth += currentValue.amount;
          break;
        default:
          break;
      }
    }, []);

    return (position.depth * position.hor)
  }
  
  const calculatePart2 = (position = { depth: 0, hor: 0}, aim = 0) => {
    modifyData().forEach((currentValue) => {
      switch(currentValue.direction) {
        case "forward":
            position.hor += currentValue.amount;
            position.depth += aim * currentValue.amount;
          break;
          case "up":
            aim -= currentValue.amount;
          break;
          case "down":
            aim += currentValue.amount;
          break;
        default:
          break;
      }
    }, []);

    return (position.depth * position.hor)
  }
  
  return (
    <HomeContainer>
      <Cover/>
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 2: Dive! ---</h1>
        <input onChange={(e) => handleInput(e.target.value)}/>
        <button onClick={() => setVal(calculate())}>calculate!</button>
        <h1>---------</h1>
        <h1>Part 1</h1>

        <h1>{`The answer is ${val}`}</h1>
        <h1>---------</h1>
        <h1>Part 2</h1>
        <button onClick={() => setPart2Val(calculatePart2())}>calculate!</button>
        <h1>{`The answer is ${part2Val}`}</h1>
      </Container>
    </HomeContainer>
  )
}