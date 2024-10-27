import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './components/productsList';
import ProductsForm from './components/productsForm';
import CustomerList from './components/customerList';
import CustomerForm from './components/customerForm';
import HoadonList from './components/hoadonList';
import HoadonForm from './components/hoadonForm';
import TrangchuList from './components/trangchuList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sanpham" element={<ProductsList />} />
        <Route path="/sanpham/new" element={<ProductsForm/>}/>
        <Route path="/sanpham/edit/:ma_sp" element={<ProductsForm/>}/>

        <Route path="/khachhang" element={<CustomerList />} />
        <Route path="/khachhang/new" element={<CustomerForm/>}/>
        <Route path="/khachhang/edit/:ma_kh" element={<CustomerForm/>}/>

        <Route path="/donhang" element={<HoadonList />} />

        <Route path="/" element={<TrangchuList />} />


      </Routes>
    </Router>
  );
};

export default App;
