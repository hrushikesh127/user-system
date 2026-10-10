import './showusers.css'
import Userdata from '../custom-hooks/userdata'
import useDeleteuser from '../custom-hooks/useDeleteuser'

export default function Showusers({search,onupdate}) {
    const { data: users, error, isPending, isError } = Userdata('/users')
    const userdeletemutation = useDeleteuser();

    if (isPending) return <p className="users-status">Loading users...</p>
    if (isError) return <p className="users-status users-status--error">Could not load users: {error.message}</p>
    const handledelete =(id) =>{
        console.log(id);
        userdeletemutation.mutate({id});

    }
    const filteredusers = users.filter((user)=>(
        user.name.toLowerCase().includes(search.toLowerCase())


    ))

    return (
        <section className="users-section">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Directory</p>
                    <h2>Users</h2>
                </div>
                <span className="user-count">{users.length} users</span>
            </div>
            <div className="users-grid">
                {filteredusers?.map((user,index) => (
                    <article key={index} className="user-card">
                        <h3>{user.name}</h3>
                        <h4>@{user.username}</h4>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                        <p>{user?.website}</p>
                        <button onClick={()=>onupdate({...user})}>Update</button>
                        <button className='delete' onClick={()=>handledelete(user.id)}>Delete</button>
                    </article>
                ))}
            </div>
        </section>
    )
}
