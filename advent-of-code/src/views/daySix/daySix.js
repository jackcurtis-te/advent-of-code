import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString } from "./data";

const calculatePart1 = (input) => {
  let answer;

  console.log(input)

  let array = input.map(e => Number(e));

  let length = array.length

  const loop = (arr) => {
    let a = [];
    let zeroCount = 0
    arr.forEach(e => {
      if (!e) {
        a.push(6);
        zeroCount++
      }
      else a.push(e - 1)
    })
    a.push(...Array(zeroCount).fill(8))

    return a
  }
  
  for (let y = 0; y < 80; y++) {
    array = loop(array);

  }

  return array.length
};

const calculatePart2 = (input) => {
  let answer;

  let array = input.map(e => Number(e));

  let length = array.length

  let obj = {8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0};

  array.forEach(num => obj[num] ++)

  for (let y = 0; y < 256; y++) {
    let newObj = {}    

    newObj[8] = obj[0];
    newObj[7] = obj[8];
    newObj[6] = obj[7] + obj[0];
    newObj[5] = obj[6];
    newObj[4] = obj[5];
    newObj[3] = obj[4];
    newObj[2] = obj[3];
    newObj[1] = obj[2];
    newObj[0] = obj[1];

    obj = newObj


    let sum = 0;
    sum = Object.values(newObj).reduce((a, b) => a + b, 0);
    answer = sum
  }


  return answer
};


export const DaySix = () => { 
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
        <h1>--- Day 6: Lanternfish ---</h1>
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