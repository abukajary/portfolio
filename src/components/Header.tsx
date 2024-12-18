import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="flex justify-between items-center font-semibold text-sm md:text-lg">
        <div className="flex gap-2 ">
          <Link to={'/'}><h1>abuka.dev</h1></Link>
        </div>
        <button onClick={toggleTheme}>
          <img
            className="h-5 w-5"
            src={
              theme === "dark"
                ? "/sun-svgrepo-com.svg"
                : "/moon-svgrepo-com.svg"
            }
            alt=""
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
