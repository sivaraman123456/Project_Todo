import { useState } from "react";

const NewTasks = ({ onAdd }) => {
  const [showTasks, setShowTasks] = useState("");

  function handleAddTasks(value) {
    console.log("Values:>>>", value);

    setShowTasks(value);
  }

  function handleClick() {
    console.log("Result>>>", showTasks);

    if(showTasks.trim()==="")
    {
      return
    }
    onAdd(showTasks);
    setShowTasks("");
  }
  return (
    <div className="flex items-center gap-8 mt-8">
      <input
        type="text"
        placeholder="Enter the Tasks"
        className="py-1 px-3 w-full  my-5 border-2"
        onChange={(e) => {
          handleAddTasks(e.target.value);
        }}
        value={showTasks}
      />
      <button
        className="text-stone-500 font-semibold  whitespace-pre-wrap"
        onClick={handleClick}
      >
        AddTask
      </button>

      
    </div>
  );
};

export default NewTasks;
