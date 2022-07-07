import './App.css';
import CustomerList from './component/CustomerList';
import Header from './component/Header';
import Footer from './component/Footer';
import DetailCustomer from './component/DetailCustomer';
import { Route, Routes} from 'react-router-dom';
import CreateCustomer from './component/CreateCustomer';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/detailview/:no" element={<DetailCustomer />} />
          <Route path="/write" element={<CreateCustomer/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

