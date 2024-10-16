import { useMode } from "../Context";


const Mode = () => {
  const { darkMode, toggleDarkMode } = useMode();

  return (
    <div className={`${darkMode?"":" text-black"} rounded-[10px] text-[1.5rem]    h-fit `}>
      <button onClick={toggleDarkMode}>
        {!darkMode ? (
          <i className={`${darkMode?"text-white":"text-black"} fa-solid fa-moon p-2`}></i>
        ) : (
          <i className={`${darkMode?"text-white":"text-black"} fa-solid fa-sun p-2`}></i>
        )}
      </button>
    </div>
  );
};

export default Mode;
