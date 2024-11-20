// import { useState } from "react";

// const DropdownConfig = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [groupSize, setGroupSize] = useState(2);
//   const [itemCount, setItemCount] = useState(8);
//   const [columns, setColumns] = useState(4);

//   return (
//     <div className="relative">
//       <button
//         className="bg-gray-800 text-white py-2 px-4 m-5 rounded cursor-pointer flex items-center gap-2 w-50"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span
//           className={`transform transition-transform duration-300 ${
//             isOpen ? "rotate-100" : "rotate-0"
//           }`}
//         >
//           {isOpen ? "▽" : "▷"}
//         </span>
//         <span className="text-white ">Config</span>
//       </button>
//       {isOpen && (
//         <div className="absolute bg-gray-700 text-white border m-5 border-gray-600 p-4 rounded-md z-10 min-w-[200px] mt-2">
//           <div className="flex items-center gap-4 my-2">
//             <label htmlFor="groupSize" className="w-1/3">
//               Group Size
//             </label>
//             <input
//               type="range"
//               id="groupSize"
//               min="1"
//               max="10"
//               value={groupSize}
//               onChange={(e) => setGroupSize(e.target.value)}
//               className="flex-grow"
//             />
//             <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">
//               {groupSize}
//             </span>
//           </div>
//           <div className="flex items-center gap-4 my-2">
//             <label htmlFor="itemCount" className="w-1/3">
//               Item Count
//             </label>
//             <input
//               type="range"
//               id="itemCount"
//               min="1"
//               max="20"
//               value={itemCount}
//               onChange={(e) => setItemCount(e.target.value)}
//               className="flex-grow"
//             />
//             <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">
//               {itemCount}
//             </span>
//           </div>
//           <div className="flex items-center gap-4 my-2">
//             <label htmlFor="columns" className="w-1/3">
//               Columns
//             </label>
//             <input
//               type="range"
//               id="columns"
//               min="1"
//               max="10"
//               value={columns}
//               onChange={(e) => setColumns(e.target.value)}
//               className="flex-grow"
//             />
//             <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">
//               {columns}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownConfig;





import { useState, useEffect } from "react";

const DropdownConfig = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupSize, setGroupSize] = useState(2);
  const [itemCount, setItemCount] = useState(8);
  const [columns, setColumns] = useState(4);

  const initialWords = [
    "Mango", "Apple", "grapes", "Apple", // Match 1
    "pineapple", "Flower", "Button", "Color", 
    "Banana", "Orange", "Lemon", "Papaya", 
    "Cherry", "Peach", "Watermelon", "Strawberry", 
    "Grapefruit", "Mango", "Banana" // Match 2
  ];
      
  const [words, setWords] = useState(initialWords);
  const [wordGroups, setWordGroups] = useState([]); // To hold the grouped words
  const [selectedWords, setSelectedWords] = useState([]); // To store the selected words
  const [attempts, setAttempts] = useState(0); // To track attempts
  const [buttonColors, setButtonColors] = useState({}); // To track button colors

  // Helper function to group words based on the Group Size
  const groupWords = (words, groupSize) => {
    let groups = [];
    for (let i = 0; i < words.length; i += groupSize) {
      groups.push(words.slice(i, i + groupSize));
    }
    return groups;
  };

  // Update word groups whenever groupSize, itemCount or columns change
  useEffect(() => {
    const visibleWords = words.slice(0, itemCount); // Get the number of words based on the itemCount
    const groupedWords = groupWords(visibleWords, groupSize); // Group them based on the groupSize
    setWordGroups(groupedWords);
  }, [groupSize, itemCount, words]); // Re-run whenever groupSize, itemCount, or words change

  // Function to handle word click and apply color change
  const handleWordClick = (clickedWord) => {
    if (selectedWords.length === 2) return; // Prevent further clicks until two words are selected

    setSelectedWords((prev) => [...prev, clickedWord]);
    setButtonColors((prev) => ({ ...prev, [clickedWord]: "lightblue" })); // Change color to light blue on selection
  };

  // Function to check if two words match
  useEffect(() => {
    if (selectedWords.length === 2) {
      setAttempts((prev) => prev + 1); // Increment attempts

      const [firstWord, secondWord] = selectedWords;

      // Check if the two selected words match
      if (firstWord === secondWord) {
        setButtonColors((prev) => ({
          ...prev,
          [firstWord]: "green", // Change color to green if match
          [secondWord]: "green", // Change color to green if match
        }));
        // Remove words after a timeout
        setTimeout(() => {
          setWords((prev) => prev.filter((word) => word !== firstWord && word !== secondWord));
          setSelectedWords([]); // Reset the selected words
        }, 1000);
      } else {
        // Set both buttons to red if they don't match
        setButtonColors((prev) => ({
          ...prev,
          [firstWord]: "red", // Red for incorrect match
          [secondWord]: "red", // Red for incorrect match
        }));
        setTimeout(() => {
          setButtonColors((prev) => ({
            ...prev,
            [firstWord]: "", // Reset color after timeout
            [secondWord]: "", // Reset color after timeout
          }));
          setSelectedWords([]); // Reset the selected words
        }, 1000);
      }
    }
  }, [selectedWords]);

  // Reset the game
  const resetGame = () => {
    setWords(initialWords); // Reset words to initial state
    setSelectedWords([]); // Clear selected words
    setButtonColors({}); // Clear button colors
    setAttempts(0); // Reset attempts counter
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-start space-x-4 p-4">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
            ▼
          </span>
          Config
        </button>

        {isOpen && (
          <div className="absolute bg-gray-700 text-white border m-5 border-gray-600 p-4 rounded-md z-10">
            <div className="flex items-center gap-4 my-2">
              <label htmlFor="groupSize" className="w-1/3">Group Size</label>
              <input
                type="range"
                id="groupSize"
                min="1"
                max="10"
                value={groupSize}
                onChange={(e) => setGroupSize(Number(e.target.value))}
                className="flex-grow"
              />
              <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">{groupSize}</span>
            </div>

            <div className="flex items-center gap-4 my-2">
              <label htmlFor="itemCount" className="w-1/3">Item Count</label>
              <input
                type="range"
                id="itemCount"
                min="1"
                max="20"
                value={itemCount}
                onChange={(e) => setItemCount(Number(e.target.value))}
                className="flex-grow"
              />
              <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">{itemCount}</span>
            </div>

            <div className="flex items-center gap-4 my-2">
              <label htmlFor="columns" className="w-1/3">Columns</label>
              <input
                type="range"
                id="columns"
                min="1"
                max="5"
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="flex-grow"
              />
              <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded">{columns}</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 text-center">
        <h3>Click to remove a word</h3>
        <div
          className="grid gap-4 mt-5 mx-auto"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {wordGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex justify-center gap-4">
              {group.map((word, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-black py-2 px-4 rounded-md"
                  style={{ backgroundColor: buttonColors[word] }} // Apply button color
                  onClick={() => handleWordClick(word)} // Word is clicked
                >
                  {word}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p>Attempts: {attempts}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={resetGame} // Reset the game
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownConfig;



