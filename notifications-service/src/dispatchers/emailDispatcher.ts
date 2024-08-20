import connectRabbitMQ from '../config/rabbitmqConfig';

export const sendEmailNotification = async (userId: string, message: string) => {
  const connection = await connectRabbitMQ();
  const channel = await connection.createChannel();
  const queue = 'email-queue';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify({ userId, message })));
  console.log(`Email notification sent to queue: ${queue} for user: ${userId}`);

  await channel.close();
  await connection.close();
};
