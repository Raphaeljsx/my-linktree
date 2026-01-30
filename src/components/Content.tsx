const Content = ({name, role, bio}: {name: string, role: string, bio: string}) => {
  return(
    <div className="w-8/12 p-4 bg-blue-300 min-h-screen">
      <h1>Seu nome: {name}</h1>
      <h2>Seu cargo: {role}</h2>
      <p>Sua biografia: {bio}</p>
    </div>
  )
}

export default Content;