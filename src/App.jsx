import React from "react"
import {languages} from "./languages.js"
import {clsx} from "clsx"
import {getWord,getFarewellText} from "./utils.js"

export default function App(){
  let [currentWord, setCurrentWord] = React.useState(()=>getWord())
  let [guessedLetters, setGuessedLetters] = React.useState([])

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  let wrongGuessCount =  guessedLetters.filter(letter=> !currentWord.includes(letter)).length
  let isGameWon = currentWord.split("").every(letter=> guessedLetters.includes(letter))
  let isGameLost = wrongGuessCount >= languages.length - 1
  let isGameOver = isGameWon || isGameLost

  function addGuessesLetters(char){
    setGuessedLetters(prevLetters => (
      prevLetters.includes(char) ? prevLetters:[...prevLetters, char]
    ))
  }

  function newGame(){
    setCurrentWord(getWord())
    setGuessedLetters([])
  }

  function gameStatus(){
    if (!isGameOver){
      return <>
      <p className="farewell-messages">{getWord(languages[wrongGuessCount-1].name)}</p>
      </>
    }
    if (isGameOver){
      if(isGameWon){
        return <>
        <h1>You win!</h1>
        <p>Well done! 🎉</p>
        </>
      }
      else{
        return <>
        <h1>Game Over!</h1>
        <p>You lose! Better start learning Assembly 😭</p>
        </>
      }
    }
  }

  const languagesElements = languages.map((language,index)=> {
    let styleElements = {backgroundColor: language.backgroundColor, color: language.color}
    let languageLost = index < wrongGuessCount
    let classname = clsx("language-chip",{lost:languageLost})
    return <p className={classname} style={styleElements}>{language.name}</p>
  })

  const letterElements = currentWord.split("").map(letter=>{
    const isCorrect = guessedLetters.includes(letter) && currentWord.includes(letter)
    return <span className="letter">{isCorrect ? letter.toUpperCase():null}</span>
  })

  const alphabetElements = alphabets.split("").map(char => {
    let isGuessed = guessedLetters.includes(char)
    let isCorrect = isGuessed && currentWord.includes(char)
    let isWrong = isGuessed && !currentWord.includes(char)
    const classname = clsx({correct: isCorrect, wrong: isWrong, over: isGameOver})

    return <button key={char} className={classname} disabled={isGameOver} onClick={()=>addGuessesLetters(char)}>{char.toUpperCase()}</button>
  })

  return (
    <main>

      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      
      <section className="game-status">
        {gameStatus}
      </section>
      
      <section className="language-chips">
        {languagesElements}
      </section>
      
      <section className="word">
        {letterElements}
      </section>
      
      <section className="keyboard">
        {alphabetElements}
      </section>

      <section className="new-game-button-section">
        {isGameOver ? <button className="new-game-button" onClick={newGame}>New Game</button>:null}
      </section>

    </main>
  )
}