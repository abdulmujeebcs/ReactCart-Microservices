import { Kafka } from 'kafkajs';

const kafkaConfig = new Kafka({
    clientId: 'notification-service',
    brokers: ['localhost:9092']
});

export const producer = kafkaConfig.producer();
export const consumer = kafkaConfig.consumer({ groupId: 'notification-group' });

export const connectKafka = async () => {
    await producer.connect();
    await consumer.connect();
};
export default kafkaConfig;
