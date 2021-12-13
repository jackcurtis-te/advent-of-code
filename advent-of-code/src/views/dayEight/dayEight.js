import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString } from "./data";

const calculatePart1 = (patterns, outputs) => {
  let answer;
  // 3 segments must be a 7, 4 segments must be a 4, 2 segments must be a 1

  let flatOutputs = outputs.flat().filter(e => e !== "");  
  let filteredLengths = flatOutputs.filter(l => l.length === 3 || l.length === 4 || l.length === 2 || l.length === 7)

  answer = filteredLengths.length
  return answer
};

const containsAll = (arr, target) => target.every(v => arr.includes(v));

const getDifference = (s, t) => {
  let arr1 = s.split("")
  let arr2 = t.split("")

  return arr1.filter(x => !arr2.includes(x));
};

const IncludesAll = (str, arr) => arr.map(a => str.includes(a)).reduce((curr, prev) => curr && prev)

const removeFromArray = (arr, item) => {
  let newArr = arr;
  let index = arr.indexOf(item)
  if (index > -1) {
    newArr.splice(index, 1);
  }
  return newArr
}

const calculatePart2 = (patterns, outputs) => {
  console.log("part 2", outputs)

  let answers = outputs.map((o, i) => {
    const p = patterns[i]
    let dict = {}
    let segments = {};

    let flatOutputs = [...o, ...p].flat().filter(e => e !== "");  

    // Step 1 - get numbers 1, 4, 7, 8 from lengths
    flatOutputs.forEach(e => {
      if (e.length === 3) {
        dict[7] = e;
      } else if (e.length === 2) {
        dict[1] = e;
      } else if (e.length === 4) {
        dict[4] = e;
      } else if (e.length === 7) {
        dict[8] = e;
      } 
    })
  
    // Step 2 - get segment 1
    segments[1] = getDifference(dict[7], dict[1])[0];

    // Step 3 - get number 3 using number 7
    flatOutputs.forEach(e => {
      if (IncludesAll(e, [...dict[7]]) && e.length === 5) dict[3] = e;
    });
    
    // Step 4 - get number 9 from number 3
    flatOutputs.forEach(e => {
      if (IncludesAll(e, [...dict[3]]) && e.length === 6) dict[9] = e;
    });
    
    // Get number 5 from number 9
    flatOutputs.forEach(e => {
      if (IncludesAll(dict[9], [...e]) && e !== dict[3] && e.length === 5) dict[5] = e;
    });

    console.log("number 5 added", dict)

    // Get number 6 using number 5
    flatOutputs.forEach(e => {
      if (IncludesAll(e, [...dict[5]]) && !Object.values(dict).includes(e) && e.length === 6) dict[6] = e;
    });

    // Get number 0 from only one with length 6 left
    flatOutputs.forEach(e => {
      if (!Object.values(dict).includes(e) && e.length === 6) dict[0] = e;
    });
    
    // Get number 2 from only one with length 5 left
    flatOutputs.forEach(e => {
      if (!Object.values(dict).includes(e) && e.length === 5) dict[2] = e;
    });

    let translation = Object.values(dict);

    let arr = o.map(e => {
      let letter;
      translation.forEach(g => { if (IncludesAll(g, [...e]) && g.length === e.length) letter = g})
      return translation.indexOf(letter).toString()
    }).join("")

  return arr
})

console.log(answers)

answers = answers.map(num => Number(num))

return (answers.reduce((a, b) => a + b, 0))
};


export const DayEight = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => e.split(" ").flat().filter(e => e !== "");

  const part1Handler = () => {
    let patterns = []
    let outputs = []

    inputString.split("|").forEach((v, j) => j%2===0? patterns.push(handleInput(v)): outputs.push(handleInput(v)));

    const i = handleInput(inputString)
    setPart1Val(calculatePart1(patterns, outputs))
  }

  const part2Handler = () => {
    let patterns = []
    let outputs = []
    console.log(inputString.split("\n"))

    inputString.split("\n").forEach(str => str.split("|").forEach((v, j) => j%2===0? patterns.push(handleInput(v)): outputs.push(handleInput(v))))
    console.log(patterns)
    console.log(outputs)

    // inputString.split("|").forEach((v, j) => j%2===0? patterns.push(handleInput(v)): outputs.push(handleInput(v)));
  
    const i = handleInput(inputString)
    setPart2Val(calculatePart2(patterns, outputs))
  }
  
  
  return (
    <HomeContainer>
      {/* <Cover/> */}
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 8: ??? ---</h1>
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