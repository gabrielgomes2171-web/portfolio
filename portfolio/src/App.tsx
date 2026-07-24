import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CursorGlow } from "./components/CursorGlow";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";
import { AuroraBackground } from "./components/AuroraBackground";



function App() {
return (
    <BrowserRouter>
      <AuroraBackground />
      <CursorGlow />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />
      </Routes>

    </BrowserRouter>
  );
}
export default App;