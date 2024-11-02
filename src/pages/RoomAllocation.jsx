import { useState } from 'react';
import { 
  Container,
  Paper, 
  Select, 
  Button, 
  Table, 
  Group,
  Switch,
  Text,
  Stack,
  NumberInput,
  Title
} from '@mantine/core';

export function RoomAllocation() {
  const [batch, setBatch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [allocated, setAllocated] = useState(false);
  const [maxPerRoom, setMaxPerRoom] = useState(3);

  const mockStudents = [
    { id: 1, name: 'John Doe', roll: '2022CS01', cpi: 8.5, room: 'H1-101' },
    { id: 2, name: 'Alice Smith', roll: '2022CS02', cpi: 9.2, room: 'H1-101' },
    { id: 3, name: 'Bob Johnson', roll: '2022CS03', cpi: 7.8, room: 'H1-102' },
    { id: 4, name: 'Emma Davis', roll: '2022CS04', cpi: 8.9, room: 'H1-102' },
    { id: 5, name: 'Charlie Brown', roll: '2022CS05', cpi: 8.1, room: 'H1-103' },
    { id: 6, name: 'Diana Wilson', roll: '2022CS06', cpi: 9.0, room: 'H1-103' }
  ];

  const handleAllocate = () => {
    setAllocated(true);
  };

  return (
    <Container size="xl" py="xl">
      <Title order={2} mb="xl">Update Student Attendance - Room Allocation</Title>
      
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Group mb="xl">
          <Select
            label="Select Batch"
            placeholder="Choose batch year"
            data={['2022', '2023', '2024']}
            value={batch}
            onChange={setBatch}
            style={{ width: 200 }}
          />
          
          <NumberInput
            label="Students per Room"
            value={maxPerRoom}
            onChange={setMaxPerRoom}
            min={1}
            max={4}
            style={{ width: 200 }}
          />

          <Stack gap="xs">
            <Text size="sm" fw={500}>Allocation Preferences</Text>
            <Group>
              <Switch
                label="Sort by Name"
                checked={sortBy === 'name'}
                onChange={() => setSortBy('name')}
              />
              <Switch
                label="Sort by CPI"
                checked={sortBy === 'cpi'}
                onChange={() => setSortBy('cpi')}
              />
            </Group>
          </Stack>

          <Button 
            onClick={handleAllocate}
            variant="filled"
            color="blue"
            size="md"
            style={{ marginTop: 'auto' }}
          >
            Allocate Rooms
          </Button>
        </Group>

        {allocated && (
          <Paper shadow="sm" p="md" withBorder>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Roll Number</Table.Th>
                  <Table.Th>CPI</Table.Th>
                  <Table.Th>Allocated Room</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {mockStudents
                  .sort((a, b) => sortBy === 'cpi' ? b.cpi - a.cpi : a.name.localeCompare(b.name))
                  .map((student) => (
                    <Table.Tr key={student.id}>
                      <Table.Td>{student.name}</Table.Td>
                      <Table.Td>{student.roll}</Table.Td>
                      <Table.Td>{student.cpi}</Table.Td>
                      <Table.Td>
                        <Text c="blue" fw={500}>{student.room}</Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}