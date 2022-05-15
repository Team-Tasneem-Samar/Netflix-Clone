import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import FavList from "./FavList";


function App() {
  return (
   <>

     <h1>Welcome to Movies Web app</h1>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
   </>
  );
}

export default App;
