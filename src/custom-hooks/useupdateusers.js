import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiclient } from "../utils/apiclient";

function useUpdateusers() {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:({id, newuser})=> apiclient.put(`/users/${id}` , newuser),
        onSuccess:(response,{id})=>{
            queryclient.setQueryData(['users','/users'],(users)=>
                users?.map((user)=>user.id === id ? response.data : user)
            )
        },
        onMutate: async ({id,newuser}) =>{
            await queryclient.cancelQueries({queryKey:['users','/users']})
            const previousUsers = queryclient.getQueryData(['users','/users'])
            queryclient.setQueryData(['users','/users'],(users)=>
                users?.map((user)=>user.id === id ? {...user, ...newuser} : user)
            )
            return {previousUsers};
        },
        onError :(error , {id} ,context)=>{
            if (context) {
                queryclient.setQueryData(['users','/users'], context.previousUsers);
            }
        }

    })
    
}
export default useUpdateusers;