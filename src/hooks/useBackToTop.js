import { useEffect } from "react"

export const useBackToTop = (value)=>{
    useEffect(()=>{
      window.scrollTo({
        top: value ? 332 : 0,
        behavior: 'smooth',
      });
    },[value])
}
