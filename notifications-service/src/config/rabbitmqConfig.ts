import amqp from 'amqplib';

const connectRabbitMQ = async () => {
  const connection = await amqp.connect('amqp://localhost');
  return connection;
};

export default connectRabbitMQ;
