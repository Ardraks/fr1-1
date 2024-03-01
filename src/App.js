import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";
import Topbar from "./components/topbar/Topbar";


function App() {
  const { user } = useContext(Context);
  return (
    <div>
    
    <BrowserRouter>
    <Topbar/>
    <Routes>
       <Route  path='/'element={ <Home />}></Route>
        <Route path="/register"element={<Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write />: <Register />}></Route>
        <Route path="/settings"element={user ? <Settings /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
