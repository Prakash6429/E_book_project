import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>

        

    </>

);}
export default App;
