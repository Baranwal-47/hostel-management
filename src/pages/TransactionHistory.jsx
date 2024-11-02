import { TransactionTable } from '../components/TransactionTable';
import { NotificationPanel } from '../components/NotificationPanel';

export function TransactionHistory() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Transaction</h2>
      <h1>Hostel Transaction History</h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <TransactionTable />
        <NotificationPanel />
      </div>
    </div>
  );
}