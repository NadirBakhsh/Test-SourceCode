import { fetcher } from "@/lib/apisCalls"
import useSWR from "swr"

function useEmployee (id) {
    const { data, error, isLoading } = useSWR(`/api/employee/${id}`, fetcher)
   
    return {
       data,
      isLoading,
      isError: error
    }
  }

  export default useEmployee