import React from "react"
import {languages} from "./languages.js"

export default function App(){
  let [currentWord, setCurrentWord] = React.useState("react")

  const letterElements = currentWord.split("").map(letter=>(
    <span className="letter">{letter.toUpperCase()}</span>
  ))

  const alphabets = "abcdefgfijklmnopqrstuvwxyz"

  const alphabetElements = alphabets.split("").map(char => (
    <button className="alphabet-buttons">{char.toUpperCase()}</button>
  ))

  const languagesElements = languages.map(language=> {
    let styleElements = {backgroundColor: language.backgroundColor, color: language.color}
    return <p className="language-name" style={styleElements}>{language.name}</p>
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
    </main>
  )
}