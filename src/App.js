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


function App() {
  const [ isOn, setIsOn ] = useState(false);
  return (
    <div className="App">
      <Header isOn={isOn} setIsOn={setIsOn} />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/detailview/:no" element={<DetailCustomer />} />
          <Route path="/write" element={<CreateCustomer/>} />
          <Route path="/updateCustomers/:no" element={<EditCustomer />} />
          <Route path="/search" element={<SearchCustomer/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

