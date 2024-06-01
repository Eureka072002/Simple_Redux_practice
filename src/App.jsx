import { useState } from 'react'
import './App.css'
import { add, minus, reset } from '../src/features/todo/todosSlice'
import { useDispatch, useSelector } from  'react-redux'

function App() {
  const count = useSelector((state) => state.todos.count) // Adjust based on your actual state structure
  const dispatch = useDispatch()



  return (
    <>
     <div className='flex flex-col bg-lime-600 text-2xl font-bold text-white p-2'>Simple Redux Practice</div>

     <div className='bg-emerald-800 mt-40 p-4 h-[200px] w-[400px] ml-[25rem] rounded-lg overflow-hidden shadow-xl shadow-emerald-400'>
      <div className='flex bg-emerald-600 h-10 rounded-xl shadow-md hover:cursor-text p-2 font-bold text-white hover:focus: '>{count}</div>
      <div className='flex items-center justify-center gap-4 mt-10'>
        <button onClick={() => dispatch(add())} className='bg-pink-600 px-6 py-2 rounded-2xl font-bold hover:opacity-85 focus:opacity-80'>+1</button>
        <button onClick ={() => dispatch(reset())} className='bg-black px-8 py-2 text-white rounded-2xl hover:opacity-85'>remove</button>
        <button onClick = {() => dispatch(minus())} className='bg-amber-500 px-6 py-2 rounded-2xl font-bold hover:opacity-85 focus:opacity-80'>-1</button>
      </div>
     </div>
    </>
  )
}

export default App
