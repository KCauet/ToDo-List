import { useState } from 'react'
import './App.css'

import Item from './components/Item'
import type { Task } from './components/Item'; // Tem que escrever o tipo de variavel antes de importar, exemplo o type


function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [curDescription, setCurDescription] = useState('');

  function handleConfirmation(event: any) {
    if (event.key === 'Enter') {

      let item: Task = {
        id: taskList.length,
        description: curDescription
      }

      setTaskList([...taskList, item])
      
    }
  }

  return (
    <>
      <main>
        <div className='mainBlock'>

          <section className='title'>
            <h1>Todo List</h1>
          </section>

          <section className='inputBox'>
            <input 
              type="text"
              value={curDescription}
              onChange={(event) => {setCurDescription(event.target.value)}}
              onKeyDown={handleConfirmation}
              />
          </section>
          
          <section className='itemBox'>
            <section className='itemList'>
              {
                taskList.map((item, index) => (
                  <div key={index}>
                    <Item id={index} description={item.description}/>
                  </div>
                ))
              }
            </section>
          </section>

        </div>
      </main>
    </>
  )
}

export default App