import { useState } from 'react'
import './App.css'

import Item from './components/ItemBox/Item'
import type { Task } from './components/ItemBox/Item'; // Tem que escrever o tipo de variavel antes de importar, exemplo o type

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [curDescription, setCurDescription] = useState('');

  function handleConfirmation(event: any) {
    if (event.key === 'Enter') {
      
      addTask()

    }
  }

  function addTask() {
      let item: Task = {
        id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
        description: curDescription,
        done: false
      }

      setTaskList([...taskList, item])
      setCurDescription('')
  }

  function deleteTask(id: number) {
    const novaLista = taskList.filter(task => task.id !== id);
    setTaskList(novaLista);
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
              className='inputMain'
              type="text"
              value={curDescription}
              onChange={(event) => {setCurDescription(event.target.value)}}
              onKeyDown={handleConfirmation}
              />
              <button onClick={addTask}>Add Task</button>
          </section>
          
          <section className='itemBox'>
            <section className='itemList'>
              {
                taskList.map((item) => (
                  <div key={item.id}>
                    <Item id={item.id} description={item.description} done={item.done} onDelete={deleteTask} />
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