import './i18n';
import { HashRouter, Route, Routes } from "react-router";
import Homepage from './pages/Homepage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  )
}

export default App