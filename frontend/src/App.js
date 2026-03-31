import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DownloadPage } from "./pages/DownloadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
