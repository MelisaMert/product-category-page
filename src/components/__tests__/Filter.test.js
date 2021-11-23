import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import store from '../../store';
import Filter from '../filter';

test('filter renders correctly', () => {
    const {getByText} =  render(<Provider store={store}>
        <Filter />,
    </Provider>)

    expect(getByText(/Renk/i)).toBeInTheDocument();
    expect(getByText(/Sıralama/i)).toBeInTheDocument();
    expect(getByText(/Marka/i)).toBeInTheDocument();
})
