import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className="flex gap-4">
      <Sidebar name={name} role={role} bio={bio} setName={setName} setRole={setRole} setBio={setBio}/>
      <Content name={name} role={role} bio={bio}/>
    </div>
  )
}

export default App
