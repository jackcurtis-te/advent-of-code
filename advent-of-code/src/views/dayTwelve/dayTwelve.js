import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";
import { inputString, actual } from "./data";

function Node(val){
  this.val = val;
  this.children = [];
}

Node.prototype.add = function(N) {
  if (!this.children.includes(N)) this.children.push(N);
}

Node.prototype.isSmall = function() {
  return this.val == this.val.toLowerCase()
}


const createGraph = (input) => {
  let nodes = {};

  // This gets all the nodes and puts them in an object
  input.flat().forEach(cave => nodes[cave] = new Node(cave));

  // Adds all the children by going forward
  input.forEach((row, j) => row.forEach((cave, i) => {
    if (i+1 < row.length) nodes[cave].add(input[j][i+1]);
  }));

  // Adds all the children by going backwards
  input.forEach((row, j) => row.reverse().forEach((cave, i) => {
    if (i+1 < row.length && cave !== "end") nodes[cave].add(input[j][i+1]);
  }));

  return nodes
}

function countInArray(array, what) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === what) {
          count++;
      }
  }
  return count;
}

const isDouble = (arr) => {
  let isDouble = 0;
  arr.forEach(e => {
    let count = countInArray(arr, e);
    if (e == e.toLowerCase() && count === 3) isDouble++
  })
  return isDouble
}

const isDoubleTrue = (arr) => {
  let isDouble = 0;
  arr.forEach(e => {
    let count = countInArray(arr, e);
    if (e == e.toLowerCase() && count === 2) isDouble++
  })
  return isDouble/2
}


const calculatePart1 = (input) => {
  let validPaths = [];

  // Create the graph of nodes
  const nodes = createGraph(input)

  console.log(nodes)

  // Start with start and go until end
  let rootNode = nodes["start"];

  function clone(A) {
    return JSON.parse(JSON.stringify(A));
  }

  function traverse(node, path) {
    if(node === undefined) node = rootNode;
    if(path === undefined) path = [];
    path.push(node.val);
    console.log("Current Path", path);
    if(node.val === "end"){
      console.log("Found Valid", path);
      validPaths.push(clone(path));
      return ;
    }
    node.children.forEach(x => {
      console.log(path, node, node.val, x.val, !path.includes(x))
      if (nodes[x] !== "end" || nodes[x] !== "start")
      if (nodes[x].isSmall()) {
        if(countInArray(path, x) !== 2){
          var newPath = clone(path);
          traverse(nodes[x], newPath);
        }
      } else {
        var newPath = clone(path);
        traverse(nodes[x], newPath);
      }
    });
  }

  traverse(rootNode, [])

  console.log(validPaths)

  return validPaths.length
};

const calculatePart2 = (input, ans) => {
  let validPaths = [];

  // Create the graph of nodes
  const nodes = createGraph(input)

  console.log(nodes)

  // Start with start and go until end
  let rootNode = nodes["start"];

  function clone(A) {
    return JSON.parse(JSON.stringify(A));
  }

  function traverse(node, path) {
    if(node === undefined) node = rootNode;
    if(path === undefined) path = [];
    path.push(node.val);
    if(node.val === "end"){
      validPaths.push(clone(path));
      return ;
    }
    node.children.forEach(x => {
      if (x !== "end" || x !== "start") {
        if (nodes[x].isSmall()) {
          if(countInArray(path, x) !== 2){
              if(isDoubleTrue(path) < 2){
            var newPath = clone(path);
            traverse(nodes[x], newPath);
            }
          }
        } else {
          var newPath = clone(path);
          traverse(nodes[x], newPath);
        }
      }
    });
  }

  traverse(rootNode, [])

  
  let withoutStart = validPaths.filter(e => countInArray(e, "start") === 1)
  let final = withoutStart
  // let final = withoutStart.filter(e => isDoubleTrue(e))

  console.log(final)

  return final.length
};


export const DayTwelve = () => { 
  const [input, setInput] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState("pending");

  const handleInput = e => e.split("\n").map(e => e.split("-"));
  const handleAns = e => e.split("\n").map(e => e.split(","));


  const part1Handler = () => {
    const i = handleInput(inputString)
    setPart1Val(calculatePart1(i))
  }

  const part2Handler = () => {
    const i = handleInput(inputString)
    const ans = handleAns(actual)
    setPart2Val(calculatePart2(i, ans))
  }
  
  return (
    <HomeContainer>
      {/* <Cover/> */}
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 12: ???? ---</h1>
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