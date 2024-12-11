import { useState } from "react";
// import "./Slide.css";

const Slide = () => {
  const [value, setValue] = useState(80);

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    if(!isNaN(e.target.value))
    {
      const newValue =  Math.min(100, Number(e.target.value));
      setValue(newValue);
    }

   
  };

  return (

<div className="w-[184px] h-[64px] mt-4 p-[16px] ">
    <div className="flex  items-center gap-[4px]  p-[4px] bg-gray-400 rounded-[5px] ">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleSliderChange}
        className=" w-[100px] h-[4px] bg-gray-400 rounded-[5px] cursor-pointer  accent-blue-500"
      />

<input
        type="text"
        min={0}
        max={100}
        value={value}
        onChange={handleInputChange}
        className="w-[40px] h-[24px] py-[13px] px-[8px] text-[12px] font-[400] text-center rounded-[5px] flex justify-center items-center  bg-gray-100  border-none  focus:bg-white hover:bg-[#E2E8F0]"
      />
    </div>
    </div>
  );
};

export default Slide;


// import { useState } from 'react';

// export default function Slide() {
//   const [value, setValue] = useState(60);
 

//   const handleSliderChange = (e) => {
//     setValue(Number(e.target.value));
//   };




//   return (
//     <div className="w-full max-w-xl mx-auto py-8">
//       {/* iOS Slider */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold mb-2">iOS</label>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={value}
//           onChange={handleSliderChange}
//           className="w-full h-4 bg-blue-500 rounded-md cursor-pointer focus:ring-9 focus:ring-white"
//         />
//         <div className="mt-2 text-center text-gray-700">{value}</div>
//       </div>
// </div>
//   );
// }


// import { RangeSlider } from "rizzui";

// export default function Slide() {
//   return (
//     <>
//       <RangeSlider size="sm" defaultValue={20} />
//       <RangeSlider defaultValue={25} />
//       <RangeSlider size="lg" defaultValue={30} />
//       <RangeSlider size="xl" defaultValue={35} />
//     </>
//   );
// }

// import { useState } from "react";

// const Slide = () => {
//   // State to manage opacity value
//   const [opacity, setOpacity] = useState(1); // Default opacity (1 = fully visible)

//   return (
//     <div className="mt-10 flex flex-col items-center gap-6 bg-gray-100 p-6 rounded-lg">
//       {/* Slider */}
//       <input
//         type="range"
//         min={0}
//         max={1} // Opacity range (0 to 1)
//         step={0.01} // Smaller steps for fine control
//         value={opacity}
//         onChange={(e) => setOpacity(Number(e.target.value))}
//         className="w-[70%] accent-blue-500"
//       />

//       {/* Text to demonstrate opacity */}
//       <div
//         className="text-center text-xl font-bold bg-blue-400 text-white rounded-lg p-4 w-[50%]"
//         style={{ opacity }} // Bind opacity dynamically
//       >
//         Adjust My Opacity
//       </div>

//       {/* Display the current opacity value */}
//       <p className="text-sm text-gray-700">Current Opacity: {opacity}</p>
//     </div>
//   );
// };

// export default Slide;
