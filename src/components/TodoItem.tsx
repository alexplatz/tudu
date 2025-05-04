import React from "react"
import { JSX } from "react"
import { useState } from "react"
import styles from "#styles/TodoItem.module.css"

interface CheckboxProps {
  label: string,
  value: boolean
}

export const TodoItem = ({label, value}: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(value)

  const handleChange = () => setChecked(!checked) 
  
  return (
    <label>
      <input
        className={styles.item}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  )
}
