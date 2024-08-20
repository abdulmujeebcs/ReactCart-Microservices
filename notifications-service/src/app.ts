import express from 'express';
import { startConsumer } from './conumers/notificationConsumer';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Notification Service is running');
});

startConsumer().catch((error) => console.log(`Failed to start consumer: ${error.message}`));

export default app;
