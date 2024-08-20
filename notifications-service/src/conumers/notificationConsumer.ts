import kafka from "@/config/kafkaConfig";
import { handleNotification } from "@/services/notificationService";
import { KafkaMessage } from "kafkajs";

const consumer = kafka.consumer({ groupId: 'notification-group' });

export const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'transaction-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: { topic: string, partition: number, message: KafkaMessage }) => {
      const data = JSON.parse(message.value?.toString() || '{}');
      console.log(
        `[${topic}]: PART:${partition}:`,
        data
      );
      // const notificationMessage = `Event for user ${userPreferences.userId}`;
      // await handleNotification(userPreferences, notificationMessage);
    },
  });
};
