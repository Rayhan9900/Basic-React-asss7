
import Header from './Components/header/Header'
import './App.css'
import Course from './Components/Course/Course'
import Select from './Components/Selects/Select'

function App() {





  return (
    <>

      <Header></Header>
      <div className='md:flex mt-20'>
        <Select></Select>
        <Course></Course>
      </div>




    </>
  )
}

export default App
