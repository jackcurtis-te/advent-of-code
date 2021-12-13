import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover, StyledP } from "../day.styles";
import { inputString, inputString2 } from "./data";

const calculatePart1 = (input, input2) => {
  let xs = input.map(e => e[1])
  let ys = input.map(e => e[0])

  let sizex = Math.max(...xs.flat()) + 1;
  let sizey = Math.max(...ys.flat()) + 1;
  let paper = Array.from(Array(sizex), () => new Array(sizey).fill("."))

  input.forEach(coord =>  paper[coord[1]][coord[0]] = "#");

  let newCoords = []

  let line = input2[0]
  newCoords = []
  let lineDirection = line[0]
  let lineNum = line[1]

  sizey = lineDirection === "y"? lineNum: paper.length
  sizex = lineDirection === "x"? lineNum: paper[0].length

  let folded = Array.from(Array(sizey), () => new Array(sizex).fill("."))

  input.forEach(coord => {
    let newCoord;
    if (lineDirection === "y") {
      if (coord[1] > lineNum) newCoord = [coord[0], lineNum - (coord[1] - lineNum)]
      else newCoord = coord
    } else {
      if (coord[0] > lineNum) newCoord = [lineNum - (coord[0] - lineNum), coord[1]]
      else newCoord = coord
    }
    newCoords.push(newCoord);
    folded[newCoord[1]][newCoord[0]] = "#"
  })
  
  paper = folded;
  input = newCoords

  return paper.flat().filter(e => e === "#").length
};

const calculatePart2 = (input, input2) => {
  let xs = input.map(e => e[1])
  let ys = input.map(e => e[0])

  let sizex = Math.max(...xs.flat()) + 1;
  let sizey = Math.max(...ys.flat()) + 1;
  let paper = Array.from(Array(sizex), () => new Array(sizey).fill("."))

  input.forEach(coord =>  paper[coord[1]][coord[0]] = "#");

  let newCoords = []

  input2.forEach(line => {
    newCoords = []
    let lineDirection = line[0]
    let lineNum = line[1]

    sizey = lineDirection === "y"? lineNum: paper.length
    sizex = lineDirection === "x"? lineNum: paper[0].length
  
    let folded = Array.from(Array(sizey), () => new Array(sizex).fill("."))

    input.forEach(coord => {
      let newCoord;
      if (lineDirection === "y") {
        if (coord[1] > lineNum) newCoord = [coord[0], lineNum - (coord[1] - lineNum)]
        else newCoord = coord
      } else {
        if (coord[0] > lineNum) newCoord = [lineNum - (coord[0] - lineNum), coord[1]]
        else newCoord = coord
      }
      newCoords.push(newCoord);

      folded[newCoord[1]][newCoord[0]] = "#"
    })
    
    paper = folded;
    input = newCoords
  })

  console.log(paper)
  return paper
};


export const DayThirteen = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState("pending");
  const [part2Val, setPart2Val] = useState([]);

  const handleInput = e => e.split("\n").map(e => e.split(",")).map(c => c.map(e => Number(e)))

  const handleInput2 = e => e.split("\n").map(e => e.split("fold along ")).map(c => c.filter(e => e!== "")).map(c => c[0].split("=")).map(e => [e[0], Number(e[1])])

  const part1Handler = () => {
    const i = handleInput(inputString)
    const j = handleInput2(inputString2)
    setPart1Val(calculatePart1(i, j))
  }

  const part2Handler = () => {
    const i = handleInput(inputString)
    const j = handleInput2(inputString2)
    setPart2Val(calculatePart2(i, j))
  }
  
  return (
    <HomeContainer>
      <Cover/>
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 13: Transparent origami ---</h1>
        <h1>---------</h1>
        <h1>Part 1</h1>
        <button data-test="part1Btn" onClick={() => part1Handler()}>calculate!</button>
        <h1>{`The answer is ${part1Val}`}</h1>
        <h1>---------</h1>
        <h1>Part 2</h1>
        <button data-test="part2Btn" onClick={() => part2Handler()}>calculate!</button>
        <p>Squint!</p>
        <StyledP>
          {part2Val.map(row => `${row.map(e => e === "."? "_": "#")}\n`)}
        </StyledP>
      </Container>
    </HomeContainer>
  )
}