import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removed duplicate import
import {HomePage} from "./pages/HomePage";
import {Task} from "./pages/Task";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;