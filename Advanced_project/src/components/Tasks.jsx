import NewTasks from "./NewTasks ";

const Tasks = ({ tasks, onAdd, onDel }) => {
  console.log("Tasks>>>@@@", typeof tasks, tasks);

  return (
    <div>
      <header className="text-2xl font-bold text-stone-800 ">Tasks</header>
      <NewTasks onAdd={onAdd} />

      {tasks.length === 0 ? (
        <p className="text-xl text-stone-400 font-semibold ">
          This project doesnt have any tasks still
        </p>
      ) : (
        <ul className="w-full mt-8 p-3">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between my-4 bg-stone-200 items-center rounded-md p-2"
            >
              <span className="text-xl font-bold text-stone-500 my-5">
                {task.text}
              </span>

              <button
                onClick={() => 
                  onDel(task.taskId)
                }
                className="px-2 bg-red-500 text-white rounded-md "
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
