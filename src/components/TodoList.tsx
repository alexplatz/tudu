import { ChangeEvent, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem"
import styles from '#styles/TodoList.module.css'
import { TodoItemData } from '#types'
import { useLocalStorage } from "#hooks";

export const TodoList = () => {
  const [storage, setStorage] = useLocalStorage<TodoItemData[]>('todos', [])
  const [text, setText] = useState<string>('');
  const [deleteMap, setDeleteMap] = useState<Map<number, number>>(new Map())

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStorage([
      ...storage,
      {
        id: Date.now(),
        label: text,
        value: false
      }
    ])
    setText(() => '')
  }

  const handleToggle = (id: number, value: boolean) => {
    if (!value) {
      setDeleteMap(deleteMap.set(id, window.setTimeout(() => setStorage(storage.filter((todo: TodoItemData) => todo.id !== id)), 3000)))
    } else {
      console.log(id, deleteMap)
      clearTimeout(deleteMap.get(id))
      setDeleteMap(() => {
        deleteMap.delete(id)
        return deleteMap
      })
    }
    setStorage(storage.map((todo: TodoItemData) => todo.id === id ? {...todo, value: !value}: todo))
  }

    
  return (
    <main className={styles.flexContainer}>
      <div>
        <ul className={styles.todoList}>{
          storage.map(({id, label, value}: TodoItemData) =>
            <li key={id}>
              <TodoItem
                label={label}
                value={value}
                handleChange={() => handleToggle(id, value)}
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
