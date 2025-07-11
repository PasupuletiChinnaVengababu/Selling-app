import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  

  const fetchData=async ()=>{
    const url=await fetch("http://localhost:3000/user/preview");
    const data = await url.json();
    console.log(data)
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <User/>
    </>
  )
}

export default App
