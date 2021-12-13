import { useState } from "react";
import { Container, Back, Cover } from "../day.styles";
import { HomeContainer } from "../home/home.styles";

export const DayThree = () => { 
  const [input, setInput] = useState([]);
  const [part1Val, setPart1Val] = useState(0);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => setInput(e.split(" "));

  const getGama = (arr) => [...arr[0]].map((_, i) => {
    let count = 0;
    arr.forEach(entry => count += Number([...entry][i]));
    return count >= (arr.length/2);
  })

  const findMostCommon = arr => getGama(arr).map(e => Number(e));

  const calculatePart1 = () => {
    const gama = getGama(input);
    const gamaString  = gama.map(e => Number(e)).join("");
    const epsString = gama.map(e => !e).map(e => Number(e)).join("");
    return parseInt(gamaString, 2) * parseInt(epsString, 2);
  }
  
  const calculatePart2 = () => {
    const vals = getGama(input).map(e => Number(e));

    let oxy = input;
    vals.forEach((_, i) => oxy = (oxy.length !== 1)? 
      oxy.map((e) => Number(e[i]) === findMostCommon(oxy)[i]? e: null).filter(e => e!= null): 
      oxy
    );

    let co = input;
    const newVals = vals.map(e => !e).map(e => Number(e))
    newVals.forEach((_, i) => co = (co.length !== 1)? 
      co.map((e) => Number(e[i]) === findMostCommon(co)[i]? null: e).filter(e => e!= null): 
      co
    );

    return parseInt(oxy, 2) * parseInt(co, 2)
  }
  
  return (
    <HomeContainer>
      <Cover/>
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 3: Binary Diagnostic ---</h1>
        <input onChange={(e) => handleInput(e.target.value)}/>
        <button onClick={() => setPart1Val(calculatePart1())}>calculate!</button>
        <h1>---------</h1>
        <h1>Part 1</h1>

        <h1>{`The answer is ${part1Val}`}</h1>
        <h1>---------</h1>
        <h1>Part 2</h1>
        <button onClick={() => setPart2Val(calculatePart2())}>calculate!</button>
        <h1>{`The answer is ${part2Val}`}</h1>
      </Container>
    </HomeContainer>
  )
}