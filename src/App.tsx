import "./App.css";
import { Chats } from "./components/Chats";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-4">
      <Navbar />
      <div className="px-4">
        <Chats />
      </div>
    </div>
  );
}

export default App;
