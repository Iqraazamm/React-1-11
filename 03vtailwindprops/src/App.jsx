import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"iqra",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind</h1>
     {/* <Card channel="chai or code" someObj={myObj}/> */}
     <Card username="iqrararara" btntext="click me "/>
     <Card username="umrarara" btntext="visit me"/>
 
{/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/26648888/pexels-photo-26648888/free-photo-of-flying-audouins-gull-against-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}

export default App
