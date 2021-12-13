import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString } from "./data";

const compare = (i,j) => {
  if (!i) return true
  if (!j) return true
  return i < j

}

const calculatePart1 = (input) => {
  let answer = [];

  input = input.map(e => e.split(""))
  input.unshift(Array(input[0].length).fill("9"))
  input.push(Array(input[0].length).fill("9"))
  input = input.map(e => ["9", ...e, "9"])

  input.forEach((e, row) => {
    e.forEach((point, i) => {
      if (input.length-1>row>0 && e.length>row>0 && e.length-1>i>0)
        if (compare(point,e[i-1]) && compare(point,e[i+1]) && compare(point,input[row-1][i]) && compare(point,input[row+1][i]))
          answer.push(Number(point) +1)
    })
  })

  return answer.flat().reduce((a, b) => a + b, 0)
};

function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
}

// function transpose(a) {
//   return Object.keys(a[0]).map(function(c) {
//       return a.map(function(r) { return r[c]; });
//   });
// }

const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

const calculatePart2 = (orig) => {
  let answer = [];

  let input = Array.from(orig)

  input = input.map(e => e.split(""))
  input.unshift(Array(input[0].length).fill("9"))
  input.push(Array(input[0].length).fill("9"))
  input = input.map(e => ["9", ...e, "9"])

  let coords = []

  input.forEach((e, row) => {
    e.forEach((point, i) => {
      // if (input.length-1>row>0 && e.length>row>0 && e.length-1>i>0) {
        if (compare(point,e[i-1]) && compare(point,e[i+1]) && compare(point,input[row-1][i]) && compare(point,input[row+1][i])){
          let left = e.lastIndexOf("9",i);
          let right = e.indexOf("9", i)

          coords.push({ coord: [i, row], val: point, left: left, right: right})

        }
      // }
    })
  })

  // coords.forEach(coord => {
  //   let basinMap = []
  //   input.forEach((e, i)=> basinMap.push([]))

  //   let i = coord.coord[0] + 1;
  //   let left = coord.left;
  //   let right = coord.right;

  //   // horizontals
  //   input.forEach((inputRow, j) => {
  //     for (let z=0; z<=left-1; z++) basinMap[j].push("-")
  //     for (let z=left; z<=right; z++) basinMap[j].push(input[j][z])
  //     for (let z=right+1; z<inputRow.length-1; z++) basinMap[j].push("-")
  //   })

  //   console.log(transpose(input))

  //   let vertical = transpose(basinMap);
  //   // console.log("basin ",basinMap)
  //   console.log("transposed basin",vertical)
  //   let v = []
  //   i = coord.coord[1] + 1;
  //   vertical.forEach((e, i)=> v.push([]))

  //   vertical.forEach((inputRow, j) => {
  //     // console.log(coord)
  //     // if (vertical.length-1>inputRow>0 && vertical.length>inputRow>0 && vertical.length-1>i>0) {
  //       console.log("i = ", i)
  //       let l = inputRow.lastIndexOf("9", i);
  //       let r = inputRow.indexOf("9", i)
  //       // console.log(l, r, inputRow)
  //       console.log(l,r,inputRow)
  //       for (let e=0; e<=l; e++) v[j].push("-")
  //       for (let e=l+1; e<=r-1; e++) v[j].push(vertical[j][e])
  //       for (let e=r; e<=inputRow.length; e++) v[j].push("-")
  //     // }
  //   })
    
  //   console.log("final = ", v)

  //   console.log(transpose(v))

  //   let a = v.flat().filter(n => n !== "-")

  //   answer.push(a.length)
  // })

  // let sorted = answer.sort((a,b) => b-a);

  // console.log(sorted)

  // console.log(sorted[0]*sorted[1]*sorted[2])




    let nines = []
    input.forEach((e, i)=> nines.push([]))

    input.forEach((row, j) => {
      row.forEach((item, i) => item === "9"? nines[j].push("9"): nines[j].push("-"))
    })


  console.log(nines)

  const getNeighbours = (arr, coords) => {
    let neighbours = [];
    coords.forEach(coord => {

      let x= coord[0];
      let y= coord[1];
      
      if (arr[y-1][x] === "-") neighbours.push([x, y-1])
      if (arr[y+1][x] === "-") neighbours.push([x, y+1])
      if (arr[y][x-1] === "-") neighbours.push([x-1, y])
      if (arr[y][x+1] === "-") neighbours.push([x+1, y])
    })

    return ({ neighbours: neighbours, count: neighbours.length})
  }

  console.log(nines)

  let fill = 55;
  let holeSizes = [];

  coords.forEach(({ coord }) => {
    fill++;
    // let coord = coords[2].coord
    let holeCoords = [coord]
    let holeSize = 1
    // let x= coord[0];
    // let y= coord[1];

    for (let m=0; m<10; m++) {

      let { neighbours, count} = getNeighbours(nines, holeCoords);

      holeSize += count

      // console.log(neighbours)
      
      holeCoords = [...neighbours, coord]
      holeCoords.forEach(([xx, yy]) => nines[yy][xx] = fill)
      
      // console.log(holeCoords)


    }
    
    holeSizes.push(nines.flat().filter(e => e === fill).length)
  })

  console.log(holeSizes.sort((a,b) => b - a))

  return holeSizes[0] * holeSizes[1] * holeSizes[2]
};


export const DayNine = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInput = e => e.split("\n")

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