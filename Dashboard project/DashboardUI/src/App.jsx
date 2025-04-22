import Sidepanel from "./components/SidePannel/Sidepanel";
import "./App.css"
import Maincontent from "./components/Maincontent/Maincontent";
import Client from "./components/Clients/Clients";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { MyContext } from "./context/DarkModeContext";
import { useContext } from "react";

function App(){
  const {isDark, setIsDark} = useContext(MyContext);

  return <div className={`${isDark ? 'dark' : ''} flex bg-slate-300 h-[100vh] w-[100vw] dark:bg-slate-800`}>
      <Sidepanel/>
      <Routes>
        <Route path="/" element={<Maincontent/>} />
        <Route path="/client" element={<Client/>} />
      </Routes>
      {/* <Router>
      </Router> */}
    </div>;
}

export default App;