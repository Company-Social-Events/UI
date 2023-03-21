import '../styles/App.css';
import Home from './Home';
import {
  Routes,
  Route,
  BrowserRouter 
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;