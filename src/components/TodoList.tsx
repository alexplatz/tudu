import React, { ChangeEvent, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem"
import styles from '#styles/TodoList.module.css'
import { TodoItemData } from '#types'
import { useLocalStorage } from "#hooks";

export const TodoList = () => {
  const [value, setValue] = useLocalStorage<TodoItemData[]>('todos', [])
  const [text, setText] = useState<string>('');
  // const [todos, setTodos] = useState<TodoItemData[]>(value);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValue([
      ...value,
      {
        id: Date.now(),
        label: text,
        value: false
      }
    ])
    setText(() => '')
  }

  return (
    <main className={styles.flexContainer}>
      <div>
        <ul className={styles.todoList}>{
          value.map(({id, label, value}: TodoItemData) =>
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
