"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ProtectedMiddleware = Component => {
  const ProtectedComponent = props => {
    const router = useRouter()
    const isAuth = localStorage.getItem("isAuth");

    useEffect(() => {
        if (!isAuth) {
          router.replace("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth])

    if (isAuth) {
      return <Component {...props} />
    }
    return <><h1>Loading...</h1></>
  }
  return ProtectedComponent
}

export default ProtectedMiddleware