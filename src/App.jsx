import { useState } from "react"
import "./App.css"
import Navbar from "./componenets/navbar"
import Showusers from "./componenets/showusers"
import Userbox from "./componenets/user-box"

function App() {
  const [selecteduser ,setselecteduser] = useState(null);


  return (
    <main className="app-shell">
      <Navbar />
      <Userbox user={selecteduser} onupdate={setselecteduser} />
      <Showusers onupdate={setselecteduser} />
    </main>
  )
}

export default App
