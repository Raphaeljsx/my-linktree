import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex gap-4 min-h-screen bg-gray-100 p-6">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
