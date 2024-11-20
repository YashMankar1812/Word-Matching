import { useState, useEffect } from "react";
// import { FaGithub } from "react-icons/fa"; 
import DropdownConfig from "./DropdownConfig";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa"; // Import the moon and sun icons

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use effect to set the initial theme from localStorage or default to light mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the appropriate classes based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <header className="bg-black">
        {/* Header Content */}
        <div className="flex justify-between items-center px-6 py-5 md:flex-row">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center md:text-left text-gray-200 cursor-pointer">
            Word Connect
          </h1>

          {/* Icons Container */}
          <div className="mt-3 md:mt-0 flex items-center space-x-4">
            {/* Dark Mode Toggle Icon */}
            {/* <button
              onClick={toggleDarkMode}
              className="text-blue-950 dark:text-white text-xl"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button> */}

            {/* GitHub Social Icon */}
            <a
              href="https://github.com/YashMankar1812/Word-Matching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 text-2xl hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </header>

      {/* Subtext */}
      {/* <p className="text-xl text-gray-500 text-center px-4 py-2">
        Find the right words to connect the two words in the given words
      </p> */}

      {/* Container Section */}
        <DropdownConfig />
      <div className="container mx-auto px-4 py-6">
        {/* Dropdown Config Section */}

        {/* Config Section */}
        <div className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center pt-5 text-gray-800 dark:text-white">
            Connect group of 2 words by clicking on related words
          </h3>

          <section className="m-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              <button className="bg-transparent text-black py-2 px-4 rounded md shadow-md hover:bg-gray-200 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Mango</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border  border-gray-950">Apple</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">grapes</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">pineapple</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Flower</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Color</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Flower</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Button</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Color</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Mango</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">Banana</button>
              <button className="bg-transparent text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out border border-gray-950">grapes</button>
          </section>

          <p className="text-1xl font-bold text-center">Alert
          <span> : 1</span></p>
          
          <div className="text-center">
            <button className="bg-indigo-500 py-2 px-2 p-4 m-3 text-white rounded-md hover:bg-indigo-600 hover:scale-105 transform focus:outline-none transition duration-300 ease-in-out ">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
