import { useState } from 'react'
import './App.css'

import Item from './components/Item'

function App() {



  return (
    <>
      <main>
        <div className='mainBlock'>

          <section className='title'>
            <h1>Todo List</h1>
          </section>

          <section className='inputBox'>
            <input type="text" />
          </section>
          
          <section className='itemBox'>
            <section className='itemList'>
              <Item />
              <Item />
              <Item />
              <Item />
            </section>
          </section>

        </div>
      </main>
    </>
  )
}

export default App