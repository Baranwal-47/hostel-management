import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { store } from './store/store';
import { TransactionHistory } from './pages/TransactionHistory';
import { RoomAllocation } from './pages/RoomAllocation';
import '@mantine/core/styles.css';

export function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <BrowserRouter>
          <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Transaction History</Link>
            <Link to="/room-allocation">Room Allocation</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<TransactionHistory />} />
            <Route path="/room-allocation" element={<RoomAllocation />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
}

export default App;