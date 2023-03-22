import '../styles/App.css';
import Home from './Home';
import {
  Routes,
  Route,
  BrowserRouter 
} from "react-router-dom";
import 'dayjs/locale/ro';
import dayjs from 'dayjs';

function App() {
  dayjs.locale('ro');
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