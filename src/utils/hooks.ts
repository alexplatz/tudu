import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [storage, setStorage] = useState(() => {
    const storedValue = localStorage.getItem(key)

    return storedValue ?
      JSON.parse(storedValue) :
      defaultValue
  })

  useEffect(
    () => storage ?
      localStorage.setItem(key, JSON.stringify(storage)) :
      undefined,
    [key, storage]
  )

  return [storage, setStorage]
}
