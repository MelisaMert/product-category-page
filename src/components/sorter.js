import { useDispatch, useSelector } from "react-redux";
import { sortByPriceAsc, sortByPriceDesc, sortByDateDesc, sortByDateAsc, activeSorter } from '../actions/product';
import '../styles/sorting.css';

const Sorter = ({ isDropdown }) => {
    const dispatch = useDispatch();
    const { activeSort } = useSelector(state => state.products);
    const className = (number) => {
        return number === activeSort ? "active-sorter" : "";
    }
    
    const getDropdownMenu = () => {
        return (<>
            <ul data-testid="dropdown-menu" className="dropdown-menu">
                <li className={className(0)} onClick={() => { dispatch(sortByPriceAsc()); dispatch(activeSorter(0)) }}>En Düşük Fiyat</li>
                <li className={className(1)} onClick={() => { dispatch(sortByPriceDesc()); dispatch(activeSorter(1)) }}>En Yüksek Fiyat</li>
                <li className={className(2)} onClick={() => { dispatch(sortByDateDesc()); dispatch(activeSorter(2)) }}>En Yeniler (A-Z)</li>
                <li className={className(3)} onClick={() => { dispatch(sortByDateAsc()); dispatch(activeSorter(3)) }}>En Yeniler (Z-A)</li>
            </ul>
        </>)
    }

    const getListMenu = () => {
        return (
            <div>
                <span className={className(0)} onClick={() => { dispatch(sortByPriceAsc()); dispatch(activeSorter(0)) }}>En Düşük Fiyat</span>
                <span className={className(1)} onClick={() => { dispatch(sortByPriceDesc()); dispatch(activeSorter(1)) }}>En Yüksek Fiyat</span>
                <span className={className(2)} onClick={() => { dispatch(sortByDateDesc()); dispatch(activeSorter(2)) }}>En Yeniler (A-Z)</span>
                <span className={className(3)} onClick={() => { dispatch(sortByDateAsc()); dispatch(activeSorter(3)) }}>En Yeniler (Z-A)</span>
            </div>
        )
    }

    return (<>
        {isDropdown ? getDropdownMenu() : getListMenu()}
    </>)
}

export default Sorter;