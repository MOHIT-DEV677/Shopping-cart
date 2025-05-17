import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart"
import {useState,useContext, createContext} from 'react'
export const cartcontext=createContext();
function App() {
const [cart,setcart]=useState([]);
  return (
    <div>
      <cartcontext.Provider value={{cart,setcart}}>
      <BrowserRouter>
          <Header cart={cart}/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      </cartcontext.Provider>
      </div>
  );
}

export default App
