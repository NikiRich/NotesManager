import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import Delete from "./Functionality/Delete";
import Update from "./Functionality/Update";
import Display from "./Functionality/Display";
import Add from "./Functionality/Add";
import Home from "./Functionality/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/display' element={<Display/>}/>
                    <Route path='/add' element={<Add/>}/>
                    <Route path='/delete' element={<Delete/>}/>
                    <Route path='/update' element={<Update/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
