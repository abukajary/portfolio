import useTheme from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="flex justify-between items-center font-semibold text-sm md:text-lg">
        <div className="flex gap-2 ">
          {/* <h1>главная</h1>
          <h1>опыт</h1>
          <h1>проекты</h1>
          <h1>контакты</h1> */}
          <h1>abuka.dev</h1>
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
