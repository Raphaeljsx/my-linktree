import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
import type { Link } from "./components/Sidebar";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState<Link[]>([]);

  return (
    <div className="flex gap-4">
      <Sidebar name={name} role={role} bio={bio} setName={setName} setRole={setRole} setBio={setBio} links={links} setLinks={setLinks}/>
      <Content name={name} role={role} bio={bio}/>
    </div>
  )
}

export default App
