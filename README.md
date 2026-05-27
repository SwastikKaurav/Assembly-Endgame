# Assembly: Endgame 🎮

A word-guessing game built with React where you must guess the hidden word before the programming world falls to Assembly!

## 🕹️ How to Play

- Guess the hidden word one letter at a time by clicking the keyboard buttons
- You have **8 attempts** before Assembly takes over
- Each wrong guess eliminates a programming language
- Guess the word before all languages are gone to win!

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/SwastikKaurav/Assembly-Endgame.git

# Navigate into the project
cd Assembly-Endgame

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool
- [clsx](https://github.com/lukeed/clsx) — Conditional class names
- [react-confetti](https://github.com/alampros/react-confetti) — Win celebration effect
- [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) — Google Font

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── App.jsx         # Main game component
│   ├── languages.js    # Programming languages data
│   ├── utils.js        # Helper functions (getWord, getFarewellText)
│   └── index.css       # Global styles
├── index.html
└── package.json
```

## ✨ Features

- 🎉 Confetti animation on win
- 💀 Skull overlay on eliminated languages
- 🟩 Green/red keyboard feedback for correct/wrong guesses
- 📝 Farewell messages when a language is eliminated
- 🔴 Reveals unguessed letters in red on game over
- 🔄 New Game button to restart

