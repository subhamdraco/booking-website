import React, { useState } from 'react';
import Home from "./components/Home";
import Hotels from "./components/Hotel";
import Flight from "./components/Flights";
import Buses from "./components/Buses";
import Holiday from "./components/Holiday";
import Navbar from './components/Navbar';
 
import './App.css'
 
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
    <Navbar current= {setCurrentPage}/>
    {currentPage === 'home' && <Home page= {setCurrentPage}/>}
    {currentPage === 'flights' && <Flight />}
    {currentPage === 'hotels' && <Hotels />}
    {currentPage === 'buses' && <Buses />}
    {currentPage === 'holiday' && <Holiday />}
    </>
  );
}
 
export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);