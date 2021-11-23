import { useSelector } from 'react-redux';
import Sorter from './sorter';
import '../styles/sub-header.css';

const SubHeader = () => {
    const { searchText } = useSelector((state) => state.products);

    return (<>
        <div className="sub-header">
            <div className="product-name">
                <span>Apple MacBook</span>
                <p>
                    <span className="search-word-header">Aranan Kelime:</span>
                    <span data-testid="search-text" className="search-word">{searchText}</span>
                </p>
            </div>
            <label className="dropdown">
                <div className="sorting-button">
                    Sıralama
                </div>
                <input 
                  type="checkbox"
                   className="dropdown-input"
                 />
                <Sorter isDropdown={true}/>
            </label>
        </div>
    </>)
}

export default SubHeader;