type BoardProps = {
  guesses: string[];
};

const Board = ({ guesses }: BoardProps) => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-1">
      {guesses.map((guess, index) => (
        <Line key={index} guess={guess} />
      ))}
    </div>
  );
};


type LineProps = {
  guess: string;
};

const Line = ({ guess }: LineProps) => {
  return (
    <div className="flex gap-1">
      {guess.split("").map((letter, index) => (
        <div
          className="flex h-16 w-16 items-center justify-center border-2 p-2 font-mono text-2xl uppercase"
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
      ))}
    </div>
  );
};

export default Board;