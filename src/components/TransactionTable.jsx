import { Table, Avatar, Text, Paper } from '@mantine/core';
import { useSelector } from 'react-redux';

export function TransactionTable() {
  const transactions = useSelector((state) => state.transactions.transactions);

  return (
    <Paper shadow="xs" p="md" style={{ maxWidth: '100%' }}>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Timestamp</Table.Th>
            <Table.Th>Hall</Table.Th>
            <Table.Th>Changed By</Table.Th>
            <Table.Th>Previous_Value</Table.Th>
            <Table.Th>New_Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {transactions.map((transaction) => (
            <Table.Tr key={transaction.id}>
              <Table.Td>{transaction.timestamp}</Table.Td>
              <Table.Td>
                <Text c="cyan">{transaction.hall}</Text>
              </Table.Td>
              <Table.Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Avatar size="sm" radius="xl" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" />
                  <Text>{transaction.changedBy}</Text>
                </div>
              </Table.Td>
              <Table.Td>
                <Text c="cyan">{transaction.previousValue}</Text>
              </Table.Td>
              <Table.Td>{transaction.newValue}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}