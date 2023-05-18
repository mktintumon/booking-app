import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/HotelList"
import Hotel from "./pages/Hotel"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotelLists" element={<List/>}/>
        <Route path="/hotel/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
