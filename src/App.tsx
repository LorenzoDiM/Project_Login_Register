import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginComponent from "./LoginComponents/Login";
import Register from "./RegisterComponents/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
