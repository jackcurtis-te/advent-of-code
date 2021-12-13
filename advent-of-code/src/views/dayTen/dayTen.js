import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString, bracketMap, openingChars, part1PointsMap, part2PointsMap } from "./data";

const calculatePart1 = input => {
  let errors = [];
  input = input.map(line => line.trim());

  input.forEach((line, j) => {
    let openingCharsInLine = [];
    let errorInLine = false;
    line.split("").forEach(item => {
      if (!errorInLine) {
        openingCharsInLine.push(item);

        if (!openingChars.includes(item)) {
          if (item !== bracketMap[openingCharsInLine[openingCharsInLine.length-2]]) {
            errorInLine = true;
            errors.push({line: j, expected: bracketMap[openingCharsInLine[openingCharsInLine.length-2]], found: item});
          }
          let pos = openingCharsInLine.lastIndexOf(bracketMap[item]);
          openingCharsInLine.splice(pos, 1);
          openingCharsInLine.splice(openingCharsInLine.length -1, 1);
        }
      }
    })
  })
  return errors.map(e => part1PointsMap[e.found]).reduce((a,b) => a+b, 0)
};

const calculatePart2 = (input) => {
  let errors = []
  let goodLines = []

  input = input.map(line => line.trim())

  input.forEach((line, j) => {
    let openingCharsInLine = [];
    let errorInLine = false;
    line.split("").forEach((item, i) => {
      if (!errorInLine) {
        let expectedClosing;
        openingCharsInLine.push(item);

        if (openingChars.includes(item)) {
          expectedClosing = bracketMap[item]
        } else {
          if (item !== bracketMap[openingCharsInLine[openingCharsInLine.length-2]]) {
            errorInLine = true;
            errors.push({line: j, expected: bracketMap[openingCharsInLine[openingCharsInLine.length-2]], found: item})
          }
          let pos = openingCharsInLine.lastIndexOf(bracketMap[item]);
          openingCharsInLine.splice(pos, 1)
          openingCharsInLine.splice(openingCharsInLine.length -1, 1)
        }
      }      
    })
    if (!errorInLine) goodLines.push(line)
  })

  let remaining = goodLines;
  let scores = [];
  remaining.forEach(e => scores.push(0))

  remaining.forEach((line, j) => {
    let openingCharsInLine = [];

    line.split("").forEach((item, i) => {
      openingCharsInLine.push(item);

      if (!openingChars.includes(item)) {
        let pos = openingCharsInLine.lastIndexOf(bracketMap[item]);
        openingCharsInLine.splice(pos, 1)
        openingCharsInLine.splice(openingCharsInLine.length -1, 1)
      }
    })

    let endings = openingCharsInLine.reverse().map(e => bracketMap[e])
    let pointArray = endings.map(e => part2PointsMap[e])

    pointArray.forEach(p => {
      scores[j] = scores[j] * 5;
      scores[j] = scores[j] + p
    })
  })

  scores = scores.sort((a,b) => a-b)
  return scores[Math.round((scores.length - 1) / 2)];
};


export const DayTen = () => { 
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
        <h1>--- Day 10: ???? ---</h1>
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