import { render } from '@testing-library/react';
import App from './App';
import store from './store'
import {Provider} from 'react-redux';
import Header from './components/header';
import SubHeader from './components/sub-header';
import ProductList from './components/product-list';
import DeleteModal from './components/delete-modal';
import Filter from './components/filter';

beforeEach(() => {
    render(<Provider store={store}>
        <App />
    </Provider>)
})

it('Header render correctly', () => {
    render( <Provider store={store}><Header /></Provider>)
})

it('DeleteModal render correctly', () => {
    render( <Provider store={store}><DeleteModal /></Provider>)
})

it('SubHeader render correctly', () => {
    render( <Provider store={store}><SubHeader /></Provider>)
})

it('Filter render correctly', () => {
    render( <Provider store={store}><Filter /></Provider>)
})

it('ProductList render correctly', () => {
    render( <Provider store={store}><ProductList /></Provider>)
})


