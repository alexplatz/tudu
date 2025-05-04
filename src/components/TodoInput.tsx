import React, { ChangeEvent } from "react";
import styles from '#styles/TodoInput.module.css'

interface TodoInputProps {
  handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void,
  setText: Function,
  text: string,
}

export const TodoInput = ({handleSubmit, setText, text}: TodoInputProps) =>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      className={styles.textbox}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  </form>

