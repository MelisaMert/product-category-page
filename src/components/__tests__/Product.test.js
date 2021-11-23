import {render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Product from '../product';

beforeEach(() => {
    render(<Provider store={store}>
        <Product />,     
    </Provider>)
})

test('Product renders correctly', () => {
    const buttonEl = screen.getByRole("button");
    expect(buttonEl.className).toBe("add-to-cart");
    expect(buttonEl.innerHTML).toBe('Sepete Ekle')
})

