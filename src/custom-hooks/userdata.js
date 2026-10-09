import { useQuery } from "@tanstack/react-query"
import { apiclient } from "../utils/apiclient"

const Userdata = (endpoint)=>{
    const fetchusers = ()=>   apiclient.get(endpoint).then(res=>res.data);
    return (
       useQuery({
        queryKey:['users',endpoint],
        queryFn:fetchusers
       })
    )
}

export default Userdata;