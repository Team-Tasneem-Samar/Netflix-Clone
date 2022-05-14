import { Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
   <>

     <h1>Welcome to Movies Web app</h1>
     

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/trending" element={<FavMovie />} /> */}
      </Routes>
   </>
  );
}

export default App;
