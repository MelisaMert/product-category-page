import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import store from '../../store';
import Search from '../search';
import SubHeader from '../sub-header';

beforeEach(() => {
    render(<Provider store={store}>
        <Search />,     
        <SubHeader />
    </Provider>)
})

test('searched word text is initial value empty', () => {
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toHaveTextContent("");
})

test('Searched word text updated correctly', () => {
    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, "Ergonomic")
    const searchedSpan = screen.getByTestId('search-text');
    expect(searchedSpan).toHaveTextContent("Ergonomic")
})
