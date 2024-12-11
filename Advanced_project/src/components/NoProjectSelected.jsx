import EmptyProject from '../assets/no-projects.png'
import Button from './Button'
import Slide from './Slide';

const NoProjectSelected = ({onSelectedProject}) => {
  return (
    <div className=' text-center flex flex-col  items-center w-2/3 leading-[50px] mt-16'>
        <img src={EmptyProject} alt="Empty project " className='w-[100px] h-[100px]'/>
<h2 className='font-bold text-stone-600 text-xl mt-3'>No Project Selected</h2>

<p className='my-5 font-semibold text-stone-400'>Select a project or get start a new one </p>
<Button onClick={onSelectedProject}>Create new project</Button>

<Slide/>
    </div>
  )
}

export default NoProjectSelected;