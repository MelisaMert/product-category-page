import {render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Header from '../header';
import Product from '../product';
import DeleteModal from '../delete-modal';

beforeEach(() => {
    render(<Provider store={store}>
        <Header />,     
        <Product />,
        <DeleteModal />
    </Provider>)
})

test('Cart counter is initially 0', () => {
    const counterEl = screen.getByTestId('totalCount');
    expect(counterEl).toBeInTheDocument();
    expect(counterEl).toHaveTextContent(0)
})

test('Add to cart test', () => {
    const elCounter = screen.getByTestId('totalCount');
    const btnAddToCart = screen.getByRole('button', {
        name: /sepete ekle/i
    })
    expect(btnAddToCart).toBeInTheDocument();
})

