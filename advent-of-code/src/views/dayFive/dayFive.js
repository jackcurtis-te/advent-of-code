import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString, actual } from "./data";

const calculatePart1 = (input) => {
  let xMax = 0;

  const lines = input.map(line => {
    const xy = line.split(" -> ");
    const coord1 = xy[0].split(",")
    const coord2 = xy[1].split(",")
    xMax = coord1[0] > xMax? Number(coord1[0]): Number(xMax)
    xMax = coord1[1] > xMax? Number(coord1[1]): Number(xMax)

    xMax = coord2[0] > xMax? Number(coord2[0]): Number(xMax)
    xMax = coord2[1] > xMax? Number(coord2[1]): Number(xMax)

    return ({ x1: Number(coord1[0]), y1: Number(coord1[1]),  x2: Number(coord2[0]), y2: Number(coord2[1])})
  })


  let array = new Array(xMax + 1).fill(0);
  array = array.map(i => Array(xMax + 1).fill(0))

  lines.forEach(({x1, x2, y1, y2}) => {
    if ( x1===x2 || y1===y2) {
      if (x1 > x2) x2 = [x1, x1 = x2][0]
      if (y1 > y2) y2 = [y1, y1 = y2][0]

      for (let x = x1; x < x2+1; x++) {
        for (let y = y1; y < y2+1; y++) {
          array[y][x] = array[y][x]+1
        }
      }
    } 
  })

  let count = 0;
  array.forEach(arr => arr.forEach(e => { if (e > 1) count ++ }))

  return count
};

const calculatePart2 = (input) => {
  let xMax = 0;

  const lines = input.map(line => {
    const xy = line.split(" -> ");
    const coord1 = xy[0].split(",")
    const coord2 = xy[1].split(",")
    xMax = coord1[0] > xMax? Number(coord1[0]): Number(xMax)
    xMax = coord1[1] > xMax? Number(coord1[1]): Number(xMax)

    xMax = coord2[0] > xMax? Number(coord2[0]): Number(xMax)
    xMax = coord2[1] > xMax? Number(coord2[1]): Number(xMax)

    return ({ x1: Number(coord1[0]), y1: Number(coord1[1]),  x2: Number(coord2[0]), y2: Number(coord2[1])})
  })


  let array = new Array(xMax + 1).fill(0);
  array = array.map(i => Array(xMax + 1).fill(0))

  lines.forEach(({x1, x2, y1, y2}) => {
    if ( x1===x2 || y1===y2) {
      if (x1 > x2) x2 = [x1, x1 = x2][0]
      if (y1 > y2) y2 = [y1, y1 = y2][0]

      for (let x = x1; x < x2+1; x++) {
        for (let y = y1; y < y2+1; y++) {
          array[y][x] = array[y][x]+1
        }
      }
    } else {
      if (x1 > x2) {
        x2 = [x1, x1 = x2][0]
        y2 = [y1, y1 = y2][0]
      }

      let x = x1
      if (y2 > y1) {
        for (let y = y1; y < y2+1; y++) {
          array[y][x] = array[y][x]+1
          x++
        } 
      } else {
        for (let y = y1; y > y2-1; y--) {
          array[y][x] = array[y][x]+1
          x++
        } 
      }

    }
  })

  let count = 0;
  array.forEach(arr => arr.forEach(e => { if (e > 1) count ++ }))

  return count
};


export const DayFive = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => e.split("\n");

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
        <h1>--- Day 5: ???? ---</h1>
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