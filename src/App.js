import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import DetailCustomer from './component/DetailCustomer';
import { Route, Routes} from 'react-router-dom';
import SearchCustomer from './component/SearchCustomer';
import {useEffect, useState} from 'react';
import EditCustomer from './component/EditCustomer';
import CustomerContainer from './component/CustomerContainer';
import CreateCustomerContainer from './component/CreateCustomerContainer';
import JoinForm from './component/JoinForm';
import Login from './component/Login';
import CreateGallery from './component/CreateGallery';
import { getCookie } from './util/cookie';
import { useDispatch } from 'react-redux';
import { setLogin } from './modules/logincheck';
import GalleryListContainer from './component/GalleryListContainer';


function App() {
  const [ isOn, setIsOn ] = useState(false);
  const dispatch = useDispatch();
  const uname = getCookie('username');
  useEffect(()=>{
    if(uname){
      dispatch(setLogin());
    }
  },[])
  return (
    <div className="App">
      <Header isOn={isOn} setIsOn={setIsOn} />
        <Routes>
          <Route path="/" element={<CustomerContainer />} />
          <Route path="/detailview/:no" element={<DetailCustomer />} />
          <Route path="/write" element={<CreateCustomerContainer/>} />
          <Route path="/updateCustomers/:no" element={<EditCustomer />} />
          <Route path="/search" element={<SearchCustomer/>} />
          <Route path="/join" element={<JoinForm />} />
          <Route path="/login" element={<Login/>} />
          <Route path='gallery' element={<CreateGallery />} />
          <Route path='gallerylist' element={<GalleryListContainer/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

