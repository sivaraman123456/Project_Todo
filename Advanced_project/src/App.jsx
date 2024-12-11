import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    task: [],
  });

  function handleAddTask(text) {
    console.log("Textt>>>:", text);
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        taskId: Math.random(),
      };
      return {
        ...prevState,
        projects:[...prevState.projects],
        task: [ ...prevState.task, newTask ],
      };
    });
  }


  function handleDelTasks(id) {
    console.log("TaskID>>>>:",id);
    
    setProjectState((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((task) => task.taskId !== id)
      };
    });
  }

  function handleSelectProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // write a function for save the userInput in the projectState

  function handleAddUserData(newData) {
    setProjectState((prevData) => {
      const Data = {
        ...newData,
        id: Math.random(),
      };
      return {
        ...prevData,
        selectedProjectId: undefined,
        projects: [...prevData.projects, Data],
      };
    });
  }

  // write a delete project logic by using nfilter method

  function handleDelete() {
    setProjectState((prevData) => {
      return {
        ...prevData,
        selectedProjectId: undefined,
        projects: prevData.projects.filter(
          (data) => data.id !== prevData.selectedProjectId
        ),
      };
    });
  }

  // updating selectedProjectID

  function selecteProjectId(id) {
    console.log("Id vandhucha>>>:", id);

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
    // console.log("SelectedProject:",projectState);
  }
  console.log("projectState:", projectState);

  let selecteProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  ); // which is geting the project details based on the selectedprojectID compared with All project ID's

  console.log("selecteProject>>>>:", selecteProject);

  let content;

  if (projectState.selectedProjectId === null) {
    console.log("Okay");

    // If the projectID is undefined than Noproject selected otherwise create newProject
    content = <NewProject onAdd={handleAddUserData} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    console.log("Not Okay");

    content = <NoProjectSelected onSelectedProject={handleSelectProject} />;
  } else {
    content = (
      <SelectedProject
        selecteProjectData={selecteProject}
        onDelete={handleDelete}
        onAdd={handleAddTask}
        onDel={handleDelTasks}
        tasks={projectState.task}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar
        onAddProject={handleSelectProject}
        projects={projectState.projects}
        onSlectedProject={selecteProjectId}
        selectedID={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
