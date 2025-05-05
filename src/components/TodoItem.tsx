import { ChangeEvent } from "react"
import { JSX } from "react"
import styles from "#styles/TodoItem.module.css"

interface TodoItemProps {
  label: string,
  value: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const TodoItem = ({label, value, handleChange}: TodoItemProps): JSX.Element => {
  return (
    <label>
      <input
        className={styles.item}
        type="checkbox"
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      {label}
    </label>
  )
}
