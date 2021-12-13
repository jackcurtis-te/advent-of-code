import { useState } from "react";
import { HomeContainer } from "../home/home.styles";
import { Container, Back, Cover } from "../day.styles";

const spliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

const checkRows = card => {
  let winArr = []
  let arrayVals = false;
  for (let i = 0; i < 5; i++) {
    const start = i*5
    let chunk = [card[start], card[start+1], card[start+2], card[start+3],card[start+4]]
    winArr.push(chunk[0].checked && chunk[1].checked && chunk[2].checked && chunk[3].checked && chunk[4].checked)
    if (chunk[0].checked && chunk[1].checked && chunk[2].checked && chunk[3].checked && chunk[4].checked && !arrayVals) arrayVals = chunk
  }

  const win = winArr[0] || winArr[1] || winArr[2] || winArr[3] || winArr[4]
  return { arr: winArr, win: win, vals: arrayVals}
}

const checkCols = card => {
  let winArr = []
  let arrayVals = false
  for (let i = 0; i < 5; i++) {
    const start = i
    let chunk = [card[start], card[start+5], card[start+10], card[start+15],card[start+20]]
    winArr.push(chunk[0].checked && chunk[1].checked && chunk[2].checked && chunk[3].checked && chunk[4].checked)
    if (chunk[0].checked && chunk[1].checked && chunk[2].checked && chunk[3].checked && chunk[4].checked && !arrayVals) arrayVals = chunk
    
  }
  const win = winArr[0] || winArr[1] || winArr[2] || winArr[3] || winArr[4]
  return { arr: winArr, win: win, vals:  arrayVals}
}

const calculatePart1 = (inputCalled, inputCards) => {
  let win = false;
  let answer;
  
  const cards = spliceIntoChunks(inputCards.map((e) => ({ "val": e, "checked": false})), 25);

  let cardsInPlay = cards;

  inputCalled.forEach(input => {
    cardsInPlay = cardsInPlay.map(card => card.map(e => ({ val: e.val, checked: input === e.val? true: e.checked})));

    cardsInPlay.forEach(card => {
      const rowsWin = checkRows(card);
      const colWin = checkCols(card);

      if (rowsWin.win) {
        let score = 0;
        card.forEach(val => { if (!val.checked) score += Number(val.val) })

        if (win === false) answer = ( Number(score)  * Number(input))
        win = true
      }
      if (colWin.win) {
        let score = 0;          
        card.forEach(val => { if (!val.checked) score += Number(val.val) })

        if (win === false) answer = ( Number(score)  * Number(input))
        win = true
      }
    })
  })

  return answer
};

const calculatePart2 = (inputCalled, inputCards) => {
  console.log("Part 2!")

  let win = false;
  let losingScore = false;
  let answer;
  
  const cards = spliceIntoChunks(inputCards.map((e) => ({ "val": e, "checked": false})), 25);

  let cardsWon = [];
  let cardsInPlay = cards;

  inputCalled.forEach(input => {
    cardsInPlay = cardsInPlay.map(card => card.map(e => ({ val: e.val, checked: input === e.val? true: e.checked})));

    cardsInPlay.forEach((card, index) => {
      const rowsWin = checkRows(card);
      const colWin = checkCols(card);
      if (rowsWin.win) {
        let score = 0;
        card.forEach(val => { if (!val.checked) score += Number(val.val) })

        win = true
        if(cardsWon.indexOf(index) === -1) cardsWon.push(index);
        if (cardsWon.length === cards.length) {
          let score = 0;          
          card.forEach(val => { if (!val.checked) score += Number(val.val) })
          
          if (losingScore === false) {
            const final = score * Number(input)
            answer = final
            losingScore = true
          }
        }
      }
      if (colWin.win) {
        
        let score = 0;          
        win = true
        if(cardsWon.indexOf(index) === -1) cardsWon.push(index);
        
        if (cardsWon.length === cards.length) {
          card.forEach(val => { if (!val.checked) score += Number(val.val) })
          
          if (losingScore === false) {
            const final = score * Number(input)
            answer = final
            losingScore = true
          }
        }
      }
    })
  })
  return answer;
};

export const DayFour = () => { 
  const [inputCalled, setInputCalled] = useState([]);
  const [inputCards, setInputCards] = useState([]);

  const [part1Val, setPart1Val] = useState(false);
  const [part2Val, setPart2Val] = useState(0);

  const handleInputCalled = e => setInputCalled(e.split(","));
  const handleInputCards = e => setInputCards(e.split(" ").filter(e => e !== ""));
  
  return (
    <HomeContainer>
      <Cover/>
      <Container>
        <Back to="/">Back</Back>
        <h1>--- Day 4: Giant Squid ---</h1>
        <h1>---------</h1>
        <h1>Part 1</h1>
        <button data-test="part1Btn" onClick={() => setPart1Val(calculatePart1(inputCalled, inputCards))}>calculate!</button>
        <h1>{`The answer is ${part1Val}`}</h1>
        <h1>---------</h1>
        <h1>Part 2</h1>
        <button data-test="part2Btn" onClick={() => setPart2Val(calculatePart2(inputCalled, inputCards))}>calculate!</button>
        <h1>{`The answer is ${part2Val}`}</h1>
      </Container>
    </HomeContainer>
  )
}