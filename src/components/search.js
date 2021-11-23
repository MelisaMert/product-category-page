import { useDispatch, useSelector } from 'react-redux';
import {searchByName} from '../actions/product';
import '../styles/search.css';

const Search = () => {    
    const { searchText} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(searchByName(e.target.value))
    }

    return (
        <input 
           data-testid="search-input"
           className="search-button"
           value={searchText} 
           onChange={onChange} 
           placeholder="25 milyon’dan fazla ürün içerisinde ara"
        />
    )
}

export default Search;