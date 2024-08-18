import clsx from "clsx";
import { useEffect, useState } from "react";
import Board from "../components/board";
import selectAnswer from "../components/names/names";

const numGuesses = 6;
const wordLength = 5;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [[name, fullName, hints], setSolution] = useState<
    [string, string, string[]]
  >(() => ["", "", [""]]);

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
      if (currentGuessIndex >= numGuesses) {
        return;
      }

      let currentGuess = guesses[currentGuessIndex]?.trimEnd() ?? "";

      if (event.key === "Enter") {
        if (currentGuess.length !== wordLength) {
          return;
        }
        setCurrentGuessIndex((prev) => prev + 1);
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
  }, [currentGuessIndex, setCurrentGuessIndex, guesses, setGuesses]);

  return (
    <div
      className={clsx(
        "flex h-screen flex-col font-mono",
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black",
      )}
    >
      <div
        className={clsx(
          "my-1 flex items-center justify-center border-b-2 p-1 text-xl font-semibold",
          darkMode ? "border-white" : "border-black",
        )}
      >
        Cricket Wordle.
        <div
          className="absolute right-4 cursor-pointer text-xs"
          onClick={() => setDarkMode((curr) => !curr)}
        >
          {darkMode ? "Light" : "Dark"}
        </div>
      </div>
      <Board
        guesses={guesses}
        solution={name}
        fullName={fullName}
        hintsArray={hints}
        currentGuessIndex={currentGuessIndex}
      />
    </div>
  );
}
