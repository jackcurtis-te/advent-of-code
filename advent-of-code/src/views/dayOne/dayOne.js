import { useState } from "react";
import { Container, Back, Cover } from "../day.styles";
import { HomeContainer } from "../home/home.styles";

export const DayOne = () => { 
  const [input, setInput] = useState([]);
  const [val, setVal] = useState(0);
  const [part2Val, setPart2Val] = useState(0);

  const calculate = (arr = input) => 
    arr.filter((cur, i) => Number(cur) > Number(arr[i-1])).length;
  
  const calculatePart2 = () => 
    calculate(input.map((cur, i) => Number(input[i-1]) + Number(cur) + Number(input[i+1])));
  
  return ( 
    <HomeContainer>
      <Cover/>
      <Container>
        <Back to="/">Back</Back>
        <h1>Day One</h1>
        <p>Sonar sweep</p>
        <input onChange={e => setInput(e.target.value.split(" "))}/>
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