import clsx from "clsx";
import { useState } from "react";

type HintsProps = {
  hintsArray: string[];
};

const Hints = ({ hintsArray }: HintsProps) => {
  const [hintsShown, setHints] = useState<number>(0);

  return (
    <div className="my-1 flex w-full flex-grow flex-col items-center gap-4">
      {hintsShown < hintsArray.length ? (
        <button
          onKeyDown={(e) => e.preventDefault()}
          onClick={() => setHints((prev) => prev + 1)}
          className={clsx(
            "rounded border border-gray-600 p-2 font-medium hover:bg-gray-400 hover:transition-colors hover:duration-300",
          )}
        >
          GET Hints: {hintsArray.length - hintsShown}
        </button>
      ) : (
        <div className="h-10">&nbsp;</div>
      )}
      <div className="mt-8 space-y-2">
        {hintsShown !== 0 ? <h1>Hints:</h1> : <h1>&nbsp;</h1>}
        {hintsArray.map((hint, index) =>
          index < hintsShown ? (
            <h2 key={index} className="w-72 p-1 text-left">
              {index + 1}. {hint}
            </h2>
          ) : (
            <div key={index} className="w-72 p-1">
              &nbsp;
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Hints;
