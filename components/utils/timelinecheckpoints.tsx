import React, { ReactComponentElement } from 'react'


interface props{
    icon:React.ReactElement,
    color:"pri" | "four",
    size:string
}

const Checkpoints:React.FC<props>=({icon, color, size}) => {
  return (
    <div  style={{width: size}}  className={`h-[10vh] shadow-lg rounded-full border-[5px] border-tri ${color=="pri"? "bg-pri": "bg-four" } flex justify-center items-center`} >
        {icon}
    </div>
  )
}

export default Checkpoints