import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';


function App() {
  return (
    <>
    <NoteState>
        <Router>
        <Navbar/>
        <Alert message="This is amazing React Course"/>
        <div className="container">
          <Routes>
              {/* <Route path="/"><Home/></Route>  Never Use This */}
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>

          </Routes>
          </div>
        </Router>
    </NoteState>

    </>
);}
export default App;
