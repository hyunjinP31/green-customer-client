import './App.css';
import CustomerList from './component/CustomerList';
import Header from './component/Header';
import Footer from './component/Footer';
import DetailCustomer from './component/DetailCustomer';
import { Route, Routes} from 'react-router-dom';
import CreateCustomer from './component/CreateCustomer';
import UpdateCustomers from './component/UpdateCustomer';
import SearchCustomer from './component/SearchCustomer';
import {useState} from 'react';
import EditCustomer from './component/EditCustomer';
import CustomerContainer from './component/CustomerContainer';
import CreateCustomerContainer from './component/CreateCustomerContainer';
import JoinForm from './component/JoinForm';
import Login from './component/Login';


function App() {
  const [ isOn, setIsOn ] = useState(false);
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
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

