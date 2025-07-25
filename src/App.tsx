import './i18n';
import { HashRouter, Route, Routes } from "react-router";
import Homepage from './pages/Homepage';
import Experience from './pages/Experience';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"    element={<Homepage />} />
        <Route path="/exp" element={<Experience />} />
      </Routes>
    </HashRouter>
  )
}

export default App