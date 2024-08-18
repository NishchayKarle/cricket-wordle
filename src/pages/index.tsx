import { useEffect, useState } from "react";
import Board from "../components/board"
import selectAnswer from "../components/names/names";

const numGuesses = 5;
const wordLength = 5;

export default function Home() {
  const [[name, fullName], setSolution] = useState<[string, string]>(() => [
    "",
    "",
  ]);

  const [guesses, setGuesses] = useState<string[]>(() =>
    Array(numGuesses).fill(String(" ".repeat(wordLength))) as string[],
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
    <div className="flex h-screen flex-col">
      <div className="my-1 flex items-center justify-center border-b-2 border-black p-1 font-mono text-xl font-semibold">
        Cricket Wordle.
      </div>
      <Board guesses={guesses} />
    </div>
  );
}
