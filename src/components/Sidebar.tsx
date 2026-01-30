const Sidebar = ({name, role, bio, setName, setRole, setBio}: {name: string, role: string, bio: string, setName: (name: string) => void, setRole: (role: string) => void, setBio: (bio: string) => void}) => {
  
  return(
    <>
    <div className="sidebar w-4/12 p-4 bg-red-300 min-h-screen">
      <label htmlFor="name" 
      className="block mb-2 text-sm font-medium text-gray-900">
        Nome
      </label>
      <input 
      type="text" 
      id="name" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Digite seu nome" required />

      <label htmlFor="role" 
      className="block mb-2 text-sm font-medium text-gray-900">
        Cargo
      </label>
      <input 
      type="text" 
      id="role" 
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Digite seu cargo" required />

      <label htmlFor="bio" 
      className="block mb-2 text-sm font-medium text-gray-900">
        Biografia
      </label>
      <textarea id="bio" 
      resize-none
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Digite sua biografia" required />
    </div>
    </>
  )
}
export default Sidebar;