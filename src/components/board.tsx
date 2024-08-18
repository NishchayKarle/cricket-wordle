import clsx from "clsx";
import { useState } from "react";

type BoardProps = {
  guesses: string[];
  solution: string;
  fullName: string;
  hintsArray: string[];
  currentGuessIndex: number;
};

const Board = ({
  guesses,
  solution,
  fullName,
  hintsArray,
  currentGuessIndex,
}: BoardProps) => {
  const [hints, setHints] = useState<number>(0);

  return (
    <div className="flex flex-grow flex-col items-center justify-evenly">
      <div className="flex flex-col justify-center gap-1">
        {guesses.map((guess, index) => (
          <Line
            key={index}
            guess={guess}
            solution={solution.toLowerCase()}
            final={index < currentGuessIndex}
          />
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        {hints < hintsArray.length ? (
          <button
            onClick={() => setHints((prev) => prev + 1)}
            className={clsx(
              "rounded border border-gray-600 bg-transparent px-4 py-2 font-medium transition duration-500 ease-in-out hover:bg-gray-400",
            )}
          >
            GET Hints: {hintsArray.length - hints}
          </button>
        ) : (
          <div className="h-10">&nbsp;</div>
        )}

        <div className="mt-16 space-y-2">
          {hintsArray.map((hint, index) =>
            index < hints ? (
              <h1 key={index} className="w-72 p-1 text-center">
                {index + 1}. {hint}
              </h1>
            ) : (
              <div key={index} className="w-72 p-1">
                &nbsp;
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

type LineProps = {
  guess: string;
  solution: string;
  final: boolean;
};

const Line = ({ guess, solution, final }: LineProps) => {
  return (
    <div className="flex gap-1">
      {guess.split("").map((letter, index) => {
        let bgColor = "";

        if (final) {
          bgColor = "bg-gray-300";
          if (solution[index] === letter) {
            bgColor = "bg-green-300";
          } else if (solution.includes(letter)) {
            bgColor = "bg-yellow-300";
          }
        }

        return (
          <div
            className={clsx(
              "flex h-16 w-16 items-center justify-center border-2 p-2 text-2xl uppercase",
              bgColor,
            )}
            key={index}
            style={{
              width: "calc(10vw)",
              height: "calc(10vw)",
              maxWidth: "64px",
              maxHeight: "64px",
              minWidth: "40px",
              minHeight: "40px",
            }}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
