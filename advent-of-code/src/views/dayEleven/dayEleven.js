import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString } from "./data";

const padArray = (input) => {
  let arr = input
  arr = arr.map(row => [11, ...row, 11])
  arr.push(Array(arr.length).fill(11))
  arr.unshift(Array(arr.length-1).fill(11))
  return arr
}

const incremementSurrounding = (arr,i,j) => {      
  let paddedArr = padArray(arr)
  i++;
  j++;

  if (paddedArr[j][i] !== 0)  paddedArr[j][i] = 0
  if (paddedArr[j-1][i] !== 0)  paddedArr[j-1][i] += 1 
  if (paddedArr[j+1][i] !== 0)  paddedArr[j+1][i] += 1 
  if (paddedArr[j][i-1] !== 0)  paddedArr[j][i-1]+= 1 
  if (paddedArr[j][i+1] !== 0)  paddedArr[j][i+1]  += 1 

  if (paddedArr[j+1][i+1] !== 0)  paddedArr[j+1][i+1] += 1
  if (paddedArr[j-1][i+1] !== 0)  paddedArr[j-1][i+1]+= 1 
  if (paddedArr[j+1][i-1] !== 0)  paddedArr[j+1][i-1] += 1 
  if (paddedArr[j-1][i-1] !== 0)  paddedArr[j-1][i-1] += 1 

  let unpad = []
  paddedArr.forEach(row => unpad.push([]))

  paddedArr.forEach((row, j) => row.forEach((energy, i) => {
    if (j !== 0 && i !== 0 && j !== paddedArr.length-1 &&  i !== row.length-1 )
      unpad[j].push(energy)
  }))

  let final = unpad.slice(1, -1);
  return final
}

const calculatePart1 = (input) => {
  let flashCounter = 0

  input = input.map((row) => row.map(energy => Number(energy)));
 
  const doThing = (input) => {
    let containsFlash = true;
  
    // take a step and increment all the energies
    let incremented = input.map((row) => row.map(energy => energy + 1));

    while(containsFlash) {
      let flashed = []

      incremented.forEach((row, j) => row.forEach((item, i) =>  {
        if (item > 9) flashed.push([i, j])
      }))

      // for each flash increment the surrounding ones
      flashed.forEach((coords) => incremented = incremementSurrounding(incremented, ...coords))

      // change any 10s to 9s
      flashed = []

      // checks for any flashed
      incremented.forEach((row, j) => row.forEach((item, i) =>  {
        if (item > 9) flashed.push([i, j])
      }))
      
      // add number that flashed
      flashCounter += flashed.length;
            
      // chceks to see if there are still any that flashed
      containsFlash = incremented.flat().some(a => a > 9)
    }
    incremented = incremented.map((row, j) => row.map((item, i) =>  item > 9? 0: item))

    return incremented
  }

  let arr = input;
  let flash = 0

  for(let a =1; a <= 100; a++ ) {
    arr = doThing(arr)
    flash += arr.flat().filter(e => e === 0).length
    console.log(flash)
  }

  return flash
};

const calculatePart2 = (input) => {
  let flashCounter = 0

  input = input.map((row) => row.map(energy => Number(energy)));
 
  const doThing = (input) => {
    let containsFlash = true;
  
    // take a step and increment all the energies
    let incremented = input.map((row) => row.map(energy => energy + 1));

    while(containsFlash) {
      let flashed = []

      incremented.forEach((row, j) => row.forEach((item, i) =>  {
        if (item > 9) flashed.push([i, j])
      }))

      // for each flash increment the surrounding ones
      flashed.forEach((coords) => incremented = incremementSurrounding(incremented, ...coords))

      // change any 10s to 9s
      flashed = []

      // checks for any flashed
      incremented.forEach((row, j) => row.forEach((item, i) =>  {
        if (item > 9) flashed.push([i, j])
      }))
      
      // add number that flashed
      flashCounter += flashed.length;
            
      // chceks to see if there are still any that flashed
      containsFlash = incremented.flat().some(a => a > 9)
    }
    incremented = incremented.map((row, j) => row.map((item, i) =>  item > 9? 0: item))

    return incremented
  }

  let arr = input;
  let flash
  let count = 0;

  while(flash !== arr.flat().length) {
    count++;
    arr = doThing(arr)
    flash = arr.flat().filter(e => e === 0).length
    if (flash === arr.flat().length) console.log("DONE ", count)
  }

  return count
};


export const DayEleven = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => e.split("\n").map(e => e.split(""));

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
        <h1>--- Day 11: ??? ---</h1>
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