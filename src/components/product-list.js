import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './product';
import Pagination from '../components/pagination'
import '../styles/product-list.css';

const ProductList = () => {
   const pageSize = 12
   const { products, searchText } = useSelector(state => state.products);
   const [currentPage, setCurrentPage] = useState(1);
   const indexOfLastPost = currentPage * pageSize;
   const indexOfFirstPost = indexOfLastPost - pageSize;
   var activeProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
   let currentProducts = activeProducts.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = pageNumber => setCurrentPage(pageNumber);

   return (<>
      <div>
         <div className="product-wrapper">
            {
               currentProducts.length > 0 ?
                  currentProducts.map((product, index) => (
                     <Product
                        key={index}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        currency={product.currency}
                        date={product.date}
                        colors={product.colors}
                        brand={product.brand}
                        picture={product.picture}
                        smallImage={product.smallImage}
                     />
                  )) : <div className="empty-product-list"><span>Herhangi bir ürün bulunmamaktadır</span></div>
            }
         </div>
         <div className="pagination-wrapper">
            <Pagination
               pageSize={pageSize}
               totalPosts={activeProducts.length}
               paginate={paginate}
            />
         </div>
      </div>
   </>)
}

export default ProductList;