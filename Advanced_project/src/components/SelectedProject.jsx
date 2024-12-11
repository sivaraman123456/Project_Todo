import Tasks from "./Tasks";

const SelectedProject = ({
  selecteProjectData,
  onDelete,
  onDel,
  onAdd,
  tasks,
}) => {
  console.log("ljbdygcfwetdvweydfv");

  const formattedDate = new Date(selecteProjectData.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }
  );

  return (
    <div className="w-[500px] mt-6 py-4 leading-10">
      <div className="flex justify-between items-center ">
        <header className="text-2xl font-bold text-amber-950">
          {selecteProjectData.title}
        </header>
        <button
          className="px-1  bg-stone-500 text-white font-bold rounded-md hover:bg-stone-300 hover:text-stone-600"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <p className="text-stone-500 ">{formattedDate}</p>
      <p>{selecteProjectData.description}</p>
      <hr />

      <div className="mt-8">
        <Tasks onAdd={onAdd} onDel={onDel} tasks={tasks} />
      </div>
    </div>
  );
};

export default SelectedProject;
