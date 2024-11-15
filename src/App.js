import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removed duplicate import
import {HomePage} from "./pages/HomePage";
import Task from './pages/Task.js';
import {Header} from "./components/Header";
import CalculateProfit from './pages/CalculateProfit';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/task" element={<Task />} />
          <Route path="/calculate-profit" Component={CalculateProfit} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;