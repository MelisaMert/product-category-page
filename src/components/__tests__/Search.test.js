import {render, screen} from '@testing-library/react';
import Search from '../search';
import store from '../../store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    render(<Provider store={store}>
        <Search />
    </Provider>)
})

test('Search input text is initial value empty', () => {
     const searchInput = screen.getByTestId('search-input');
     expect(searchInput).toHaveValue("");
})

test('Search input text change', () => {
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toHaveValue("");
    userEvent.type(searchInput, "Ergonomic")
    expect(searchInput).toHaveValue("Ergonomic")
})