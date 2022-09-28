import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import AddContact from './Components/AddContact';
import UpdateContact from './Components/UpdateContact';
import NavContact from './Components/NavContact';

function App() {
  return (
    <div>
      <NavContact/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listContact' element={<ListContact/>}/>
        <Route path='/addContact' element={<AddContact/>}/>
        <Route path='/updateContact/:id' element={<UpdateContact/>}/>
      </Routes>
    </div>
  )
}

export default App;
