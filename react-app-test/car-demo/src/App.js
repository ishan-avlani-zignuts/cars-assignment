import './App.css';
import UserLogin from './pages/user/UserLogin'
import UserSignup from './pages/user/UserSignup'
import React from 'react';
import Home from './pages/user/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Admindashboard from './pages/admin/Admindashboard';
 import Adminaddcar from './pages/admin/Adminaddcar';
 import Displaydata from './pages/user/Displaydata';
 import Admincarmanage from './pages/admin/Admincarmanage';
import Adminupdatecar from './pages/admin/Adminupdatecar';
import Cardetails from './pages/user/Cardetails';
import Userdashboard from './pages/user/Userdashboard';
import Confirmation from './pages/user/Confirmation';
import {AuthProvider} from './context/Authcontext';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/Store';
import Adminlogin from './pages/admin/Adminlogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
    <div className="App" >
      <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Routes>

          <Route path='/' element={<Home> </Home>}></Route>
          <Route path='/userlogin' element={<UserLogin></UserLogin>}></Route>          
          <Route path='/usersignup' element={<UserSignup></UserSignup>}></Route>
           <Route path='/admindashboard' element={<Admindashboard></Admindashboard>}></Route>
           <Route path='/adminaddcar' element={<Adminaddcar></Adminaddcar>}></Route>
          <Route path='/displaydata' element={<Displaydata></Displaydata>}></Route>
          <Route path='/admincarmanage' element={<Admincarmanage></Admincarmanage>}></Route>
          <Route path='/adminupdatecar/:id' element={<Adminupdatecar></Adminupdatecar>}></Route>   
          <Route path='/cardetails/:id' element={<Cardetails></Cardetails>}></Route>
          <Route path='/userdashboard' element={<Userdashboard></Userdashboard>}></Route>
          <Route path='/confirmation' element={<Confirmation></Confirmation>}></Route>
          <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
          </Routes>
          </AuthProvider>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;