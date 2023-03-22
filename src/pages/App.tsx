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
          <Route path="/UI" element={<Home />} />
          <Route path="/UI/*" element={<div>page not found</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;