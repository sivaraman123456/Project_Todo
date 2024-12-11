import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({onAdd,onCancel}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modalRef= useRef()
  function handleSave() {
 
    
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDueDate = dueDate.current.value;
// check the inputs are empty or not
if(enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === '') 
{
 modalRef.current.open()
 return
}
    onAdd({
      title:enterTitle,
      description:enterDescription,
      dueDate:enterDueDate
    })
  }
  return (
    <>
    <Modal ref={modalRef}>
      <p className="text-red-600 text-xl font-semibold ">Validation Error....!</p>
      <p  className="font-bold text-stone-700 text-xl mt-3">OOP's.... you forgot to fill the inputs!</p>
      <p className="font-bold text-stone-700 text-xl mt-3">To make sure the fields are fill</p>
       </Modal>
    <div className="w-2/3 mt-16  flex flex-col  ">
      <menu className="flex gap-6 justify-end items-center">
        <li>
          <button className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white" 
          onClick={onCancel}>
            Cancel{" "}
          </button>
        </li>
        <li>
          <button
            className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input  ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
};

export default NewProject;
