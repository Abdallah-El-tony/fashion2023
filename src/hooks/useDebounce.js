import { useEffect } from "react"
import { useState } from "react"

const useDebounce = (value,delay=1000) => {
  const [debounceValue , setDebounceValue] = useState(value)

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setDebounceValue(value)
    },delay)
    return clearInterval(timeOut)
  },[value,delay])

  return {debounceValue,setDebounceValue}
}

export default useDebounce