
import { useState } from "react";

const DropdownConfig = ({ groupSize, setGroupSize, itemCount, setItemCount, columns, setColumns }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white py-2 px-4 m-5 rounded cursor-pointer flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? "▽" : "▷"}</span>
        <span>Config</span>
      </button>
      {isOpen && (
        <div className="absolute bg-gray-700 text-white border m-5 border-gray-600 p-4 rounded-md z-10 min-w-[200px] mt-2">
          <div className="flex items-center gap-4 my-2">
            <label htmlFor="groupSize">Group Size</label>
            <input
              type="range"
              id="groupSize"
              min="1"
              max="10"
              value={groupSize}
              onChange={(e) => setGroupSize(parseInt(e.target.value))}
              className="flex-grow"
            />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <label htmlFor="itemCount">Item Count</label>
            <input
              type="range"
              id="itemCount"
              min="1"
              max="20"
              value={itemCount}
              onChange={(e) => setItemCount(parseInt(e.target.value))}
              className="flex-grow"
            />
            <span>{itemCount}</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <label htmlFor="columns">Columns</label>
            <input
              type="range"
              id="columns"
              min="1"
              max="10"
              value={columns}
              onChange={(e) => setColumns(parseInt(e.target.value))}
              className="flex-grow"
            />
            <span>{columns}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownConfig;


































































































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
















