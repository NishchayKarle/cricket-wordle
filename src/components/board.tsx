import clsx from "clsx";

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
  return (
    <div className="flex flex-col flex-grow items-center justify-center gap-1 my-1">
      {guesses.map((guess, index) => (
        <Line
          key={index}
          guess={guess}
          solution={solution.toLowerCase()}
          final={index < currentGuessIndex}
          animate={
            index < currentGuessIndex
              ? guess === solution.toLowerCase()
                ? "animate-spinOnce"
                : "animate-shakeOnce"
              : ""
          }
        />
      ))}
    </div>
  );
};

type LineProps = {
  guess: string;
  solution: string;
  final: boolean;
  animate: string;
};

const Line = ({ guess, solution, final, animate }: LineProps) => {
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
              animate,
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
