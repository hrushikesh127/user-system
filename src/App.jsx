import { useState } from "react"
import "./App.css"
import Navbar from "./componenets/navbar"
import Showusers from "./componenets/showusers"
import Userbox from "./componenets/user-box"

function App() {
  const [selecteduser ,setselecteduser] = useState(null);
  const [search ,setsearch] = useState("");


  return (
    <main className="app-shell">
      <Navbar setsearch={setsearch}/>
      <Userbox user={selecteduser} onupdate={setselecteduser} />
      <Showusers search={search} onupdate={setselecteduser} />
    </main>
  )
}

export default App
