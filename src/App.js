import { useState } from 'react';
import './App.css';

const data = [
  {
    q1:"How are you?",
    a1:"I am good,thanks for asking"
  },
  {
    q1:"Do you read newspapers?",
    a1:"Yes,I do but not everyday"
  },
  {
    q1:"Are you React developer",
    a1:"Yes,I am"
  },
  {
    q1:"Which you are working for?",
    a1:"Msys Technologies PVT LTD"
  }
]

function App() {
  const  [selected,setSelected] = useState(null);
  const toggle = (i) => {
    if(selected===i){
      return setSelected(null)
    }
      setSelected(i)
    
  }
  return (
    <div className="wrapper">
      <div className='accordian'>
       {data.map((each,i)=>{
        return (
          <div className='items' key={i} onClick={()=>toggle(i)}>
            <div className='title'>
            <h3>{each.q1}</h3>
            <span>{selected===i ? "-" : "+"}</span>
            </div>
             
             <p className={selected===i ? "content show" : "content"}>{each.a1}</p>
           </div>
        )
       })}
      </div>
    </div>
  );
}

export default App;
