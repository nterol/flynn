import { useEffect, useRef, useState } from 'react'

function useIntersectionObserver(ref) {
  const observer = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setIsIntersecting(true)
        else setIsIntersecting(false)
      },
      { threshold: 1 }
    )

    if (ref.current) {
      observer.current.observe(ref.current)
    }
  }, [])

  return isIntersecting
}

export default useIntersectionObserver
