import HomeSection from "./pages/HomeSection";
import SearchSection from "./pages/SearchSection";
import { BrowserRouter, Route , Routes } from "react-router-dom";

import './index.css';
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeSection/>}/>
          <Route path="/home" element={<HomeSection/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
