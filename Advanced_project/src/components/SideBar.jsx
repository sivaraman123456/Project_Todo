import Button from "./Button";

const SideBar = ({ onAddProject, projects, onSlectedProject, selectedID }) => {
  return (
    <aside className="bg-black w-2/3 py-16 px-8 text-white md:w-72 rounded-r-xl h-screen">
      <h2 className="mb-8 text-2xl font-bold uppercase ">Your Project</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {  projects.length > 0 && projects.map((project) => {
          let classCss = `px-2 py-1  text-md text-left  hover:bg-stone-600 w-full rounded-md my-3`;
          if (project.id === selectedID) {
            
            classCss += ` bg-stone-400  text-white `;
          } else {
            
            classCss += `  bg-stone-800  text-stone-200`;
          }
          return (
            <li key={project.id}>
              <button
                className={classCss}
                onClick={() => {
                  onSlectedProject(project.id);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
