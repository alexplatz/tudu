import React, { ChangeEvent, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem"
import styles from '#styles/TodoList.module.css'

type TodoItem = {
    id: number,
    label: string,
    value: boolean
}

 export const TodoList = () => {
  // set Todos after checking state or on user update
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id: Date.now(),
        label: text,
        value: false
      }
    ])
    setText('')
  }

  return (
    <main className={styles.flexContainer}>
      <div>
        <ul className={styles.todoList}>{
          todos.map(({id, label, value}) =>
            <li key={id}>
              <TodoItem
                label={label}
                value={value}
              />
            </li>
          )}
        </ul>
        <TodoInput
          handleSubmit={handleSubmit}
          setText={setText}
          text={text}
        />
      </div>
    </main>
  )
}
