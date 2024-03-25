import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("lightblue");

  return (
    <div className='w-full h-screen'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap gap-3 rounded-3xl py-2 justify-center bottom-2 inset-x-0 px-2 items-center'>
        <button onClick={() => setColor('#bf00ff')} className='bg-[#bf00ff] active:bg-[#c753ee] outline-none text-white text-xl rounded-full px-2 py-1'>Electric Purple</button>
        <button onClick={() => setColor("#ff6f61")} className='bg-[#ff6f61] active:bg-[#da5c50] outline-none text-white text-xl rounded-full px-2 py-1'>Coral Pink</button>
        <button onClick={() => setColor("#191970")} className='bg-[#191970] active:bg-[#5e5ebe] outline-none text-white text-xl rounded-full px-2 py-1'>Midnight Blue</button>
        <button onClick={() => setColor("#da70d6")} className='bg-[#da70d6] active:bg-[#7b3f79] outline-none text-white text-xl rounded-full px-2 py-1'>Orchid</button>
      </div>
    </div>
  )
}

export default App
