import { useRouter } from "next/navigation"

const useAuth = () => {
    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('isAuth')
        router.replace('/') 
    }


  return {
    logout
  }
}

export default useAuth