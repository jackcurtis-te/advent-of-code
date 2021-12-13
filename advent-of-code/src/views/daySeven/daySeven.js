import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString } from "./data";

const diff = (a, b) => {
  return (a > b) ? (a - b) : (b - a);
}

const diffp2 = (a, b) => {
  const diffy = (a > b) ? (a - b) : (b - a);
  let counter = 0;
  let step = 1;
  // somethings up
  for (let p=0; p<=diffy; p++) {
    counter += step;
    step++
  }
  return (a > b) ? (a - b) : (b - a);
}

const calculatePart1 = (input) => {
  let answer = 999999999;

  const limit = Math.max(...input)

  for (let p = 0; p <= limit; p++) {
    const distance = input.map(e => diff(e, p)).reduce((a, b) => a + b, 0);
    answer = distance < answer? distance: answer;
  }
  return answer
};

const calculatePart2 = (input) => {
  let answer = 999999999;

  const limit = Math.max(...input)

  for (let p = 0; p <= limit; p++) {
    const distance = input.map(e => diffp2(e, p)).reduce((a, b) => a + b, 0);
    answer = distance < answer? distance: answer;
  }
  return answer
};


export const DaySeven = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => e.split(",");

  const part1Handler = () => {
    const i = handleInput(inputString)
    setPart1Val(calculatePart1(i))
  }

  const part2Handler = () => {
    const i = handleInput(inputString)
    setPart2Val(calculatePart2(i))
  }
  
  return (
    <HomeContainer>
      {/* <Cover/> */}
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 7: ???? ---</h1>
        <p>Called</p><input onChange={(e) => handleInput(e.target.value)}/>
        <button data-test="part1Btn" onClick={() => part1Handler()}>calculate!</button>
        <h1>---------</h1>
        <h1>Part 1</h1>

        <h1>{`The answer is ${part1Val}`}</h1>
        <h1>---------</h1>
        <h1>Part 2</h1>
        <button data-test="part2Btn" onClick={() => part2Handler()}>calculate!</button>
        <h1>{`The answer is ${part2Val}`}</h1>
      </Container>
    </HomeContainer>
  )
}