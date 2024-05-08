// import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState("")


  const handleClick = (event) =>{
    setValue(value + event.target.value);
  }

  return (
   <div className="container">
    <div className="calculator">
      <form action="
      ">
        <div className='display-input'>
        <input type="text" placeholder='0' value={value}/>
        </div>

        <div>
          <input type="button" value="AC" className='equal' onClick={e=>setValue("")}/>
          <input type="button" value="DE" className='equal' onClick={e =>{setValue(value.slice(0, -1))}}/>
          <input type="button" value="%" className='equal' onClick={handleClick}/>
          <input type="button" value="/" className='equal' onClick={handleClick}/>
        </div>

        <div>
          <input type="button" value="7" onClick={handleClick}/>
          <input type="button" value="8" onClick={handleClick}/>
          <input type="button" value="9" onClick={handleClick}/>
          <input type="button" value="*" onClick={handleClick} className='equal'/>
        </div>

        <div>
          <input type="button" value="4" onClick={handleClick}/>
          <input type="button" value="5" onClick={handleClick}/>
          <input type="button" value="6" onClick={handleClick}/>
          <input type="button" value="+" onClick={handleClick} className='equal'/>
        </div>

        <div>
          <input type="button" value="1" onClick={handleClick}/>
          <input type="button" value="2" onClick={handleClick}/>
          <input type="button" value="3" onClick={handleClick}/>
          <input type="button" value="-" className='equal' onClick={handleClick}/>
        </div>

        <div>
          <input type="button" value="00" onClick={handleClick}/>
          <input type="button" value="0" onClick={handleClick}/>
          <input type="button" value="." onClick={handleClick}/>
          <input type="button" value="=" className="equal" onClick={e=>setValue(eval(value))}/>
        </div>

      </form>
    </div>
   </div>
  )
}

export default App
