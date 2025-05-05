import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)

    return storedValue ?
      JSON.parse(storedValue) :
      defaultValue
  })

  useEffect(
    () => value ?
      localStorage.setItem(key, JSON.stringify(value)) :
      undefined,
    [key, value]
  )

  return [value, setValue]
}
