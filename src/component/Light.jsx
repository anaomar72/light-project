import { useState } from "react"
 
function Light(){
      
    const[ color, setColor]=useState(" ")
    const[isOn, setOn]=useState(false)
    // update On
    const handleOn=()=>{
        setColor("yellow")
        setOn(true)
    }
    const handleOff=()=>{
        setColor("whitesmoke")
        setOn(false)
    }
    return <div className="flex justify-center mt-10">
     <div>
<div style={{backgroundColor: color}} className=" w-[400px] h-[400px] border-4 border-black rounded-full">

</div>
  

  <button style={{backgroundColor:isOn==true? "red"  : " "}} onClick={handleOn} className="bg-yellow-500 text-center text-1xl ml-8 rounded px-3 py-2 m-1" >ON</button>
  <button onClick={handleOff} className=" bg-green-500 text-center text-1xl rounded px-3 py-2 m-1">OFF</button>
     </div>

    </div>
}
export default Light