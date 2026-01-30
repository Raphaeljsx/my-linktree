import { Input } from "./Input";
import { Textarea } from "./Textarea";

interface SidebarProps {
  name: string;
  role: string;
  bio: string;
  setName: (name: string) => void;
  setRole: (role: string) => void;
  setBio: (bio: string) => void;
  links: Link[];
  setLinks: (links: Link[]) => void;
}

export interface Link {
  id: string;
  url: string;
  title: string;
}

const Sidebar = (props: SidebarProps) => {
  const { name, role, bio, setName, setRole, setBio, links, setLinks } = props;

// Função para atualizar os links
  const handleLinkChange = (linkId: string, field: string, value: string) => {
    const updatedLinks = links.map((link) => {
      if(linkId === link.id) {
        return { ...link, [field]: value }
      }
      return link
    })
    setLinks(updatedLinks)
  }
  // Função para adicionar um novo link
  const handleAddLink = () => {
    const newLink: Link = { 
      id: "link-" + (links.length + 1),
      url: "",
      title: "",
      }
      setLinks([...links, newLink])
  }
 
  return (
    <>
      <div className="sidebar w-4/12 p-4 bg-red-300 min-h-screen">
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          name={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          id="role"
          type="text"
          placeholder="Digite seu cargo"
          name={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <Textarea bio={bio} onChange={(e) => setBio(e.target.value)} id="bio" placeholder="Digite sua biografia" />
        <div>
          <h2 className="text-lg font-medium mb-2">Links</h2>
          <button onClick={() => { handleAddLink() }}>Adicionar link</button>
            {
            links.map((link)=> ( 
            <div key={link.id}>
              <Input
                type="url"
                id={link.id}
                placeholder="Digite o título do link"
                name={link.title}
                onChange={(e) => {
                  handleLinkChange(link.id, "title", e.target.value)                  
                }}
              />

              <Input
                type="url"
                id={link.id}
                placeholder="URL do link"
                name={link.url}
                onChange={(e) => {
                  handleLinkChange(link.id, "url", e.target.value)                  
                }}
              />
            </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
