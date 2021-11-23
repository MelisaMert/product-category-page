import React from 'react';
import { useSelector } from 'react-redux';
import generateProductData from './mock/products';
import Header from './components/header';
import ProductList from './components/product-list';
import Filter from './components/filter';
import DeleteModal from './components/delete-modal';
import SubHeader from './components/sub-header';
import * as api from './api/index';
import './App.css';

export const getCartData = () => {
  return api.getStorage('Cart') ? JSON.stringify(api.getStorage('Cart')) : JSON.stringify([]);
}

(async function() {
    const products = generateProductData(48);
    api.setStorage('Products', products);
    api.setStorage('Cart', getCartData());
})();

const App = () => {
  const {isDisplayDeleteModal} = useSelector(state => state.cart);

  return (<>
    <Header />
    {
      isDisplayDeleteModal && <DeleteModal />
    }
    <SubHeader />
    <div className="product-list">
        <Filter />
        <ProductList />
      </div>
  </>);
}

export default App;
