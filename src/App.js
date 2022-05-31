import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;
