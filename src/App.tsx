import { useState } from 'react'
import './App.css'

import Item from './components/ItemBox/Item'
import type { Task } from './components/ItemBox/Item'; // Tem que escrever o tipo de variavel antes de importar, exemplo o type

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [curDescription, setCurDescription] = useState('');
  const [onlyNotDone, setOnlyNotDone] = useState(false);

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
    const newList = taskList.filter(task => task.id !== id);
    setTaskList(newList);
  }

  function editTask(id: number) {
    const newTask: string | null = prompt("Edit the task here: ")
    if (newTask === null) {
      return
    }

    const newList: Task[] = taskList.map((item: Task) => { // Todo loop que o map faz ele é OBRIGADO a retornar algo.
    // claro tu tá criando uma lista e se tiver um caso de ele n retornar nada n vai dar certo xc
      
      {
        if (item.id === id) {
          return {
            id: item.id,
            description: newTask,
            done: item.done
          }
        } else {
          return item
        }
      }
    
    })

    setTaskList(newList)

  }

  function updateTaskDone(id: number) {
    
    const newList: Task[] = taskList.map((item: Task) => { // Todo loop que o map faz ele é OBRIGADO a retornar algo.
    // claro tu tá criando uma lista e se tiver um caso de ele n retornar nada n vai dar certo xc
      
      {
        if (item.id === id) {
          return {
            id: item.id,
            description: item.description,
            done: item.done ? false : true, // isso aqui é verdadeiro (está ativado) ? se sim false, se não, true
            // basicamente inverte o done
            // ex: idade >= 16 ? "Pode votar" : "Não pode votar"
          }
        } else {
          return item
        }
      }
    
    })

    setTaskList(newList)
  }

  function renderItem(item: Task) {
    return (
      <div key={item.id}>
        <Item
        id={item.id}
        description={item.description}
        done={item.done}
        onDelete={deleteTask}
        onEdit={editTask}
        onUpdate={updateTaskDone}
        />
      </div>
    )
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
              
              <div style={{marginTop: '10px'}}>
                <input
                type="checkbox"
                style={{width: '23px', height: '23px', marginLeft: '20px'}}
                checked={onlyNotDone}
                onChange={() => {setOnlyNotDone(onlyNotDone ? false : true)}}
                />
                <label htmlFor="" style={{color: 'white', marginLeft: '10px'}}>Only not done yet</label>
              </div>
              
          </section>
          
          <section className='itemBox'>
            <section className='itemList'>
              {
                taskList.map((item) => {
                  
                  if (!onlyNotDone) { // Render normal
                    return renderItem(item)
                  }
                  
                  if (item.done === false) {
                    return renderItem(item)
                  }
                  
                  
                })
              }
            </section>
          </section>

        </div>
      </main>
    </>
  )
}

export default App