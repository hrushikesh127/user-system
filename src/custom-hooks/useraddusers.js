import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiclient } from "../utils/apiclient";

function useAddusers() {
    const queryclient = useQueryClient();
    return(
        useMutation({
            mutationFn:(newtodo)=> apiclient.post('/users',newtodo),
            onSuccess:(response)=>{
                queryclient.setQueryData(['users','/users'] , (oldusers)=>[
                    ...oldusers,response.data
                ])

            }
        })
    )
    
}
export default useAddusers;