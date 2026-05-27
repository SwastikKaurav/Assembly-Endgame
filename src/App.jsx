import React from "react"
import {languages} from "./languages.js"
import {clsx} from "clsx"

export default function App(){
  let [currentWord, setCurrentWord] = React.useState("react")
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

  const languagesElements = languages.map(language=> {
    let styleElements = {backgroundColor: language.backgroundColor, color: language.color}
    return <p className="language-name" style={styleElements}>{language.name}</p>
  })

  const letterElements = currentWord.split("").map(letter=>{
    const isCorrect = guessedLetters.includes(letter) && currentWord.includes(letter)
    return <span className="letter">{isCorrect ? letter.toUpperCase():null}</span>
  })

  const alphabetElements = alphabets.split("").map(char => {
    let isGuessed = guessedLetters.includes(char)
    let isCorrect = isGuessed && currentWord.includes(char)
    let isWrong = isGuessed && !currentWord.includes(char)
    const classname = clsx({correct: isCorrect, wrong: isWrong})
    return <button key={char} className={classname} onClick={()=>addGuessesLetters(char)}>{char.toUpperCase()}</button>
  })

  return (
    <main>

      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      
      <section className="languages-chip">
        {languagesElements}
      </section>
      
      <section className="word">
        {letterElements}
      </section>
      
      <section className="keyboard">
        {alphabetElements}
      </section>

      <section className="new-game-button-section">
        {isGameOver ? <button className="new-game-button">New Game</button>:null}
      </section>

    </main>
  )
}