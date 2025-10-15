import "./App.css";
import { Chat } from "./components/Chat";
import { ChatsList } from "./components/ChatsList";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex gap-3 px-8 py-4">
        <ChatsList />
        <Chat />
      </div>
    </div>
  );
}

export default App;
