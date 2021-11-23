import Sorter from "../components/sorter";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByBrand, filterByColor } from '../actions/product';
import * as api from '../api/index';
import '../styles/filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  let products = api.getStorage('Products');

  useEffect(() => {
    dispatch(filterByBrand(brands));
  }, [brands, dispatch])

  useEffect(() => {
    dispatch(filterByColor(colors));
  }, [colors, dispatch])

  const selectableFilters = {
    colors: [],
    brands: []
  }

  products?.forEach(product => {
    if (!selectableFilters.brands.includes(product.brand)) {
      selectableFilters.brands.push(product.brand)
    }

    product.colors.forEach((color) => {
      if (!selectableFilters.colors.includes(color)) {
        selectableFilters.colors.push(color)
      }
    })
  })

  const createBrand = (brand) => {
    let brandList = [];

    if (!brands.includes(brand)) {
      brandList = [...brands, brand];
    } else {
      brandList = [...brands.filter(bra => bra !== brand)]
    }

    setBrands(brandList);
  }

  const getColorFilterStyle = (color) => {
    return colors.includes(color) ? '#FF6000' : 'black';
  }

  const getBrandFilterStyle = (brand) => {
    return brands.includes(brand) ? '#FF6000' : 'black';
  }

  const createColor = (color) => {
    let colorList = [];

    if (!colors.includes(color)) {
      colorList = [...colors, color];
    } else {
      colorList = [...colors.filter(col => col !== color)]
    }

    setColors(colorList);
  }
  return (<>
    <div className="filter">
      <div>
        <p className="filter-header">Renk</p>
        {
          selectableFilters.colors.map((color, i) => {
            return (<span
              key={i}
              style={{ color: getColorFilterStyle(color) }}
              onClick={() => { createColor(color); }}>
              {color} ({products.filter((i) => i.colors.includes(color)).length})
            </span>)
          })
        }
      </div>
      <div>
        <p className="filter-header">Sıralama</p>
        <Sorter isDropdown={false} />
      </div>
      <div>
        <p className="filter-header">Marka</p>
        {
          selectableFilters.brands.map((brand, i) => {
            return (<span
              key={i}
              style={{ color: getBrandFilterStyle(brand) }}
              onClick={() => createBrand(brand)}>
              {brand} ({products.filter((i) => i.brand === brand).length})
            </span>)
          })
        }
      </div>
    </div>
  </>)
}

export default Filter;