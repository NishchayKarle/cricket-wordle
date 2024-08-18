import clsx from "clsx";

type TopBarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopBar = ({ darkMode, setDarkMode }: TopBarProps) => {
  return (
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
  );
};

export default TopBar;