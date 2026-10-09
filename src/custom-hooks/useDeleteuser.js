import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiclient } from '../utils/apiclient'

export default function useDeleteuser() {
    const queryclient = useQueryClient();
  return useMutation({
    mutationFn:({id})=> apiclient.delete(`/users/${id}`),
    onSuccess:(_,{id})=>{
        queryclient.setQueryData(['users','/users'],(users)=>
        users?.filter((user)=>user.id !==id))

    }
  })
}
