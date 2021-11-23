import {React, useState} from 'react';
import '../styles/pagination.css';

const Pagination = ({ pageSize, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / pageSize); i++) {
      pageNumbers.push(i);
  }

  const onClick = (number) => {
     setActivePage(number);
     paginate(number);
  }
  
  const className = (number) => {
    return number === activePage ? "pagination-active-item" : "pagination-item";
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li 
             key={number}
             onClick = {() => onClick(number)}
             className={className(number)}
             >
            <a href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;