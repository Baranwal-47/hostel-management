import { Paper, Stack, Card, Title } from '@mantine/core';

export function NotificationPanel() {
  const notifications = Array(6).fill('Notification 1');

  return (
    <Paper shadow="xs" p="md" style={{ width: '300px' }}>
      <Title order={4} mb="md">Notifications | Announcements</Title>
      <Stack>
        {notifications.map((notification, index) => (
          <Card key={index} shadow="sm" p="sm">
            {notification}
          </Card>
        ))}
      </Stack>
    </Paper>
  );
}