import clsx from "clsx";
import { useEffect, useState } from "react";
import Board from "../components/board";
import Hints from "../components/hints";
import TopBar from "../components/topbar";
import selectAnswer from "../names/names";

const numGuesses = 6;
const wordLength = 5;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [[name, fullName, hintsList], setSolution] = useState<
    [string, string, string[]]
  >(() => ["", "", [""]]);

  const [solved, setSolved] = useState(false);

  const [guesses, setGuesses] = useState<string[]>(
    () => Array(numGuesses).fill(String(" ".repeat(wordLength))) as string[],
  );

  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  useEffect(() => setSolution(selectAnswer()), []);

  useEffect(() => {
    const updateGuesses = (index: number, currentGuess: string) => {
      const newGuesses = [...guesses];
      newGuesses[index] = currentGuess.padEnd(wordLength, " ");
      setGuesses(() => newGuesses);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentGuessIndex >= numGuesses || solved) {
        return;
      }

      let currentGuess = guesses[currentGuessIndex]?.trimEnd() ?? "";

      if (event.key === "Enter") {
        if (currentGuess.length !== wordLength) {
          return;
        }
        setCurrentGuessIndex((prev) => prev + 1);
        if (currentGuess === name.toLowerCase()) {
          setSolved(true);
          return;
        }
      }

      if (event.key === "Backspace") {
        if (currentGuess.length === 0) {
          return;
        }
        currentGuess = currentGuess.slice(0, -1).padEnd(wordLength, " ");
        updateGuesses(currentGuessIndex, currentGuess);
        return;
      }

      if (
        event.key.length > 1 ||
        currentGuess.length >= wordLength ||
        !/[a-zA-Z]/.test(event.key)
      ) {
        return;
      }

      const letter = event.key.toLowerCase();
      currentGuess += letter;

      updateGuesses(currentGuessIndex, currentGuess);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentGuessIndex,
    setCurrentGuessIndex,
    guesses,
    setGuesses,
    solved,
    setSolved,
  ]);

  return (
    <div
      className={clsx(
        "flex h-screen flex-col font-mono",
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black",
      )}
    >
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Board
        guesses={guesses}
        solution={name}
        fullName={fullName}
        hintsArray={hintsList}
        currentGuessIndex={currentGuessIndex}
      />
      <Hints hintsArray={hintsList} />
    </div>
  );
}
