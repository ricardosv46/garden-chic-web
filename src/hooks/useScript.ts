import { useState, useEffect } from 'react'

interface IProps {
  url: string
  name: any
}

const useScript = ({ url, name }: IProps) => {
  const [lib, setLib] = useState({})

  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true
    script.onload = () => setLib({ [name]: window[name] })

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return lib
}

export default useScript
